import React, { useState, useRef } from 'react';

const DataManager: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadMessage, setUploadMessage] = useState<string>('');
  const [transcription, setTranscription] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioURL, setAudioURL] = useState<string>('');
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setUploadMessage('');
      setTranscription('');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage('Bitte wählen Sie zuerst eine Datei aus.');
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFile, selectedFile.name);
    await uploadAndProcessFile(formData);
  };

  const handleRecordedUpload = async () => {
    if (!recordedBlob) {
      setUploadMessage('Keine Aufnahme zum Hochladen vorhanden.');
      return;
    }
    const formData = new FormData();
    const fileName = `recording-${new Date().toISOString()}.wav`;
    formData.append('file', recordedBlob, fileName);
    await uploadAndProcessFile(formData);
  };

  const uploadAndProcessFile = async (formData: FormData) => {
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

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        setRecordedBlob(audioBlob);
        audioChunksRef.current = [];
      };
      audioChunksRef.current = [];
      mediaRecorderRef.current.start();
      setIsRecording(true);
      setUploadMessage('');
    } catch (err) {
      console.error('Fehler beim Zugriff auf das Mikrofon:', err);
      setUploadMessage('Fehler beim Zugriff auf das Mikrofon. Bitte Berechtigung erteilen.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
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
      </section>

      <section>
        <h3>2. Direkte Aufnahme im Browser</h3>
        <p>Alternativ können Sie hier direkt neue Audio-Clips aufnehmen.</p>
        {!isRecording ? (
          <button onClick={startRecording}>Aufnahme starten</button>
        ) : (
          <button onClick={stopRecording}>Aufnahme stoppen</button>
        )}
        {audioURL && (
          <div>
            <h4>Aufgenommene Audiodatei:</h4>
            <audio src={audioURL} controls />
            <button onClick={handleRecordedUpload}>Aufnahme hochladen & Transkribieren</button>
          </div>
        )}
      </section>

      {uploadMessage && <p>{uploadMessage}</p>}
      {transcription && (
        <div>
          <h4>Transkription:</h4>
          <blockquote style={{ fontStyle: 'italic', background: '#222', padding: '10px', borderRadius: '5px' }}>
            <p>{transcription}</p>
          </blockquote>
        </div>
      )}

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
