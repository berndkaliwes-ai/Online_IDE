from fastapi import FastAPI, File, UploadFile
import shutil

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hallo Welt vom FastAPI-Backend!"}

@app.post("/upload-audio/")
async def upload_audio(file: UploadFile = File(...)):
    file_path = f"audio_files/{file.filename}"
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    return {"filename": file.filename, "content_type": file.content_type, "path": file_path}
