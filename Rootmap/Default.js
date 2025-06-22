console.log("Script geladen!");
function fetchAchievement() {
    fetch('achievements.json')
        .then(response => response.json())
        .then(data => {
            const today = new Date();
            const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
            const achievement = data[dayOfYear % data.length];
            document.getElementById("achievement").textContent = achievement;
        })
        .catch(error => {
            console.error('Fout bij laden:', error);
            document.getElementById("achievement").textContent = "Kon geen achievement laden.";
        });
}
fetch('achievements.json')
    .then(response => response.json())
    .then(data => {
        console.log("Achievements geladen:", data);
        const achievement = data[0]; // test: neem de eerste
        document.getElementById("achievement").textContent = achievement;
    })
    .catch(error => {
        console.error('Fout bij ophalen:', error);
    });

window.onload = fetchAchievement;




function saveTrophy(achievement) {
    let trofeeen = JSON.parse(localStorage.getItem('trofeeen')) || [];
    if (!trofeeen.includes(achievement)) {
        trofeeen.push(achievement);
        localStorage.setItem('trofeeen', JSON.stringify(trofeeen));
        alert("Trofee behaald!");
    } else {
        alert("Je hebt deze trofee al!");
    }
}