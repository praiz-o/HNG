// Function to update time and day
function updateTimeAndDay() {
    const now = new Date();
    
    // Get current UTC time
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    const currentTimeUTC = `${hours}:${minutes}:${seconds}`;

    // Get current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[now.getUTCDay()];

    // Update the DOM elements
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;
    document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

// Function to toggle navigation menu
function toggleMenu() {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('active');
}

// Event listener for hamburger menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('header nav ul').classList.toggle('active');
});

// Update time and day immediately
updateTimeAndDay();

// Update time and day every second
setInterval(updateTimeAndDay, 1000);
