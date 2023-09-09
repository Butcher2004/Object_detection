
const startCaptureButton = document.getElementById('startCapture');
const stopCaptureButton = document.getElementById('stopCapture');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let mediaStream;

startCaptureButton.addEventListener('click', startCapture);
stopCaptureButton.addEventListener('click', stopCapture);

async function startCapture() {
    try {
        var video = document.getElementById('video_feed');
        var baseUrl = window.location.origin;
        var videoFeedUrl = baseUrl + '/video_feed';
        video.src= videoFeedUrl;
        startCaptureButton.disabled = true;
        stopCaptureButton.disabled = false;
    } catch (error) {
        console.error('Error accessing webcam:', error);
    }
}

function stopCapture() {
    var video = document.getElementById('video_feed');
    var baseUrl = window.location.origin;
    var videoFeedUrl = baseUrl + '/video_stop';
    video.src= videoFeedUrl;
    startCaptureButton.disabled = false;
    stopCaptureButton.disabled = true;
}
