document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var scrollToMoviesBtn = document.getElementById("scroll-to-movies");

    // Add click event listener to the button
    scrollToMoviesBtn.addEventListener("click", function() {
        // Scroll to the trending movies section
        document.getElementById("trending-section").scrollIntoView({ behavior: 'smooth' });
    });
});
