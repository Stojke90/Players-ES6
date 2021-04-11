const teamData = {
				teamName: "Juventus", 
				teamLogo: "./img/juventus-logo.png", 
				teamLogoSecond: "./img/logo.png",
				headerBacgroudImage: "./img/flag.png",
				theFirstElevenPlayers:[
				{
					imageOfPlayer: "./img/Wojciech Szczesny.png",
					name: "Wojciech",
					lastName: "Szczesny",
					number: 1,
					position: "Goalkeeper",
					age: 30
				},
				{
					imageOfPlayer: "./img/Matthijs de Ligt.png",
					name: "Matthijs",
					lastName: "de Ligt",
					number: 4,
					position: "Defender",
					age: 21
				},
				{
					imageOfPlayer: "./img/Giorgio Chiellini.png",
					name: "Giorgio",
					lastName: "Chiellini", 
					number: 3, 
					position: "Defender", 
					age: 36
				},
				{
					imageOfPlayer: "./img/Alex Sandro.png",
					name: "Alex", 
					lastName: "Sandro", 
					number: 12, 
					position: "Defender", 
					age: 30
				},
				{
					imageOfPlayer: "./img/Juan Cuadrado.png",
					name: "Juan", 
					lastName: "Cuadrado", 
					number: 16, 
					position: "Defender", 
					age: 32
				},
				{
					imageOfPlayer: "./img/Weston McKennie.png",
					name: "Weston", 
					lastName: "McKennie", 
					number: 14, 
					position: "Midfield", 
					age: 22
				},
				{
					imageOfPlayer: "./img/Rodrigo Bentancur.png",
					name: "Rodrigo", 
					lastName: "Bentancur", 
					number: 30, 
					position: "Midfield", 
					age: 23
				},
				{
					imageOfPlayer: "./img/Adrien Rabiot.png",
					name: "Adrien", 
					lastName: "Rabiot", 
					number: 25, 
					position: "Midfield", 
					age: 25
				},
				{
					imageOfPlayer: "./img/Federico Chiesa.png",
					name: "Federico", 
					lastName: "Chiesa", 
					number: 22, 
					position: "Attack", 
					age: 23
				},
				{
					imageOfPlayer: "./img/Alvaro Morata.png",
					name: "Alvaro", 
					lastName: "Morata", 
					number: 9, 
					position: "Attack", 
					age: 28
				},
				{
					imageOfPlayer: "./img/Cristiano Ronaldo.png",
					name: "Cristiano Ronaldo", 
					lastName: "Santos Aveiro", 
					number: 7, 
					position: "Attack", 
					age: 36
				}
				],

				changePlayers:[
				{
					imageOfPlayer: "./img/Dejan Kulusevski.png",
					name: "Dejan", 
					lastName: "Kulusevski", 
					number: 44, 
					position: "Attack", 
					age: 20
				},
				{
					imageOfPlayer: "./img/Leonardo Bonucci.png",
					name: "Leonardo", 
					lastName: "Bonucci", 
					number: 19, 
					position: "Defender", 
					age: 33
				},
				{
					imageOfPlayer: "./img/Merih Demiral.png",
					name: "Merih", 
					lastName: "Demiral", 
					number: 28, 
					position: "Defender", 
					age: 22
				},
				{
					imageOfPlayer: "./img/Paulo Dybala.png",
					name: "Paulo", 
					lastName: "Dybala", 
					number: 10, 
					position: "Forward", 
					age: 27
				}
				]
			};

// GENERAL
const header = document.querySelector("header");
const aLinkLogoHeader = document.querySelector('#linkJ');
const imgLogoHeader = document.querySelector('#logoJ');
const main = document.querySelector('main');
const aside = document.getElementById('textForChanges');
const firstSquad = document.getElementById("mainPlayers");
const secondSquad = document.getElementById("substitutions");
const button = document.querySelector("button");
const myAudio = document.getElementById("myAudio");
let isPlaying = false;
const short = teamData.theFirstElevenPlayers;
const shorter = teamData.changePlayers;
const footer = document.querySelector("footer");
const aLink = document.getElementById('audioLink');

const makeElement = (type, name, property, path, nameImg, link) => {

	let element = document.createElement(type);
	element.setAttribute('class', name);
	element.innerHTML = property;
	if(type === 'img'){
		element.setAttribute('src', path);
		element.setAttribute('alt', nameImg)
	}
	if(type === 'a') {
		element.setAttribute('href', link);
	}
	return element;
}

// HEADER   ////////////////////////////////////////////////////////////////////////////////////////////

const headeR = () => {

	header.style.backgroundImage =  "url(" + teamData.headerBacgroudImage + ")";

	aLinkLogoHeader.setAttribute("href","https://www.juventus.com/en/");
	header.prepend(aLinkLogoHeader);

	imgLogoHeader.setAttribute("src", teamData.teamLogo);
	aLinkLogoHeader.prepend(imgLogoHeader);

}

