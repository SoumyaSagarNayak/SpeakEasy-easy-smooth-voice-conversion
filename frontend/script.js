// Latest generated audio blob (binary data)
let latestBlob = null;

// Array to keep track of last 5 conversions
let historyArray = [];

// Main function to convert text to speech
async function convertText() {
    // Get user input values
    const text = document.getElementById('textInput').value;
    const lang = document.getElementById('langSelect').value;
    const voice = document.getElementById('voiceSelect').value;

    // Alert if user hasn't typed anything
    if (!text) return alert("Please type some text!");

    // Prepare form data to send to backend
    const formData = new FormData();
    formData.append('text', text);
    formData.append('lang', lang);
    formData.append('voice', voice);

    try {
        // Send POST request to backend TTS API
        const response = await fetch('http://localhost:8000/tts', {
            method: 'POST',
            body: formData
        });


        // Convert response into a Blob (audio data)
        const blob = await response.blob();
        latestBlob = blob; // Save blob globally for download

        // Create a temporary URL for audio playback
        const url = URL.createObjectURL(blob);
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = url; // Set audio source
        audioPlayer.play(); // Auto-play generated speech

        // Add this conversion to history
        addHistory(text, url);
    } catch (err) {
        // Show error if backend not running or network issue
        alert("Error connecting to backend. Make sure backend is running.");
        console.error(err);
    }
}

// Function to download the latest generated audio
function downloadAudio() {
    if (!latestBlob) return alert("Please generate audio first!"); // Prevent download if no audio

    const url = URL.createObjectURL(latestBlob); // Create temporary URL
    const a = document.createElement("a"); // Create invisible anchor tag
    a.href = url;
    a.download = "tts_audio.mp3"; // File name for download
    a.click(); // Trigger click to start download
}

// Function to add a conversion to history array
function addHistory(text, audioUrl) {
    if (historyArray.length >= 5) historyArray.shift(); // Keep only last 5 items
    historyArray.push({ text, url: audioUrl }); // Add new item
    renderHistory(); // Update history section in UI
}

// Function to render the history section in HTML
function renderHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ""; // Clear current history display

    // Loop over history in reverse order (latest first)
    historyArray.slice().reverse().forEach(item => {
        const div = document.createElement("div"); // Create div for each history item
        div.className = "history-item"; // Add CSS class for styling
        div.innerHTML = `
            <span>${item.text}</span> 
            <!-- Show the text that was converted -->
            <a href="${item.url}" download="tts_audio.mp3">Download</a>
            <!-- Download link for audio -->
        `;
        historyList.appendChild(div); // Add to history section in DOM
    });
}
