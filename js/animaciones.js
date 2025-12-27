const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target.querySelector('.image-box');
            const text = entry.target.querySelector('.description');

            // Aparece la imagen
            image.classList.add('show');

            // Aparece el texto después
            setTimeout(() => {
                text.classList.add('show');
            }, 600);

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.4
});

sections.forEach(section => observer.observe(section));