aLink.addEventListener('click',() => {

	isPlaying ? myAudio.pause() : myAudio.play();

	myAudio.onplaying = () => {
	  buttLook(true, "red", 'Pause');

	};
	myAudio.onpause = () => {
	  buttLook(false, 'green', 'Play');
	};
});

const buttLook = (change, color, playPause) => {
	isPlaying = change;
	button.style.background = color;
	button.innerText = playPause;
}

// MAIN   //////////////////////////////////////////////////////////////////////////////////////

// adding text on start on main
const addingClubName = () => {
	const clubName = makeElement('p','nameClub',teamData.teamName.split("").join(" "));
	main.prepend(clubName);
	firstCrew();
};

// adding text on main for substitution players
const addTextForSubstitution = () => {
	const subText = makeElement('p','wordCh', "I cambiamenti");
	aside.prepend(subText);
	secondCrew();
};


const firstCrew = () => {

	short.reverse();

	for(let i = 0; i < short.length; i++) {

		const card = makeElement('article','cardPl', '','','','');

		const divImg = makeElement('div', 'imgPl', '','','','');
		divImg.style.backgroundImage =  "url(" + teamData.teamLogoSecond + ")";
 
		const img = makeElement('img', 'imgPlayer', '', short[i].imageOfPlayer, 'image_of_Player','');

		const divData = makeElement('div', 'dataPl', '','','','');

		paragrafs(short[i],divData);

		firstSquad.prepend(card);
		divImg.prepend(img);
		card.prepend(divImg,divData);

	}
};


const secondCrew = () => {

	for(let i = 0; i < shorter.length; i++){

		const card1 = makeElement('article', 'cardPl', '', '','', '');

		const divImg = makeElement('div', 'imgPl', '', '', '', '');
		divImg.style.backgroundImage =  "url(" + teamData.teamLogoSecond + ")";

		const img = makeElement('img', 'imgPlayer', '', shorter[i].imageOfPlayer, 'image_of_Player', '');

		const divData = makeElement('div', 'dataPl', '', '','', '');

		paragrafs(shorter[i],divData);

		secondSquad.prepend(card1);
		card1.prepend(divImg, divData);
		divImg.prepend(img);
	}
	
};

const paragrafs = (players, playersData) => {
		const paragrafForDataPlayersName = makeElement('p','dataPlayersName',"<span>Nome:</span> " + players.name, '');

		const paragrafForDataPlayersLast = makeElement('p','dataPlayersLastName', "<span>Cognome:</span> " + players.lastName, '');

		const paragrafForDataPlayersNumber = makeElement('p','dataPlayersNumber',"<span>Numero:</span> " + players.number, '');
		
		const paragrafForDataPlayersPosition = makeElement('p','dataPlayersPosition',"<span>Posizione:</span> " + players.position, '');
			
		const paragrafForDataPlayersAge = makeElement('p','dataPlayersAge',"<span>Anni:</span> " + players.age, '');

		playersData.prepend(paragrafForDataPlayersName, paragrafForDataPlayersLast, paragrafForDataPlayersNumber, paragrafForDataPlayersPosition, paragrafForDataPlayersAge);
};

const arrow = () => {

	const arrow = makeElement('img', 'arrow', '', './img/arrow.png', 'img_arrow','');

	const pageUp = makeElement('a', 'scrollUp', '', '', '', '#');

	main.append(pageUp);

	pageUp.prepend(arrow);

	scrollingArrow ();

	addingClubName();

	addTextForSubstitution();
};


const scrollingArrow = () => {

	arrowUp = document.querySelector(".scrollUp");

	window.onscroll = () => {scrollArrow()};

	const scrollArrow = () => {document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ? arrowUp.style.display = "block" : arrowUp.style.display = "none"};
};

// FOOTER       //////////////////////////////////////////////////////////////////////////////////
const footeR = () => {

	const firstF = makeElement('p', '', '&copy; Copyright 2021,All Rights Reserved.Designed by <b>Stojanovic Marko</b>.', '','');
	const secondF = makeElement('h5', '', '&#128526', '','');

	footer.prepend(firstF,secondF);
};

// CHANGE PLAYERS      /////////////////////////////////////////////////////////////////////////////////
setInterval(() => {

		const change = (starterIndex, izmenaIndex) => {

			const starter = firstSquad.childNodes[starterIndex]; 
			starter.replaceWith(secondSquad.childNodes[izmenaIndex]) ;
			secondSquad.append(starter);
	};
		
		let counterStarter = Math.round(Math.random() * (short.length - 1));

	if(counterStarter === 0) { return counterStarter;};

		let counterChange = Math.round(Math.random() * (shorter.length - 1));

	change(counterStarter,counterChange);

},60000);

/////////////////////////////////////////////////////////////////////////////

headeR();

arrow();

footeR();