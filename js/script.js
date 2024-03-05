const ourTeam = [
  {
    nome: "Wayne Barnett",
    ruolo: 'Founder & CEO',
    img: "assets/img/wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "Angela Caroll",
    ruolo: 'Chief Editor',
    img: "assets/img/angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Walter Gordon",
    ruolo: 'Office Manager',
    img: "assets/img/walter-gordon-office-manager.jpg"
  },
  {
    nome: "Angela Lopez",
    ruolo: 'Social Media Manager',
    img: "assets/img/angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Scott Estrada",
    ruolo: 'Developer',
    img: "assets/img/scott-estrada-developer.jpg"
  },
  {
    nome: "Barbara Ramos",
    ruolo: 'Graphic Designer',
    img: "assets/img/barbara-ramos-graphic-designer.jpg"
  }
];

for(let prova in ourTeam){
  console.log(prova, ourTeam[prova]);
}