const links = [
    "https://docs.google.com/forms/d/e/1FAIpQLSfiu8_8rp5oTYAORJi5dvtHXQwf0seB_GygX166bqsdY8AQHA/viewform?usp=sf_link",
    "https://docs.google.com/forms/d/e/1FAIpQLScwwTn-isnvCFVdGrZ-2JKbkOajo4Cxa-UekGI8dx9S_HurqQ/viewform?usp=sf_link",
    "https://docs.google.com/forms/d/e/1FAIpQLScA8H1sWrOH5lQa8qX4vihHaCkYizixns6iBdiFRoeryULnUw/viewform?usp=sf_link",
    "https://docs.google.com/forms/d/e/1FAIpQLSeNCvp0fY85jIRFrdE2u5ChH8XBTkv4pbZ1mXtOmLUILRm2uw/viewform?usp=sf_link",
    "https://forms.gle/p1TPstVtguoyWH637"
];

function updateLink() {
    const startDate = new Date("2024-11-04T00:00:00-03:00"); // French Guiana is UTC-3

    const currentDate = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Cayenne" }));

    const daysSinceStart = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));

    const link = links[daysSinceStart % links.length];
    var e = document.getElementById("daily-link").href
    e = link;
}

updateLink();
