const keySoundMap = {
    w: "https://files.codingninjas.in/tom-1-28537.mp3",
    a: "https://files.codingninjas.in/tom-2-28541.mp3",
    s: "https://files.codingninjas.in/tom-3-28542.mp3",
    d: "https://files.codingninjas.in/tom-4-28543.mp3",
    j: "https://files.codingninjas.in/snare-28545.mp3",
    k: "https://files.codingninjas.in/crash-28546.mp3",
    l: "https://files.codingninjas.in/kick-bass-28547.mp3",
  };
  
  // Function to play the corresponding sound for a key
  function playSound(key) {
    const soundURL = keySoundMap[key];
    if (soundURL) {
      const audio = new Audio(soundURL);
      audio.play();
    }
  }
  
  // Add keypress event listener to the whole document
  document.addEventListener("keypress", function (event) {
    const key = event.key;
    playSound(key);
  });
  
  // Add click event listeners to the drum buttons
  const drumButtons = document.querySelectorAll(".drum");
  drumButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const key = button.textContent;
      playSound(key);
    });
  });
  