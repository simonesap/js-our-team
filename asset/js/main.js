// Per la pagina 'Chi siamo' del nostro sito aziendale, dobbiamo sviluppare la sezione "Il nostro team".
// Definiamo un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Milestone 1: stampare in console l'elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
// Milestone 2: stampare i dati all'interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team un elemento che conterrà i suoi dati.
// BONUS: stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Scriviamo prima la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
// Cosa conterrà il campo che rappresenta la foto in ciascun oggetto? Come possiamo fare per trasformarla in effettiva immagine visibile nell'html ?


let ilNostroTeam = [
    {
        nome: 'Angela',
        cognome: 'Caroll',
        ruolo: 'chief-editor',
        foto: './asset\img\angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Angela',
        cognome: 'Moss',
        ruolo: 'social-media-manager',
        foto: 'asset\img\angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Barbara',
        cognome: 'Ramos',
        ruolo: 'graphic-designer',
        foto: 'asset\img\barbara-ramos-graphic-designer.jpg'
    },
    {
        nome: 'Scott',
        cognome: 'Estrada',
        ruolo: 'developer',
        foto: 'asset\img\scott-estrada-developer.jpg'
    },
    {
        nome: 'Walter',
        cognome: 'Gordon',
        ruolo: 'office-manager',
        foto: 'asset\img\walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Wayne',
        cognome: 'Barnett',
        ruolo: 'founder-ceo',
        foto: 'asset\img\wayne-barnett-founder-ceo.jpg'
    },
    
];

console.log(ilNostroTeam)

for(i=0; i < ilNostroTeam.length; i++){

    document.getElementById('rootMain').innerHTML += `<div class="row d-flex align-items-center justify-content-center" style="width: 18rem;">
        <div class="col">
            <img src="${ilNostroTeam[i].foto}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">${ilNostroTeam[i].nome} ${ilNostroTeam[i].cognome}</h5>
                <p class="">${ilNostroTeam[i].ruolo}</p>
            </div>
        </div>
    </div>`
    }

