document.querySelector(".option_icon").addEventListener("click", function () {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen(); 
        }
    }
});


// Lấy phần tử audio và các btn
var audioElement = document.querySelector('audio');
var playButton = document.querySelector('.play_box_icon_play');
var pauseButton = document.querySelector('.play_box_icon_pause');
var playForwardButton = document.querySelector('.play_box_icon_playforward');
var playBackButton = document.querySelector('.play_box_icon_playback');
var songNameElement = document.querySelector('.songname_1');

pauseButton.style.visibility = 'hidden';

// Đặt event click cho play
playButton.addEventListener('click', function() {
    // Bắt đầu phát nhạc
    audioElement.play();
    // Ẩn  play và hiển thị pause
    playButton.style.visibility = 'hidden';
    pauseButton.style.visibility = 'visible';
});

// Đặt event click cho pause
pauseButton.addEventListener('click', function() {
    // Dừng nhạc
    audioElement.pause();
    // Ẩn  pause và hiển thị play
    pauseButton.style.visibility = 'hidden';
    playButton.style.visibility = 'visible';
});

// Đặt event click cho playback
playBackButton.addEventListener('click', function() {
    // Cập nhật biến theo dõi
    currentSound = (currentSound - 1 + sounds.length) % sounds.length;
    // Cập nhật nguồn của phần tử audio và phát nhạc
    audioElement.src = sounds[currentSound];
    songNameElement.textContent = displayNames[currentSound];
    pauseButton.style.visibility = 'hidden';
    playButton.style.visibility = 'visible';
});

// Đặt event click cho playforward
playForwardButton.addEventListener('click', function() {
    // Cập nhật biến theo dõi
    currentSound = (currentSound + 1) % sounds.length;
    // Cập nhật nguồn của phần tử audio và phát nhạc
    audioElement.src = sounds[currentSound];
    songNameElement.textContent = displayNames[currentSound];
    pauseButton.style.visibility = 'hidden';
    playButton.style.visibility = 'visible';
});

// Mảng chứa tên của các file âm thanh
var sounds = ["sound/sound1.mp3", "sound/sound2.mp3", "sound/sound3.mp3", "sound/sound4.mp3"];
var displayNames = ["Thiên nhiên 1", "Thiên nhiên 2", "Thiên nhiên 3", "Thiên nhiên 4"];
// Biến để theo dõi file âm thanh hiện tại
var currentSound = 0;

// Cập nhật nguồn của phần tử audio
audioElement.src = sounds[currentSound];


document.querySelector('.play_box_icon_micbox').addEventListener('click', function() {
    var mic = this.querySelector('.fa-microphone');
    var micSlash = this.querySelector('.fa-microphone-slash, a');
    
    micSlash.style.display = 'none';

    if (mic.style.display === 'none') {
        mic.style.display = 'block';
        micSlash.style.display = 'none';
    } else {
        mic.style.display = 'none';
        micSlash.style.display = 'block';
    }
});

function selectSound(soundName) {
    // Hiển thị tên âm thanh
    document.querySelector('.songname_1').innerText = "~ " + soundName + " ~";
}


function copyUserID() {
    var userIDContainer = document.getElementById("userIDContainer");

    // Create a temporary textarea
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = userIDContainer.textContent;
    document.body.appendChild(tempTextArea);

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);

    alert("ID đã được sao chép!");
}


// let drag = false;
// let offsetX, offsetY;

// header.addEventListener('mousedown', (e) => {
//     drag = true;
//     offsetX = e.clientX - wrapper.getBoundingClientRect().left;
//     offsetY = e.clientY - wrapper.getBoundingClientRect().top;
// });

// document.addEventListener('mousemove', (e) => {
//     if (drag) {
//         wrapper.style.left = e.clientX - offsetX + 'px';
//         wrapper.style.top = e.clientY - offsetY + 'px';
//     }
// });

// document.addEventListener('mouseup', () => {
//     drag = false;
// });


