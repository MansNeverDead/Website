const links = [
    "https://forms.gle/9NKLBJo9q23zoybg7",
    "https://forms.gle/hXFCis1V5be98sie7",
    "https://forms.gle/bvtNVxqa6i8W6uU2A",
    "https://forms.gle/cXfjCNvrawhi1YYa6",
    "https://forms.gle/dQzDJqRGMD6Yupxj6"
];

function updateLink() {
    // Define start date for rotation
    const startDate = new Date("2024-11-17T00:00:00-03:00"); // French Guiana is UTC-3

    // Get the current date adjusted for French Guiana's timezone
    const currentDate = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Cayenne" }));

    // Calculate the number of days since the start date
    const daysSinceStart = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));

    // Select the link based on the calculated day
    const link = links[daysSinceStart % links.length];
    
    // Return or log the link instead of updating a DOM element
    console.log("Today's link lol:", link);
}

// Call the function
updateLink();
