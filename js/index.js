function animate () {
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const cards = entry.target.querySelector('.cards');

      if (entry.isIntersecting) {
        cards.classList.add('animation');
        return;
      }

      cards.classList.remove('animation');
    });
  });

  observer.observe(document.querySelector('.animate-cards'));
}