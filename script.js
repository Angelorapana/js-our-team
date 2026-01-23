//Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)
// Bonus
// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)
/*
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//Prendo l'id dove occorre inserire gli elementi
const listaHtml = document.getElementById("elementi"); //Prendo l'id dove occorre inserire gli elementi

//Creo la funzione che recupera i dati 
const creaNuovoMembro = (nuovoMembro) => {
        const  {name, role, email, img} = nuovoMembro
        const aggiungiMembro = ` <div class="card d-flex flex-row">
                                 <img src="${img}" alt="Immagine profilo" style="width: 10rem; border-top-left-radius: 1rem; border-bottom-left-radius: 1rem;">
                                 <div class="p-3">
                                 <h5 class="fw-bold">Nome: ${name}</h5>
                                 <p>Ruolo: ${role}</p>
                                 <p>Email: ${email}</p>
                                 </div>
                                 </div>
                                 </div>`
                    return aggiungiMembro;
    } 

//Avvio ciclo per prendere tutti gli elementi che mi interessano(dichiarando una nuova variabile {name, role}) = teamMembers[index] <--per ogni elemento dell'array partendo da INDEX(0)
for (let index = 0; index < teamMembers.length; index++) {
const teamMember = teamMembers[index]; 
const teamMemberHtml = creaNuovoMembro(teamMember)

const newMember = document.createElement("li")  //creo una variabile contenente l'elemento da inserire nel dom
newMember.innerHTML = teamMemberHtml;           //utilizzo la variabile e aggiungo al dom (con innerhtml) attraverso la funzione
listaHtml.append(newMember); }               //lo stampo nel dom con .append

*/



const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const teamContainer = document.getElementById("team-container")

c


