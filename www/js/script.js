document.addEventListener('DOMContentLoaded', function() {
    var scrollDown = document.getElementById('scroll-down');

    setTimeout(function() {
        scrollDown.classList.add('fade-out');
    }, 7000);
});

window.onload = function() {
    var audio = document.getElementById('bgMusic');
    audio.load(); // Reload the audio
  };
  document.getElementById('flowerpage').addEventListener('click', function() {
    // Redirect the user to the desired URL
    window.location.href = '../flower/index.html'; 
});
