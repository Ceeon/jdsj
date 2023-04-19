let time = 0;

function padZero(num) {
    return num.toString().padStart(2, '0');
}

function formatTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms - hours * 3600000) / 60000);
    const seconds = Math.floor((ms - hours * 3600000 - minutes * 60000) / 1000);
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

self.onmessage = (event) => {
    if (event.data === "start") {
        setInterval(() => {
            time += 1000;
            self.postMessage(formatTime(time));
        }, 1000);
    }
};
