# Python-Basis-Image verwenden
FROM python:3.11-slim

# Arbeitsverzeichnis im Container festlegen
WORKDIR /app

# Abhängigkeiten installieren
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Anwendungs-Code kopieren
COPY . .

# Port freigeben, auf dem die Anwendung läuft
EXPOSE 8000

# Anwendung mit Uvicorn starten
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
