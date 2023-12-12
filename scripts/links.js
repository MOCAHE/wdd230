const baseURL = 'https://mocahe.github.io/wdd230/';
const linksURL = 'https://github.com/MOCAHE/wdd230/blob/main/data/links.json';
const ulList = document.querySelector('#links');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}

getLinks();

// async function fetchLinks(){
//     try {
//         const response = await fetch(linksURL);
//         if (response.ok) {
//             const data = await response.json();
//             displayLinks(data);
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// function displayLinks(data){
//     let weeks = data.weeks
//     weeks.forEach((week) => {
//         let liItem = document.createElement('li');
//         liItem.innerHTML = `${week.week}: `;
//         let counter = 0;
//         week.links.forEach((link)=>{
//             if(counter != week.links.length - 1){
//                 liItem.innerHTML += `<a class='link' href="${link.url}">${link.title}</a> | `;
//             }else{
//                 liItem.innerHTML += `<a class='link' href="${link.url}">${link.title}</a>`
//             }
//             counter++;

//         })
//         ulList.appendChild(liItem);
//     });
// }

// fetchLinks();