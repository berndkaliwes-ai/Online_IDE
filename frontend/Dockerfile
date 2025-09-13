# Node.js-Basis-Image für die Entwicklungsumgebung
FROM node:20-alpine

# Arbeitsverzeichnis im Container festlegen
WORKDIR /app

# package.json und package-lock.json kopieren
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm install

# Restlichen Quellcode kopieren
COPY . .

# Vite-Entwicklungsserver-Port freigeben
EXPOSE 5173

# Vite-Entwicklungsserver starten und von außerhalb des Containers erreichbar machen
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
