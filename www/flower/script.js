window.onload = function() {
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
  }, 1000);

  var audio = document.getElementById('bgMusic');
  audio.load(); // Reload the audio
};
