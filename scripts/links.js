const baseURL = 'https://mocahe.github.io/wdd230/';
const linksURL = 'https://mocahe.github.io/wdd230/data/links.json';
const ulList = document.querySelector('#links');

async function getLinks(){
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayLinks(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// MIS COMPAS Y YO
function displayLinks(data){
    let weeks = data.weeks
    weeks.forEach((week) => {
        let liItem = document.createElement('li');
        liItem.innerHTML = `${week.week}: `;
        let counter = 0;
        week.links.forEach((link)=>{
            if(counter != week.links.length - 1){
                liItem.innerHTML += `<a class='link' href="${link.url}">${link.title}</a> | `;
            }else{
                liItem.innerHTML += `<a class='link' href="${link.url}">${link.title}</a>`
            }
            counter++;
        })
        ulList.appendChild(liItem);
    });
}

// CHATGPT
// function displayLinks(linksData) {
//     linksData.weeks.forEach((weekObj) => {
//         const weekTitle = weekObj.week;
//         const links = weekObj.links;

//         // Creamos un elemento <li> para la semana
//         const liWeek = document.createElement('li');
//         liWeek.innerHTML = `${weekTitle}: `;

//         links.forEach((link, index) => {
//             // Verificamos si el enlace es absoluto o relativo
//             const url = link.url.startsWith('http') ? link.url : baseURL + link.url;
//             const linkHTML = `<a href="${url}">${link.title}</a>`;

//             // Añadimos el enlace al HTML del elemento li
//             liWeek.innerHTML += linkHTML;

//             // Si no es el último enlace, añadimos el separador
//             if (index < links.length - 1) {
//                 liWeek.innerHTML += ' | ';
//             }
//         });

//         // Agregamos la semana y sus enlaces al ulList
//         ulList.appendChild(liWeek);
//     });
// }

getLinks();
