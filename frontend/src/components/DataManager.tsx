import React, { useState } from 'react';

const DataManager: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadMessage, setUploadMessage] = useState<string>('');
  const [transcription, setTranscription] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setUploadMessage('');
      setTranscription(''); // Reset transcription on new file selection
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage('Bitte wählen Sie zuerst eine Datei aus.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    setUploadMessage('Datei wird hochgeladen und transkribiert...');
    setTranscription('');

    try {
      const response = await fetch('http://localhost:8000/upload-audio/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setUploadMessage(`Datei erfolgreich verarbeitet: ${result.filename}`);
        setTranscription(result.transcription);
      } else {
        setUploadMessage('Fehler beim Verarbeiten der Datei.');
      }
    } catch (error) {
      setUploadMessage('Netzwerkfehler oder Server nicht erreichbar.');
      console.error('Upload error:', error);
    }
  };

  return (
    <div>
      <h2>Datenmaterial-Manager</h2>

      <section>
        <h3>1. Audiodateien hochladen & Transkribieren</h3>
        <p>Laden Sie eine WAV-Datei hoch, um sie automatisch transkribieren zu lassen.</p>
        <input type="file" accept=".wav" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={!selectedFile}>
          Hochladen & Transkribieren
        </button>
        {uploadMessage && <p>{uploadMessage}</p>}
        {transcription && (
          <div>
            <h4>Transkription:</h4>
            <blockquote style={{ fontStyle: 'italic', background: '#222', padding: '10px', borderRadius: '5px' }}>
              <p>{transcription}</p>
            </blockquote>
          </div>
        )}
      </section>

      <section>
        <h3>2. Direkte Aufnahme im Browser</h3>
        <p>Alternativ können Sie hier direkt neue Audio-Clips aufnehmen.</p>
        <button>Aufnahme starten</button>
      </section>

      <section>
        <h3>Verwaltete Audiodateien</h3>
        <p>Hier werden Ihre hochgeladenen und aufgenommenen Clips angezeigt.</p>
        <ul>
          {/* Beispiel-Item */}
          <li>
            <span>audio_clip_001.wav</span>
            <button>Abspielen</button>
            <button>Löschen</button
          </li>
        </ul>
      </section>
    </div>
  );
};

export default DataManager;
