// Selectează toate linkurile din header
const links = document.querySelectorAll('header nav a');

for (const link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // previne jump instant
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
}
