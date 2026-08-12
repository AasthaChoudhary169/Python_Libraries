document.addEventListener('DOMContentLoaded', () => {
    initAccordions();
});

// Interactive Accordion Toggle
function initAccordions() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(acc => {
        const header = acc.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = acc.classList.contains('active');
            
            // Close all open accordions for clean UI
            accordions.forEach(item => {
                item.classList.remove('active');
                item.querySelector('.icon').textContent = '+';
            });

            // Toggle selected accordion
            if (!isActive) {
                acc.classList.add('active');
                acc.querySelector('.icon').textContent = '−';
            }
        });
    });
}

// Copy Code Button Functionality
function copyCode(btn) {
    const code = btn.nextElementSibling.querySelector('code').textContent;
    navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.backgroundColor = '#0d9488';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = '#334155';
        }, 2000);
    });
}
