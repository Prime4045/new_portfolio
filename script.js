document.addEventListener('DOMContentLoaded', () => {
    // Project Filtering
    const filters = document.querySelectorAll('.filter');
    const projects = document.querySelectorAll('.project-item');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            const category = filter.getAttribute('data-filter');

            projects.forEach(project => {
                const projectCategory = project.getAttribute('data-category');
                if (category === 'all' || projectCategory === category) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});