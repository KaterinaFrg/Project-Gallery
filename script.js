// Get all the profile elements
const card = document.querySelectorAll('.card-body')
// Add event listeners to each profile
card.forEach(card-body => {
    // Get the overlay element for the profile
    const overlay = card.querySelector('.overlay')
    // Add event listener for when the mouse enters the profile
    card.addEventListener('mouseenter', () => {
        // Show the overlay
        overlay.style.opacity = 1;
    })
    // Add event listener for when the mouse leaves the profile
    card.addEventListener('mouseleave', () => {
        // Hide the overlay
        overlay.style.opacity = 0;
    })
}); (edited) 