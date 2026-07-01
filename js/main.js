console.log("js読み込まれているよ");

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
