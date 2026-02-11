document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.category-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    const revealElements = document.querySelectorAll('.dish-card, .main-text-group, .main-image, .categories-group');

    
    revealElements.forEach(element => {
        element.classList.add('reveal');
    });

    const checkScroll = () => {
        const triggerBottom = window.innerHeight * 0.85; 

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    
    checkScroll();
});