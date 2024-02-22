const membersURL = "https://mocahe.github.io/wdd230/chamber/data/members.json";
const validSpotlightLvls = ["Golden", "Silver"];
const spotlightEl = document.getElementById("spotlights");

async function fetchMembers() {
    try {
        const response = await fetch(membersURL);
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        const data = await response.json();
        displayMemberSpotlights(selectRandomMembers(data.directory)); // Asumiendo que tus datos están bajo la clave 'directory'
    } catch (error) {
        console.error('Fetch error: ', error);
    }
}

const selectRandomMembers = (members) => {
    const validMembers = members.filter(member => validSpotlightLvls.includes(member.membership));
    return validMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
}

const displayMemberSpotlights = (members) => {
    let spotlightHTML = "";
    members.forEach(member => {
        spotlightHTML += `
            <div class="card p-20">
                <div class="member-card-header">
                    <h3>${member.name}</h3>
                    <img src="${member.image}" width="50" height="50"> <!-- Aquí se usa directamente la URL de la imagen -->
                </div>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <a href="${member.url}" target="_blank" class="break-all">Website</a> <!-- Ajuste para usar la URL directamente -->
            </div>
        `;
    });
    spotlightEl.innerHTML = spotlightHTML;
}

// Main
fetchMembers();
