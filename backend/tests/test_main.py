from fastapi.testclient import TestClient
import io
from main import app

# Es wird kein globaler Client mehr verwendet, um Lifespan-Events pro Test zu ermöglichen.

def test_read_main():
    """Stellt sicher, dass der Root-Endpunkt funktioniert."""
    with TestClient(app) as client:
        response = client.get("/")
        assert response.status_code == 200
        assert response.json() == {"message": "Hallo Welt vom FastAPI-Backend!"}


def test_upload_audio_with_mocked_transcription(mocker):
    """
    Testet den /upload-audio/ Endpunkt mit einem gemockten Whisper-Modell.
    """
    # Mocking des Whisper-Modells vorbereiten
    mock_transcribe_result = {"text": "Dies ist ein Test."}
    mocker.patch(
        "main.whisper.load_model"
    ).return_value.transcribe.return_value = mock_transcribe_result

    # TestClient als Context Manager verwenden, um Lifespan-Events auszulösen
    with TestClient(app) as client:
        # Eine gefälschte Audiodatei im Speicher erstellen
        fake_audio_bytes = b"fake wav data"
        fake_file = io.BytesIO(fake_audio_bytes)

        # Die Anfrage an den Endpunkt senden
        response = client.post(
            "/upload-audio/",
            files={"file": ("test.wav", fake_file, "audio/wav")}
        )

        # Überprüfen der Ergebnisse
        assert response.status_code == 200
        response_data = response.json()
        assert response_data["filename"] == "test.wav"
        assert response_data["transcription"] == "Dies ist ein Test."
