document.addEventListener('DOMContentLoaded', function() {
    // Set dark mode
    document.body.classList.add('dark-mode');
    // If your theme uses a different class or attribute, adjust accordingly
    // For example:
    // document.documentElement.setAttribute('data-theme', 'dark');
    // or
    // document.body.classList.add('theme-dark');

    // If you have a theme toggle button, you might want to update its state
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.checked = true; // Assuming the toggle is a checkbox
    }

    console.log("Custom JS loaded");

    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM Content Loaded");
        updateResumeLink();

        // Listen for theme changes
        document.addEventListener('themeChanged', function() {
            console.log("Theme changed event detected");
            updateResumeLink();
        });

        // Add click event listener to the resume link
        const resumeLink = document.querySelector('a.resume-link');
        if (resumeLink) {
            console.log("Resume link found, adding click event listener");
            resumeLink.addEventListener('click', function(event) {
                console.log("Resume link clicked");
                event.preventDefault();
                const href = this.getAttribute('data-href');
                console.log("data-href attribute:", href);
                if (href) {
                    console.log("Opening URL:", href);
                    window.open(href, '_blank');
                } else {
                    console.log("No data-href attribute found");
                }
            });
        } else {
            console.log("Resume link not found in DOM");
        }
    });

    function updateResumeLink() {
        console.log("Updating resume link");
        const resumeLink = document.querySelector('a.resume-link');
        if (resumeLink) {
            const isDarkMode = document.body.classList.contains('colorscheme-dark') || document.documentElement.getAttribute('data-dark-mode') === 'true';
            const newHref = isDarkMode ? '/pdf/dark_cv.pdf' : '/pdf/light_cv.pdf';
            console.log(`Setting resume link data-href to: ${newHref}`);
            resumeLink.setAttribute('data-href', newHref);
        } else {
            console.log("Resume link not found");
        }
    }
});