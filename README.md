# 🎙️ SpeakEasy – Text-to-Speech App  

Convert any text into natural-sounding speech using a FastAPI backend + a simple HTML/CSS/JS frontend.  

I built this after seeing some of my friends work on AI agents as part of a 30-day challenge.  
I challenged myself to ship this in under a week – and here it is 🚀.  

---

## ✨ Features  

- 📝 Type text → get instant speech output  
- 🌍 Multi-language support (English / Hindi out of the box)  
- 📥 Download generated audio  
- 🕘 Keeps history of last 5 conversions  
- ⚡ One-click startup script (no manual server start)  

---

## 📂 Project Structure  

<pre>
  TextToSpeechApp/
│
├── backend/ # FastAPI backend
│ ├── main.py # API endpoint /tts
│ ├── venv/ # Virtual environment
│ └── requirements.txt # Backend dependencies
│
├── frontend/ # Simple frontend
│ ├── index.html # UI
│ ├── style.css # Styles
│ └── script.js # Frontend logic
│
└── run_speakeasy.bat # One-click starter script
</pre>


---

## ⚙️ How It Works  

- **Backend:** FastAPI + gTTS. Receives text via POST `/tts`, returns an MP3 audio file.  
- **Frontend:** Vanilla HTML, CSS, JS. Sends form data to backend and plays returned audio.  
- **Startup Script:** `run_speakeasy.bat` activates your virtualenv, runs FastAPI, then launches `index.html`.  

---

## 🖥️ Running Locally  

> **First time only:** make sure you have Python 3.9+ and Git installed.

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/YOURUSERNAME/SpeakEasy.git
cd SpeakEasy
```
## 2️⃣ Install Backend Dependencies

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
pip install -r requirements.txt
```
(If you’re on Linux/Mac, use source venv/bin/activate instead.)
## 3️⃣ Start the App (One Click)

From the project root, just run:

```bash
run_speakeasy.bat
```
---

### ✅ What `run_speakeasy.bat` Does  

- ✅ **Activates** your Python virtual environment  
- ✅ **Starts** the FastAPI server at [http://127.0.0.1:8000](http://127.0.0.1:8000)  
- ✅ **Opens** the frontend automatically in your default browser  

---

## 📝 Requirements  

### Backend  

- FastAPI  
- Uvicorn  
- gTTS  
- python-multipart  

Install all with:

```bash
pip install fastapi uvicorn gtts python-multipart
```
---

## 🎨 Frontend  

- Pure **HTML / CSS / JavaScript**  
- **No build step required**  

---

## 🚀 Deploying  

By default the app runs locally.  
If you want to share a live version:  

1. **Deploy the backend** on Render / Railway / Heroku  
2. **Host the frontend** on GitHub Pages / Netlify / Vercel  
3. **Update the API URL** in `frontend/script.js` to point to your deployed backend  

Example:  

```javascript
const response = await fetch('https://your-backend-url/tts', { ... })
```
---

## 🙌 Acknowledgements  

This project was inspired by my friends’ **30-day AI Agents Challenge**.  
I joined in to learn and ended up shipping this app within a week.  
Huge thanks to the open-source community for **FastAPI**, **gTTS** and all the amazing tools ❤️  

---

## 🖱️ Quick Start  

1. **Clone the repo**  
2. **Install backend requirements**  
3. **Double-click** `run_speakeasy.bat`  
4. 🎧 **Enjoy converting your text to speech!**  

---
