function autoMode() {
    var now = new Date();
    var hour = now.getHours();

    // Define the start and end hours for dark mode
    var darkModeStartHour = 18; // 6 PM
    var darkModeEndHour = 7;    // 7 AM

    var element = document.body;

    // Check if the current hour is within the dark mode hours
    if (hour >= darkModeStartHour || hour < darkModeEndHour) {
        element.classList.add("dark-mode");
    } else {
        element.classList.remove("dark-mode");
    }
}

// Call autoMode function when the page loads
document.addEventListener("DOMContentLoaded", function() {
    autoMode();
});

// Optionally, you can call autoMode function every minute to update the mode dynamically
setInterval(autoMode, 60000); // Update every minute

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var icon = document.getElementById("darkIcon"); // Get the icon element
    // Toggle icon based on dark mode state
    if (element.classList.contains("dark-mode")) {
        icon.src = "images/darkMode.png"; // Change the icon to dark mode icon
    } else {
        icon.src = "images/lightMode.png"; // Change the icon to light mode icon
    }
}
