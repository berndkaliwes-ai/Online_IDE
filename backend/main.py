from fastapi import FastAPI, File, UploadFile, Body
from fastapi.responses import FileResponse
import shutil
import whisper
from contextlib import asynccontextmanager
import os
from pydub import AudioSegment
from TTS.api import TTS

# This dictionary will hold our models
models = {}

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Load the Whisper model on startup
    print("Loading Whisper model...")
    models["whisper_model"] = whisper.load_model("tiny")
    print("Whisper model loaded.")

    # Load the TTS model on startup
    # TTS-Modell wird nur bei Bedarf geladen

    yield
    # Clean up resources on shutdown
    models.clear()
    print("Cleaned up resources.")

app = FastAPI(lifespan=lifespan)

@app.get("/audio-files/")
def list_audio_files():
    metadata_path = os.path.join("audio_files", "metadata.csv")
    files = []
    if os.path.exists(metadata_path):
        with open(metadata_path, "r") as f:
            for line in f:
                parts = line.strip().split("|", 1)
                if len(parts) == 2:
                    files.append({"filename": parts[0], "transcription": parts[1]})
    return {"audio_files": files}
@app.get("/")
def read_root():
    return {"message": "Hallo Welt vom FastAPI-Backend!"}

@app.post("/upload-audio/")
async def upload_audio(file: UploadFile = File(...)):
    # Define paths
    audio_dir = "audio_files"
    wavs_dir = os.path.join(audio_dir, "wavs")
    os.makedirs(wavs_dir, exist_ok=True)
    metadata_path = os.path.join(audio_dir, "metadata.csv")
    
    # Get filename without extension
    filename_base, _ = os.path.splitext(file.filename)
    wav_filename = f"{filename_base}.wav"
    wav_filepath = os.path.join(wavs_dir, wav_filename)
    
    # Convert and save the uploaded file as WAV
    audio = AudioSegment.from_file(file.file)
    audio.export(wav_filepath, format="wav")
    
    # Transcribe the audio file
    model = models["whisper_model"]
    result = model.transcribe(wav_filepath, fp16=False)
    transcription = result["text"]
    
    # Append to metadata.csv
    with open(metadata_path, "a") as f:
        f.write(f"{wav_filename}|{transcription}\n")
        
    # Return info
    return {
        "filename": wav_filename,
        "transcription": transcription,
        "message": "File processed and added to dataset."
    }

@app.post("/clone-voice/")
def clone_voice(text: str = Body(...), speaker_wav: str = Body(...)):
    tts = models["tts_model"]
    output_path = "output.wav"
    
    # Correct the path for speaker_wav
    speaker_wav_path = os.path.join("audio_files", "wavs", speaker_wav)

    tts.tts_to_file(
        text=text,
        speaker_wav=speaker_wav_path,
        language="en",
        file_path=output_path
    )
    return FileResponse(output_path, media_type="audio/wav")
