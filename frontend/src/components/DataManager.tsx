import React from 'react';

const DataManager: React.FC = () => {
  return (
    <div>
      <h2>Datenmaterial-Manager</h2>

      <section>
        <h3>1. Audiodateien hochladen</h3>
        <p>Laden Sie hier Ihre aufgenommenen Audiodateien hoch (z.B. im WAV-Format).</p>
        <input type="file" accept=".wav" multiple />
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
