const image = document.getElementById('myImage');

image.addEventListener('click', () => {
  image.style.transform = 'rotate(360deg)';
  image.style.transition = 'transform 2s';
});