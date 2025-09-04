from fastapi import FastAPI, Form
# Import FastAPI framework to create backend API
# Import Form to accept form-data from frontend POST requests

from fastapi.responses import FileResponse
# FileResponse allows returning a file (like mp3) as HTTP response

from gtts import gTTS
# Google Text-to-Speech library to convert text into audio

from fastapi.middleware.cors import CORSMiddleware
# Middleware to handle Cross-Origin Resource Sharing (frontend-backend requests)

# Create FastAPI app instance
app = FastAPI()

# Configure CORS middleware to allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For local testing, allow all domains
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Define POST endpoint /tts to generate speech
@app.post("/tts")
async def text_to_speech(
    text: str = Form(...),           # Required form parameter: text to convert
    lang: str = Form("en"),          # Optional: language, default English
    voice: str = Form("default")     # Optional: voice placeholder (male/female not used here)
):
    """
    Convert text to speech with language option and return audio file
    """
    # gTTS converts the text to speech
    # Currently, gTTS doesn't support male/female voice officially
    tts = gTTS(text=text, lang=lang)  # Create TTS object with text and language

    filename = "output.mp3"            # Temporary filename to save audio
    tts.save(filename)                 # Save generated audio to file

    # Return the mp3 file to frontend
    return FileResponse(filename, media_type="audio/mpeg", filename=filename)
