import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { UploadCloud, FileText, BrainCircuit, Loader2 } from 'lucide-react';

export default function StudentAISummary() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Setup Gemini API. In production, this call MUST be from a secure backend to hide VITE_GEMINI_API_KEY.
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

  function fileToGenerativePart(file, base64Data) {
    return {
      inlineData: {
        data: base64Data.split(',')[1],
        mimeType: file.type
      },
    };
  }

  async function handleSummarize(e) {
    e.preventDefault();
    if (!file) {
      setError('Please select a file first.');
      return;
    }
    if (!genAI || apiKey === 'your_gemini_api_key_here') {
      setError('Gemini API key is not configured in .env. Please add it to test this feature.');
      return;
    }
    
    setLoading(true);
    setError('');
    setSummary('');

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Fast and handles docs/images
      
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        try {
          const imagePart = fileToGenerativePart(file, reader.result);
          const prompt = "You are an expert tutor. Please summarize the contents of this document or image. Provide key takeaways, main concepts, and bullet points to help a student learn it quickly.";
          
          const result = await model.generateContent([prompt, imagePart]);
          const response = await result.response;
          setSummary(response.text());
        } catch (err) {
          setError('Failed to generate summary: ' + err.message);
        }
        setLoading(false);
      };
      reader.onerror = () => {
        setError('Error reading file.');
        setLoading(false);
      };
    } catch (err) {
      setError('API initialization failed: ' + err.message);
      setLoading(false);
    }
  }

  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <BrainCircuit color="var(--accent-primary)" /> AI Summarizer
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Upload your notes, PDFs, or images for instant AI-powered summaries.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem' }}>
        
        {/* Upload Section */}
        <div className="glass-panel" style={{ padding: '1.5rem', height: 'fit-content' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Upload Document</h2>
          
          <div 
            style={{ 
              border: '2px dashed var(--glass-border)', 
              borderRadius: 'var(--radius-md)', 
              padding: '2rem', 
              textAlign: 'center',
              backgroundColor: 'var(--bg-tertiary)',
              marginBottom: '1rem',
              cursor: 'pointer'
            }}
            onClick={() => document.getElementById('file-upload').click()}
          >
            <UploadCloud size={48} color="var(--accent-primary)" style={{ margin: '0 auto 1rem auto' }} />
            <div style={{ fontWeight: 600 }}>Click to browse or drag & drop</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Support for Images, PDFs (Max 5MB)</div>
            <input 
              id="file-upload" 
              type="file" 
              accept="image/*,application/pdf" 
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          {file && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', border: '1px solid var(--accent-primary)' }}>
              <FileText size={20} color="var(--accent-primary)" />
              <div style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '0.875rem' }}>
                {file.name}
              </div>
            </div>
          )}

          {error && <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--accent-danger)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', fontSize: '0.875rem' }}>{error}</div>}

          <button 
            onClick={handleSummarize}
            disabled={loading || !file}
            style={{ 
              width: '100%',
              backgroundColor: 'var(--accent-primary)',
              color: 'white',
              padding: '0.75rem',
              borderRadius: 'var(--radius-md)',
              fontWeight: 600,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              opacity: loading || !file ? 0.6 : 1
            }}
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : <BrainCircuit size={18} />} 
            {loading ? 'Analyzing Source...' : 'Generate Summary'}
          </button>
        </div>

        {/* Results Section */}
        <div className="glass-panel" style={{ padding: '2rem', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText color="var(--text-muted)" /> Analysis Result
          </h2>

          {!summary && !loading ? (
             <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'var(--text-muted)' }}>
               <BrainCircuit size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
               <p>Your AI-generated summary will appear here.</p>
             </div>
          ) : loading ? (
             <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'var(--accent-primary)' }}>
               {/* Quick CSS animation for spinner mock since we didn't add tailwind */}
               <style>{`@keyframes spin { 100% { transform: rotate(360deg); } } .animate-spin { animation: spin 1s linear infinite; }`}</style>
               <Loader2 size={48} className="animate-spin" style={{ marginBottom: '1rem' }} />
               <p>AI is processing your document...</p>
             </div>
          ) : (
            <div style={{ flex: 1, overflowY: 'auto' }}>
               <div style={{ 
                 whiteSpace: 'pre-wrap', 
                 lineHeight: 1.6, 
                 color: 'var(--text-primary)',
                 fontSize: '0.95rem' 
               }}>
                 {summary}
               </div>
               
               <div style={{ marginTop: '2rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                 <button style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}>
                   Save to Study Materials
                 </button>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
