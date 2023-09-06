/*Utilizzando i dati forniti, creare un array di 
oggetti per rappresentare i membri del team. 
Ogni membro è caratterizzato dalle seguenti 
informazioni: nome, ruolo e foto.*/

/*Wayne Barnett
Founder & CEO	
wayne-barnett-founder-ceo.jpg
Angela Caroll	
Chief Editor	
angela-caroll-chief-editor.jpg
Walter Gordon
Office Manager
walter-gordon-office-manager.jpg
Angela Lopez
Social Media Manager	
angela-lopez-social-media-manager.jpg
Scott Estrada	
Developer	
scott-estrada-developer.jpg
Barbara Ramos	
Graphic Designer	
barbara-ramos-graphic-designer.jpg*/

//Creare l’array di oggetti con le informazioni fornite.
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (const key in teamMembers) {
    console.log(teamMembers[key]);

    //Stampare le stesse informazioni su DOM sottoforma di stringhe
    let object = teamMembers[key];
    let name = object.name
    let role = object.role
    let image = object.image

    let element = document.createElement('div')
    let elementImage = document.createElement('img')
    elementImage.src = './img/' + image 
    console.log(elementImage);
    element.append(name + ' - ' + role + ' - ')
    console.log(element)

    let profile = document.getElementById('profile')
    profile.append(element)

    //Trasformare la stringa foto in una immagine effettiva
}






