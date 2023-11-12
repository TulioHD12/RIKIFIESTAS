document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

document.addEventListener('DOMContentLoaded', function() {
  fetch('http://localhost:3000/datos')
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('.container');
      let counter = 1; // Variable para incrementar el número en la clase

      data.forEach(item => {
        const section = document.createElement('section');
        section.classList.add(`cards-banner-${counter}`); // Agrega el número único
        
        const content = document.createElement('div');
        content.classList.add('content');
        
        const title = document.createElement('h2');
        title.textContent = item.nombreservicio;
        
        const paragraph = document.createElement('p');
        paragraph.textContent = item.descripcion;
        
        const link = document.createElement('a');
        link.href = item.link;
        link.classList.add('btn');
        link.textContent = 'Learn More';
        
        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-chevron-right');
        
        link.appendChild(icon);
        content.appendChild(title);
        content.appendChild(paragraph);
        content.appendChild(link);
        section.appendChild(content);
        
        container.appendChild(section);
        counter++; // Incrementa el contador para la siguiente clase
      });

      // Agregar el bloque al final
      const socialSection = document.createElement('section');
      socialSection.classList.add('social');
      socialSection.innerHTML = `
        <p>Follow TechNews</p>
        <div class="links">
          <a href="https://facebook.com">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://linkdin.com">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      `;
      container.appendChild(socialSection);

      const footer = document.createElement('footer');
      footer.classList.add('footer');
      footer.innerHTML = `
        <h3>Tech News Copyright</h3>
      `;
      container.appendChild(footer);
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
});
