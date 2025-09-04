@echo off
REM ========================================
REM SpeakEasy One-Click Starter Script
REM ========================================

REM 1️⃣ Navigate to backend folder
cd /d C:\SKILLS\projects\TextToSpeechApp\backend

REM 2️⃣ Activate Python virtual environment
call venv\Scripts\activate

REM 3️⃣ Start FastAPI backend
start uvicorn main:app --reload

REM 4️⃣ Wait 2 seconds to ensure backend starts
timeout /t 2

REM 5️⃣ Open frontend index.html in default browser
start "" "C:\SKILLS\projects\TextToSpeechApp\frontend\index.html"

REM 6️⃣ Keep terminal open
pause
