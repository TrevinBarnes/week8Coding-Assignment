//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.

class Driver {
    constructor(name, number){
        this.name=name
        this.number=number
    }

    describe(){
        return `${this.name} drivers number is ${this.number}`
    }
}


class Menu{
    constructor(){
        this.Driver=[]
        this.selectedDriver = null;
    }

    start(){
        let selection= this.showMainMenuOption();
        while (selection!=0){
            switch (selection){
            case `1`:
                this.createDriver();
                break;
            case `2`:
                this.displayDriver();
                break;
            case`3`:
                this.deleteDriver();
                break;
            default:
                selection = 0;
            }
            selection = this.showMainMenuOption
        }

        alert('goodbye')
    }

    showMainMenuOption(){
        return prompt(`
        0) exit
        1) add a new driver
        2) display drivers
        3) delete driver
        
        `);
    }

    createDriver(){
        let name= prompt('Enter position for new driver: ');
        let number= prompt('Enter Driver number: ');
    }

    deleteDriver(){
        let index = prompt('Which driver do you want to delete: ');
        if (index > -1 && index< this.selectedTeam.players.length){
        this.selectedDriver.splice(index,1);
        }
    }

    displayDriver(){
        let driverString='';
            for (let i = 0; i< this.Driver.length; i++){
                driverString += i+')'+ this.Driver[i].name + '\n';
            }
        alert(driverString);
    }
    /*
    viewDriver(){
        let index= prompt("Enter the index of the driver that you want to view:");
        if (index> -1 && index< this.Driver.length){
            this.selectedTeam = this.Driver[index];
            let description = 'Driver name: ' + this.selectedDriver.name+ '\n';
            description += ' ' + this.selectedDriver.describe()+'\n';
            for (let i = 0; i < this.selectedDriver.length;i++){
                description += i +')' + this.selectedDriver[i].describe()+'\n'
            }
        }
    }
    */
}
let menu = new Menu();
menu.start();