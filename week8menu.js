//I think veggies are important but often get missed due to lack of knowledge around what is available durning the year. I hope to output when certain veggies are best to eat when available during that season!

//I choose name and type which means if its a root, leaf, fruit or stem veggie
class Veggies {
    constructor(name, type, season) {
        this.name = name;
        this.type = type;
        this.season = season;
    }

    describe() {
        return `${this.name} are ${this.type} grows best in ${this.season}.`;
    }
    

}
const Veggies = new Veggies("Tomato", "Fruit", "Spring");
    console.log(Veggies)
    Veggies.describe();

//I want the season to be align to the veggie type.
class Seasons {
    constructor(season) {
        this.season = season;
        this.veggies = [];
//this should prevent non-veggie foods from being added in
    }
    addVeggies(veggies) {
        if (veggies instanceof Veggies) {
        this.veggies.push(veggies);
     } else {
        throw new Error('You can only list veggies. Argument is not a Veggie: $(veggie)')

        }
    }
//I want this to read out winter has squash.
    describe() {
        return `${this.season} has ${this.veggies.length} veggies`; 
    }
}
//hope to create a menu here to add text in the website to see if the above works.

class Menu {
    constructor () {
        this.veggieType = [];
        this.veggieSeason = null;
    }

    start() {
        let veggieType = this.showVeggieSeason();
        while (veggieType != 0) {
         switch (veggieType) {
            case "1":
                this.pickYourVeggie();
                break;
            case "2":
                this.pickType();
                break;
            case "3":
                this.deleteVeggie();
                break; 
            case "4":
                this.showYourVeggieSeason();
                break;
              default:
                selection = 0;
         }   
         veggie = this.showMainMenu();
        }
        alert('Not a Veggie!');
    }
    showMainMenu() {
        return prompt(`
        0) exit
        1) pick your veggie
        2) how does it grow
        3) change my mind
        4) display all Veggie Type and Season`
        );
    }
    showVeggieOptions(veggieInfo) {
        return prompt(`
        0) Back
        1) create veggie
        2) delete veggie
    ----------------------------
    ${veggieInfo}
        `);
    }
    displayVeggie() {
        let vegTypeString = '';
        for (let i = 0; i < this.veggies.length; i++) {
            vegTypeString += i + ') ' + this.veggie[i].type + '\n';
        } 
        alert(vegTypeString);
    }

    createVeggies() {
        let veggie = prompt('Enter name for veggie');
        this.veggie.push(new Veggie());
    }
    viewVeggie() {
        let index = prompt('Enter the index of the veggie to see the season');
        if (index > -1 && index < this.veggie.length) {
            this.selectedVeggie = this.veggie[index];
            let description = 'Veggie Name:' + this.selectedVeggie.name + '\n';
            
            
            for (let i = 0; i < this.selectedVeggie.type.length; i++) {
                description += i + ') ' + this.selectedVeggie.type[i].name + ' - ' + this.selectedVeggie.type[i].season + '\n';
            }
            let selection = this.showVeggieOptions(description);
            switch(selection) {
                case '1':
                this.createVeggies();
                break;
                case '2':
                this.deleteVeggie();    
                
            }
        }
    }
}

let menu = new Menu();
menu.start();
