document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const images = container.querySelectorAll('img');
  
    let currentIndex = 0;
    const intervalTime = 3000;
  
    function showNextImage() {
      images.forEach(img => img.style.display = 'none');
      images[currentIndex].style.display = 'block';
      currentIndex = (currentIndex + 1) % images.length;
    }
    images.forEach(img => img.style.display = 'none');
    images[currentIndex].style.display = 'block';
    setInterval(showNextImage, intervalTime);
  });
  