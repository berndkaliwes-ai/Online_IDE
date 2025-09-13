import React, { useState } from 'react';

const DataManager: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadMessage, setUploadMessage] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setUploadMessage('');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage('Bitte wählen Sie zuerst eine Datei aus.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    setUploadMessage('Datei wird hochgeladen...');

    try {
      const response = await fetch('http://localhost:8000/upload-audio/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setUploadMessage(`Datei erfolgreich hochgeladen: ${result.filename}`);
      } else {
        setUploadMessage('Fehler beim Hochladen der Datei.');
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
        <h3>1. Audiodateien hochladen</h3>
        <p>Laden Sie hier Ihre aufgenommenen Audiodateien hoch (z.B. im WAV-Format).</p>
        <input type="file" accept=".wav" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={!selectedFile}>
          Ausgewählte Datei hochladen
        </button>
        {uploadMessage && <p>{uploadMessage}</p>}
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
            <button>Löschen</button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default DataManager;
