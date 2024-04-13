document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    const sectionBtns = document.querySelectorAll('.control'); // Get all control buttons

    function pageTransitions() {
        // Button click active class for controls
        sectionBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active-btn class from all buttons and active class from all sections
                sectionBtns.forEach(b => b.classList.remove('active-btn'));
                sections.forEach(s => s.classList.remove('active'));

                // Add active-btn class to clicked button
                this.classList.add('active-btn');

                // Get the section that corresponds to the clicked button
                const sectionId = this.getAttribute('data-id');
                const activeSection = document.getElementById(sectionId);
                if (activeSection) {
                    activeSection.classList.add('active');
                }
            });
        });
    }

    pageTransitions();
});
