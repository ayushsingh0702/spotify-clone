// Highlight the active navigation item
// Highlight the active navigation item
document.querySelectorAll('.nav-option').forEach(option => {
    option.addEventListener('click', function () {
        document.querySelectorAll('.nav-option').forEach(item => item.style.opacity = 0.7);
        this.style.opacity = 1;
    });
});

// Music player functionality
const playPauseBtn = document.querySelector('.player-control-icon[src="palyspo.png"]');
const audioPlayer = document.getElementById('audio-player'); // Get the audio element
const progressBar = document.querySelector('.progress-bar');
const volumeSlider = document.querySelector('.controls input[type="range"]');
let isPlaying = false;
let currentTime = 0;
const totalTime = 213; // Assume 3:33 (in seconds)

// Play/Pause toggle
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.src = 'palyspo.png'; // Change to play icon
        isPlaying = false;
    } else {
        audioPlayer.play();
        playPauseBtn.src = 'pause2.jpg'; // Change to pause icon
        isPlaying = true;
    }
});

// Update progress bar as the song plays
audioPlayer.addEventListener('timeupdate', () => {
    currentTime = Math.floor(audioPlayer.currentTime);
    progressBar.value = (currentTime / totalTime) * 100;
    document.querySelector('.curr-time').innerText = formatTime(currentTime);
});

// Seek functionality
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * totalTime;
    audioPlayer.currentTime = seekTime; // Seek the audio
    currentTime = seekTime; // Update current time variable
    document.querySelector('.curr-time').innerText = formatTime(currentTime);
});

// Volume control
volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value / 100;
    audioPlayer.volume = volume; // Set the audio volume
});

// Format time (seconds to MM:SS)
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Hover effect on cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});