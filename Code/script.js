const links = [
    "https://forms.gle/9NKLBJo9q23zoybg7",
    "https://forms.gle/hXFCis1V5be98sie7",
    "https://forms.gle/bvtNVxqa6i8W6uU2A",
    "https://forms.gle/cXfjCNvrawhi1YYa6",
    "https://forms.gle/dQzDJqRGMD6Yupxj6"
];

function updateLink() {
    const startDate = new Date("2024-11-17T00:00:00-03:00"); // French Guiana is UTC-3

    const currentDate = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Cayenne" }));

    const daysSinceStart = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));

    const link = links[daysSinceStart % links.length];

    document.getElementById("daily-link").href = link;
}

updateLink();
