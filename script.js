const audioSources = [null, null, null, null, null];

for (let i = 0; i < 5; i++) {
    document.getElementById(`sound${i + 1}`).addEventListener('change', function (event) {
        if (event.target.files.length > 0) {
            const fileURL = URL.createObjectURL(event.target.files[0]);
            audioSources[i] = fileURL;
            scheduleSound(i); // Start playing this sound on a loop with random timing
        }
    });
}

function playSound(index) {
    if (audioSources[index]) {
        const audio = new Audio(audioSources[index]);
        audio.play();
    }
}

function scheduleSound(index) {
    const interval = Math.random() * (1200000 - 5000) + 5000; // 5s to 20min
    setTimeout(() => {
        playSound(index);
        scheduleSound(index); // Reschedule itself
    }, interval);
}