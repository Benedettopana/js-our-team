const intOutput = document.querySelector(".intestazione");
const output = document.querySelector(".member");

const ourTeam = [
  {
    nome: "Wayne Barnett",
    ruolo: 'Founder & CEO',
    img: "./assets/img/wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "Angela Caroll",
    ruolo: 'Chief Editor',
    img: "./assets/img/angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Walter Gordon",
    ruolo: 'Office Manager',
    img: "./assets/img/walter-gordon-office-manager.jpg"
  },
  {
    nome: "Angela Lopez",
    ruolo: 'Social Media Manager',
    img: "./assets/img/angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Scott Estrada",
    ruolo: 'Developer',
    img: "./assets/img/scott-estrada-developer.jpg"
  },
  {
    nome: "Barbara Ramos",
    ruolo: 'Graphic Designer',
    img: "./assets/img/barbara-ramos-graphic-designer.jpg"
  }
];

for(let prova in ourTeam){
  console.log(prova, ourTeam[prova]);
}

// Intestazione
intOutput.innerHTML += `
<div class="text-center mb-2 p-4">
  <h4 class="my-1 fw-bold">OUR TEAM</h4>

  <p class="mb-3 mx-5 p-5 text-secondary ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum dolores nobis, eos architecto reprehenderit ipsum! Amet nisi rerum maxime placeat, eveniet quia minus, ab nulla illo aliquam dolorem saepe.</p>
</div>

`;


// VISUALIZZO LE CARD
for(let membro of ourTeam){
  console.log(membro);
  
  output.innerHTML += `
  
  <div class="col d-flex justify-content-center ">
        <div class="card text-center rounded-0 mb-5 " style="width: 18rem;">
        <img src="${membro.img}" class="card-img-top rounded-0 " alt="${membro.nome}">
          <div class="card-body ">
            <p class="card-title color-name font-name fs-5">${membro.nome}</p>
            <p class="card-subtitle font-name color-name mb-2 text-body-secondary">${membro.ruolo}</p>
            
          </div>
        </div>
  </div>
  `
}