const links = [
    "https://forms.gle/diTojrp47iCh5XZ3A",
    "https://forms.gle/a8VL5LZaoiT1wqEB9https://forms.gle/a8VL5LZaoiT1wqEB9",
    "https://forms.gle/huVLiFGhpWzfw2NS7",
    "https://docs.google.com/forms/d/e/1FAIpQLSfeghoRF36Ww-NOnBh4eThPTXR4N6of8ShR4AIrub4ll7B4dw/viewform?usp=dialog",
    "https://forms.gle/xaCNX6CYQSc1dSBFA"
];

function updateLink() {
    // Define start date for rotation
    const startDate = new Date("2025-01-19T00:00:00-03:00");

    // Get the current date adjusted for French Guiana's timezone
    const currentDate = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Cayenne" }));

    // Calculate the number of days since the start date
    const daysSinceStart = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));

    // Select the link based on the calculated day
    const targetURL = links[daysSinceStart % links.length];

    // Redirect to the target URL
    window.location.replace() = targetURL;

}

// Call the function
updateLink();
