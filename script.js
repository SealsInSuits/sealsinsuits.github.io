document.addEventListener("DOMContentLoaded", function() {
    const designSections = document.querySelectorAll('.design');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5 
    });

    designSections.forEach(section => {
        observer.observe(section);
    });

    document.querySelectorAll('.feature').forEach(feature => {
        feature.addEventListener('click', function() {
            const featureId = this.getAttribute('data-feature');
            const detail = document.getElementById(featureId);
            const arrow = this.querySelector('.arrow');

            if (detail.style.display === 'block') {
                detail.style.display = 'none';
                arrow.textContent = '▼'; 
            } else {
                detail.style.display = 'block';
                arrow.textContent = '▲'; 
            }
        });
    });
});

