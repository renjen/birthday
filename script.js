function openCard() {
  document.getElementById('card').classList.add('opened');
}

function blowOutCandles(event) {
  event.stopPropagation();
  const flames = document.querySelectorAll('.flame');
  flames.forEach(flame => flame.style.display = 'none');
  document.getElementById("message").innerText = "";
  playBlowSound();
  launchConfetti();
  typeMessage("🎉 Candles blown out! Make a wish! ✨");
}

function typeMessage(text) {
  const msg = document.getElementById("message");
  msg.innerText = "";
  let i = 0;
  const typing = setInterval(() => {
    if (i < text.length) {
      msg.innerText += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, 50);
}

function playBlowSound() {
  const audio = new Audio("https://cdn.pixabay.com/download/audio/2023/04/14/audio_5e00974ee6.mp3?filename=candle-blow-out-142226.mp3");
  audio.play();
}

function launchConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.style.position = "fixed";
  confettiContainer.style.top = 0;
  confettiContainer.style.left = 0;
  confettiContainer.style.width = "100%";
  confettiContainer.style.height = "100%";
  confettiContainer.style.pointerEvents = "none";
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.animationDelay = Math.random() * 1 + "s";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confettiContainer.appendChild(confetti);
  }

  setTimeout(() => document.body.removeChild(confettiContainer), 3000);
} 
