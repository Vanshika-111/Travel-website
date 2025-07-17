const items = document.querySelectorAll('.scroll-bar ul li');
const main = document.getElementById('mainBackground');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        const place = item.getAttribute('data-image');
        main.style.backgroundImage = `url('images/${place}.jpg')`;
    });

    item.addEventListener('mouseout', () => {
        main.style.backgroundImage = `url('images/default.jpg')`;
    });
});
const heading = document.querySelector('.scroll-appear');
    window.addEventListener('scroll', () => {
      const top = heading.getBoundingClientRect().top;
      const height = window.innerHeight;
      if (top < height - 100) {
        heading.classList.add('show');
      }
    });