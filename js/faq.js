document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      // Cierra todas excepto la actual
      faqItems.forEach((el) => {
        if (el !== item) {
          el.classList.remove('open');
        }
      });

      // Alterna la actual
      item.classList.toggle('open');
    });
  });
});
