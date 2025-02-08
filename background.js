document.addEventListener('DOMContentLoaded', function () {
    const starField = document.querySelector('.star-field');
    const numberOfStars = 200;
  
    for (let i = 0; i < numberOfStars; i++) {
      let star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 4 + 3}s, 15s`;
      starField.appendChild(star);
    }
  });
  