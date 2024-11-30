const fighters = [
    {
        name: 'Freezer',
        power: 8000
    },
    {
        name: 'Vegeta',
        power: 8500
    },
    {
        name: 'Crilin',
        power: 500
    },
    {
        name: 'Mr Satan',
        power: 50
    },
    {
        name: 'Junior',
        power: 6000
    },
    {
        name: 'Goku',
        power: 9001
    },
    {
        name: 'Tensing',
        power: 450
    },
    {
        name: 'Videl',
        power: 300
    },
    {
        name: 'Bulma',
        power: 20
    },
    {
        name: 'C-18',
        power: 7800
    },
    {
        name: 'Gohan',
        power: 8900
    },
    {
        name: 'Trunks',
        power: 1250
    }
];

const weapons = [
    {
        name: "Ventaglio della Musa",
        power: 15
    },
    {
        name: "Scouter",
        power: 30
    },
    {
        name: "Bastone Roshi",
        power: 60
    },
    {
        name: "Fagioli Magici",
        power: 70
    },
    {
        name: "Katana di Yajirobei",
        power: 85
    },
    {
        name: "Spada del Dragone Azzurro",
        power: 115
    },
    {
        name: "Armatura Saiyan",
        power: 145
    },
    {
        name: "Cannone da braccio",
        power: 170
    },
    {
        name: "Nuvola d'oro",
        power: 200
    },
    {
        name: "Bastone Nyoi",
        power: 220
    },
    {
        name: "Spada Z",
        power: 235
    },
    {
        name: "Orecchini Potara",
        power: 250
    }
];


//**MILESTONE 1 - Scelta dell’arma:**
////ogni combattente sceglierà casualmente un'arma dalla relativa lista. 
////Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.

// Function to shuffle an array (make its elements casual and not repeated)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) { // While there remain elements to shuffle
        const j = Math.floor(Math.random() * (i + 1)); // pick a random remaining element
        [array[i], array[j]] = [array[j], array[i]]; // and swap it with the current element
    }
    return array;
};

let shuffledWeapons = shuffleArray([...weapons]); //call the function on a COPY of weapons using the spread operator

// create a new array of fighters mapped with a random weapon from the shuffled weapons array
let armedFighters = fighters.map((el, index) => {
    return {
        name: el.name,
        power: el.power,
        weapon: shuffledWeapons[index]
    }

});

console.log("List of fighters with weapons: ", armedFighters);

//**MILESTONE 2 - Allenamento:**
////ogni combattente si sottoporrà ad un allenamento che incrementerà (o forse no) la sua potenza, 
////moltiplicandola per un numero casuale tra 1 e 100.

//function to get a random number between min and max INCLUDED
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) //random number between 0 and max + 1 to include max, + min to start by min
}

let trainedFighters = armedFighters.map((el) => {
    return {
        name: el.name,
        power: el.power * getRandomNumber(1, 100),
        weapon: el.weapon
    }
})

console.log("List of fighters after training: ", trainedFighters);

//**MILESTONE 3 - Qualificazione:**
////escludiamo dal torneo chi, dopo l'allenamento non è riuscito a raggiungere una potenza di almeno 2000.

let qualifiedFighters = trainedFighters.filter((el) => el.power >= 2000)

console.log("List of qualified fighters: ", qualifiedFighters);

//**MILESTONE 4 - Combattimento:**
////i combattimenti si svolgeranno tra un partecipante e il successivo dell'elenco, assicurandosi che ognuno combatta una sola volta. 
////In ogni scontro vincerà il combattente con la potenza più alta. 
//In caso di parità vincerà chi "gioca in casa", ossia chi viene prima nell'elenco.

let winners = [];

for (let i = 0; i < qualifiedFighters.length; i = i + 2) {
    let fighter1 = qualifiedFighters[i]
    let fighter2 = qualifiedFighters[i + 1];
    if (fighter1.power >= fighter2.power) {
        winners.push(fighter1)
    } else {
        winners.push(fighter2)
    }
}

console.log("List of winners: ", winners);