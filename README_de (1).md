# AutoGPT: KI-Agenten erstellen, bereitstellen und ausführen

[![Discord Follow](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fdiscord.com%2Fapi%2Finvites%2Fautogpt%3Fwith_counts%3Dtrue&query=%24.approximate_member_count&label=total%20members&logo=discord&logoColor=white&color=7289da)](https://discord.gg/autogpt) &ensp;
[![Twitter Follow](https://img.shields.io/twitter/follow/Auto_GPT?style=social)](https://twitter.com/Auto_GPT) &ensp;

<!-- Keep these links. Translations will automatically update with the README. -->

[Deutsch](https://zdoc.app/de/Significant-Gravitas/AutoGPT) |
[Español](https://zdoc.app/es/Significant-Gravitas/AutoGPT) |
[français](https://zdoc.app/fr/Significant-Gravitas/AutoGPT) |
[日本語](https://zdoc.app/ja/Significant-Gravitas/AutoGPT) |
[한국어](https://zdoc.app/ko/Significant-Gravitas/AutoGPT) |
[Português](https://zdoc.app/pt/Significant-Gravitas/AutoGPT) |
[Русский](https://zdoc.app/ru/Significant-Gravitas/AutoGPT) |
[中文](https://zdoc.app/zh/Significant-Gravitas/AutoGPT)

**AutoGPT** ist eine leistungsstarke Plattform, mit der Sie kontinuierliche KI-Agenten erstellen, bereitstellen und verwalten können, die komplexe Workflows automatisieren.

## Hosting-Optionen

- Zum Selbsthosten herunterladen (Kostenlos!)
  - [Warteliste beitreten](https://bit.ly/3ZDijAI) für die cloud-gehostete Beta (Geschlossene Beta - Öffentliche Veröffentlichung demnächst!)

## So hosten Sie die AutoGPT-Plattform selbst

> [!HINWEIS]
> Die Einrichtung und das Hosting der AutoGPT-Plattform selbst ist ein technischer Prozess.
> Wenn Sie lieber eine sofort funktionierende Lösung möchten, empfehlen wir Ihnen, [der Warteliste beizutreten](https://bit.ly/3ZDijAI) für die cloud-gehostete Beta.

### Systemanforderungen

Bevor Sie mit der Installation fortfahren, stellen Sie sicher, dass Ihr System die folgenden Anforderungen erfüllt:

#### Hardware-Anforderungen

- CPU: 4+ Kerne empfohlen
- RAM: Mindestens 8GB, 16GB empfohlen
- Speicher: Mindestens 10GB freier Speicherplatz

#### Software-Anforderungen

- Betriebssysteme:
  - Linux (Ubuntu 20.04 oder neuer empfohlen)
  - macOS (10.15 oder neuer)
  - Windows 10/11 mit WSL2
- Erforderliche Software (mit Mindestversionen):
  - Docker Engine (20.10.0 oder neuer)
  - Docker Compose (2.0.0 oder neuer)
  - Git (2.30 oder neuer)
  - Node.js (16.x oder neuer)
  - npm (8.x oder neuer)
  - VSCode (1.60 oder neuer) oder ein moderner Code-Editor

#### Netzwerkanforderungen

- Stabile Internetverbindung
- Zugriff auf erforderliche Ports (wird in Docker konfiguriert)
- Möglichkeit ausgehende HTTPS-Verbindungen herzustellen

### Aktualisierte Installationsanleitungen

Wir sind zu einer vollständig gepflegten und regelmäßig aktualisierten Dokumentationsseite gewechselt.

👉 [Folgen Sie der offiziellen Self-Hosting-Anleitung hier](https://docs.agpt.co/platform/getting-started/)

Dieses Tutorial setzt voraus, dass Docker, VSCode, git und npm installiert sind.

---

#### ⚡ Schnelleinrichtung mit Einzeilen-Skript (Empfohlen für lokales Hosting)

Überspringen Sie die manuellen Schritte und starten Sie in wenigen Minuten mit unserem automatischen Einrichtungsskript.

Für macOS/Linux:

```
curl -fsSL https://setup.agpt.co/install.sh -o install.sh && bash install.sh
```

Für Windows (PowerShell):

```
powershell -c "iwr https://setup.agpt.co/install.bat -o install.bat; ./install.bat"
```

Dies installiert Abhängigkeiten, konfiguriert Docker und startet Ihre lokale Instanz – alles in einem Schritt.

### 🧱 AutoGPT Frontend

Das AutoGPT Frontend ist der Ort, an dem Benutzer mit unserer leistungsstarken KI-Automatisierungsplattform interagieren. Es bietet mehrere Möglichkeiten, mit unseren KI-Agenten zu arbeiten und sie zu nutzen. Dies ist die Schnittstelle, auf der Sie Ihre KI-Automatisierungsideen zum Leben erwecken:

**Agent Builder:** Für diejenigen, die anpassen möchten, ermöglicht unsere intuitive Low-Code-Oberfläche das Design und die Konfiguration eigener KI-Agenten.

**Workflow Management:** Erstellen, ändern und optimieren Sie Ihre Automatisierungs-Workflows mühelos. Sie bauen Ihren Agenten durch das Verbinden von Blöcken, wobei jeder Block eine einzelne Aktion ausführt.

**Deployment Controls:** Verwalten Sie den Lebenszyklus Ihrer Agenten, vom Test bis zur Produktion.

**Ready-to-Use Agents:** Keine Lust zu bauen? Wählen Sie einfach aus unserer Bibliothek vorkonfigurierter Agenten aus und setzen Sie sie sofort ein.

**Agent Interaction:** Egal, ob Sie eigene Agenten erstellt haben oder vorkonfigurierte verwenden – führen Sie sie mühelos über unsere benutzerfreundliche Oberfläche aus und interagieren Sie mit ihnen.

**Monitoring and Analytics:** Behalten Sie die Leistung Ihrer Agenten im Blick und gewinnen Sie Erkenntnisse, um Ihre Automatisierungsprozesse kontinuierlich zu verbessern.

[Lesen Sie diese Anleitung](https://docs.agpt.co/platform/new_blocks/), um zu erfahren, wie Sie eigene benutzerdefinierte Blöcke erstellen.

### 💽 AutoGPT Server

Der AutoGPT Server ist das Herzstück unserer Plattform. Hier laufen Ihre Agenten. Nach der Bereitstellung können Agenten durch externe Quellen ausgelöst werden und kontinuierlich arbeiten. Er enthält alle wesentlichen Komponenten, die AutoGPT reibungslos laufen lassen.

**Source Code:** Die Kernlogik, die unsere Agenten und Automatisierungsprozesse antreibt.

**Infrastructure:** Robuste Systeme, die eine zuverlässige und skalierbare Leistung gewährleisten.

**Marketplace:** Ein umfassender Marktplatz, auf dem Sie eine Vielzahl von vorgefertigten Agents finden und bereitstellen können.

### 🐙 Beispiel-Agents

Hier sind zwei Beispiele für das, was Sie mit AutoGPT tun können:

1. **Virale Videos aus Trendthemen generieren**
   - Dieser Agent liest Themen auf Reddit.
   - Er identifiziert Trendthemen.
   - Anschließend erstellt er automatisch ein Kurzvideo basierend auf dem Inhalt.

2. **Top-Zitate aus Videos für soziale Medien identifizieren**
   - Dieser Agent abonniert Ihren YouTube-Kanal.
   - Wenn Sie ein neues Video posten, transkribiert er es.
   - Er nutzt KI, um die wirkungsvollsten Zitate für eine Zusammenfassung zu identifizieren.
   - Dann verfasst er einen Beitrag, der automatisch in Ihren sozialen Medien veröffentlicht wird.

Diese Beispiele zeigen nur einen kleinen Ausschnitt dessen, was Sie mit AutoGPT erreichen können! Sie können angepasste Workflows erstellen, um Agents für jeden Anwendungsfall zu bauen.

---

### **Lizenzübersicht:**

🛡️ **Polyform Shield License:**
Alle Codes und Inhalte im Ordner `autogpt_platform` sind unter der Polyform Shield License lizenziert. Dieses neue Projekt ist unsere in-der-Entwicklung befindliche Plattform zum Erstellen, Bereitstellen und Verwalten von Agents.</br>_[Mehr über dieses Projekt erfahren](https://agpt.co/blog/introducing-the-autogpt-platform)_

🦉 **MIT-Lizenz:**
Alle anderen Teile des AutoGPT-Repositorys (d.h. alles außerhalb des Ordners `autogpt_platform`) sind unter der MIT-Lizenz lizenziert. Dies umfasst den ursprünglichen eigenständigen AutoGPT-Agenten sowie Projekte wie [Forge](https://github.com/Significant-Gravitas/AutoGPT/tree/master/classic/forge), [agbenchmark](https://github.com/Significant-Gravitas/AutoGPT/tree/master/classic/benchmark) und die [AutoGPT Classic GUI](https://github.com/Significant-Gravitas/AutoGPT/tree/master/classic/frontend).</br>Wir veröffentlichen zusätzliche Arbeiten unter der MIT-Lizenz in anderen Repositorys, wie z.B. [GravitasML](https://github.com/Significant-Gravitas/gravitasml), das für die AutoGPT-Plattform entwickelt und verwendet wird. Siehe auch unser MIT-lizenziertes [Code Ability](https://github.com/Significant-Gravitas/AutoGPT-Code-Ability)-Projekt.

---

### Mission

Unsere Mission ist es, die Werkzeuge bereitzustellen, damit Sie sich auf das Wesentliche konzentrieren können:

- 🏗️ **Bauen** - Legen Sie den Grundstein für etwas Großartiges.
- 🧪 **Testen** - Feintunen Sie Ihren Agenten zur Perfektion.
- 🤝 **Delegieren** - Lassen Sie KI für Sie arbeiten und Ihre Ideen Wirklichkeit werden.

Seien Sie Teil der Revolution! **AutoGPT** ist hier, um zu bleiben, an der Spitze der KI-Innovation.

**📖 [Dokumentation](https://docs.agpt.co)**
&ensp;|&ensp;
**🚀 [Mitwirken](CONTRIBUTING.md)**

---

## 🤖 AutoGPT Classic

> Unten finden Sie Informationen zur klassischen Version von AutoGPT.

**🛠️ [Erstellen Sie Ihren eigenen Agenten - Schnellstart](classic/FORGE-QUICKSTART.md)**

### 🏗️ Forge

**Schmieden Sie Ihren eigenen Agenten!** &ndash; Forge ist ein einsatzbereites Toolkit zum Erstellen Ihrer eigenen Agentenanwendung. Es übernimmt den größten Teil des Boilerplate-Codes, sodass Sie Ihre gesamte Kreativität in die Dinge stecken können, die _Ihren_ Agenten auszeichnen. Alle Tutorials finden Sie [hier](https://medium.com/@aiedge/autogpt-forge-e3de53cc58ec). Komponenten aus [`forge`](/classic/forge/) können auch einzeln verwendet werden, um die Entwicklung zu beschleunigen und Boilerplate in Ihrem Agentenprojekt zu reduzieren.

🚀 [**Erste Schritte mit Forge**](https://github.com/Significant-Gravitas/AutoGPT/blob/master/classic/forge/tutorials/001_getting_started.md) &ndash;
Diese Anleitung führt Sie durch den Prozess der Erstellung Ihres eigenen Agenten und der Verwendung des Benchmarks und der Benutzeroberfläche.

📘 [Erfahren Sie mehr](https://github.com/Significant-Gravitas/AutoGPT/tree/master/classic/forge) über Forge

### 🎯 Benchmark

**Messen Sie die Leistung Ihres Agenten!** Der `agbenchmark` kann mit jedem Agenten verwendet werden, der das Agentenprotokoll unterstützt, und die Integration mit der [CLI] des Projekts macht die Verwendung mit AutoGPT und forge-basierten Agenten noch einfacher. Der Benchmark bietet eine strenge Testumgebung. Unser Framework ermöglicht autonome, objektive Leistungsbewertungen und stellt sicher, dass Ihre Agenten für den Einsatz in der realen Welt bereit sind.

<!-- TODO: visuelle Darstellung des Benchmarks einfügen -->

📦 [`agbenchmark`](https://pypi.org/project/agbenchmark/) auf Pypi
&ensp;|&ensp;
📘 [Mehr erfahren](https://github.com/Significant-Gravitas/AutoGPT/tree/master/classic/benchmark) über den Benchmark

### 💻 UI

**Macht Agents einfach zu bedienen!** Das `frontend` bietet eine benutzerfreundliche Oberfläche zur Steuerung und Überwachung Ihrer Agents. Es verbindet sich mit Agents über das [Agent Protocol](#-agent-protocol) und gewährleistet so Kompatibilität mit vielen Agents innerhalb und außerhalb unseres Ökosystems.

<!-- TODO: Screenshot der Benutzeroberfläche einfügen -->

Das Frontend funktioniert sofort mit allen Agents im Repository. Verwenden Sie einfach die [CLI], um Ihren bevorzugten Agenten auszuführen!

📘 [Mehr erfahren](https://github.com/Significant-Gravitas/AutoGPT/tree/master/classic/frontend) über das Frontend

### ⌨️ CLI

[CLI]: #-cli

Um die Nutzung aller im Repository angebotenen Tools so einfach wie möglich zu machen, ist eine CLI im Root-Verzeichnis des Repositories enthalten:

```shell
$ ./run
Usage: cli.py [OPTIONS] COMMAND [ARGS]...

Options:
  --help  Show this message and exit.

Commands:
  agent      Commands to create, start and stop agents
  benchmark  Commands to start the benchmark and list tests and categories
  setup      Installs dependencies needed for your system.
```

Klonen Sie einfach das Repository, installieren Sie die Abhängigkeiten mit `./run setup`, und schon können Sie loslegen!

## 🤔 Fragen? Probleme? Vorschläge?

### Hilfe erhalten - [Discord 💬](https://discord.gg/autogpt)

[![Join us on Discord](https://invidget.switchblade.xyz/autogpt)](https://discord.gg/autogpt)

Um einen Fehler zu melden oder eine Funktion anzufragen, erstellen Sie ein [GitHub Issue](https://github.com/Significant-Gravitas/AutoGPT/issues/new/choose). Bitte stellen Sie sicher, dass nicht bereits ein Issue für dasselbe Thema existiert.

## 🤝 Schwesterprojekte

### 🔄 Agent Protocol

Um einen einheitlichen Standard zu gewährleisten und nahtlose Kompatibilität mit vielen aktuellen und zukünftigen Anwendungen zu ermöglichen, nutzt AutoGPT den [agent protocol](https://agentprotocol.ai/)-Standard der AI Engineer Foundation. Dies standardisiert die Kommunikationswege zwischen Ihrem Agenten, dem Frontend und den Benchmark-Tests.

---

## Sterne-Statistiken

<p align="center">
<a href="https://star-history.com/#Significant-Gravitas/AutoGPT">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Significant-Gravitas/AutoGPT&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Significant-Gravitas/AutoGPT&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Significant-Gravitas/AutoGPT&type=Date" />
  </picture>
</a>
</p>

## ⚡ Mitwirkende

<a href="https://github.com/Significant-Gravitas/AutoGPT/graphs/contributors" alt="View Contributors">
  <img src="https://contrib.rocks/image?repo=Significant-Gravitas/AutoGPT&max=1000&columns=10" alt="Contributors" />
</a>
