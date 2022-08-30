class Employee {
    constructor(name, position){
        this.name = name;
        this.position = position;
    }

    describe(){
        return  `${this.Employee} works ${this.position}`;
    }
}

class Department{
    constructor(name){
        this.name = name;
        this.Employees = [];
    }

    addEmployee(Employee){
        if(Employee instanceof Employee){
            this.Employee.push(Employee):
        } else {
            throw new Error(`You can only add current Employees, Argument is not an Employee ${Employee}`)
        }
    }
    describe(){
        return ` ${this.name} has ${this.Employees.length} employees.`;
    }
}   

class Menu{
    constructor(){
        this.departments =[];
        this.selecteddepartment = null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while(selection != 0){
            switch(selection){
                case "1":
                    this.createDepartment();
                    break;
                case "2":
                    this.viewDepartment();
                    break;
                case "3":
                    this.deleteDepartment();
                    break;
                case "4":
                    this.viewAllDepartments();
                    break;
            default:
                selection = 0;
            }
        selection = this.showMainMenuOptions();
        }
        alert("Goodbye, Have a Blessed Day");
    }

    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) Create New Company Department
        2) View Selected Department
        3) Delete Department
        4) View All Company Departments
        `);
    }

    viewAllDepartments(){
        let departmentString = "";
        for( i = 0; i < this.departments.length; i++){
            departmentString += i + ") " + this.departments[i].name + "\n";
        }
        alert(departmentString);
    }

}