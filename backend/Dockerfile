# Python-Basis-Image verwenden
FROM python:3.11-slim

# Arbeitsverzeichnis im Container festlegen
WORKDIR /app

# Systemabhängigkeiten installieren
RUN apt-get update && apt-get install -y ffmpeg

# Abhängigkeiten installieren
COPY requirements.txt .
COPY requirements-dev.txt .
RUN pip install --no-cache-dir -r requirements.txt -r requirements-dev.txt

# Anwendungs-Code kopieren
COPY . .


# Lizenzbedingungen für Coqui TTS automatisch akzeptieren
ENV COQUI_TOS_AGREED=1
EXPOSE 8000

# Anwendung mit Uvicorn starten
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
