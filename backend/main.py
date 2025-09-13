from fastapi import FastAPI, File, UploadFile
import shutil
import whisper
from contextlib import asynccontextmanager

# This dictionary will hold our model
models = {}

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Load the Whisper model on startup
    # Using the "base" model as it is a good balance of size and performance.
    print("Loading Whisper model...")
    models["whisper_model"] = whisper.load_model("base")
    print("Whisper model loaded.")
    yield
    # Clean up resources on shutdown
    models.clear()
    print("Cleaned up resources.")

app = FastAPI(lifespan=lifespan)

@app.get("/")
def read_root():
    return {"message": "Hallo Welt vom FastAPI-Backend!"}

@app.post("/upload-audio/")
async def upload_audio(file: UploadFile = File(...)):
    file_path = f"audio_files/{file.filename}"
    # Save the uploaded file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    # Transcribe the audio file
    model = models["whisper_model"]
    # fp16=False is safer for CPU-only environments
    result = model.transcribe(file_path, fp16=False)
    
    # Return info including the transcription
    return {
        "filename": file.filename,
        "transcription": result["text"]
    }
