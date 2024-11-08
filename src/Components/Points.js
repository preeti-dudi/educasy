import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [pptFile, setPptFile] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');  // Reset error on file change
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000/convert', formData);
      setPptFile(response.data.ppt_file);
      setError('');  // Reset error if successful
    } catch (err) {
      setError('Error converting file. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Text to PPT Converter</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload and Convert</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {pptFile && (
        <div>
          <h2>Conversion Successful!</h2>
          <p>Download your PPT file:</p>
          <a href={`http://127.0.0.1:5000/${pptFile}`} target="_blank" rel="noopener noreferrer">
            {pptFile}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
