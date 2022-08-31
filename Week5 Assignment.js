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
            this.Employee.push(Employee);
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
        this.departments = [];
        this.selectedDepartment = null;
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

    showDepartmentMenuOptions(departmentInfo){
        return prompt(`
        0) Back
        1) Create New Employee
        2) Delete Existing Employee
        ---------------------------
            ${departmentInfo}
        `);
    }
    
    viewAllDepartments(){
        let departmentString = "";
        for(let i = 0; i < this.departments.length; i++){
            departmentString += i + ") " + this.departments[i].name + "\n";
        }
        alert(departmentString);
    }

    createDepartment(){
        let name = prompt ("Enter Name of New Department");
        this.departments.push(new Department(name));
    }

    viewDepartment(){
        let index = prompt("Enter the Index of the Department you wish to View:");
        if(index > -1 && index < this.departments.length){
            this.selectedDepartment = this.departments[index];
            let decription = "Department Name: " + this.selectedDepartment.name + "\n";

            for(let i = 0; i < this.selectedDepartment.Employees.length; i++){
                decription += i + ") " + this.selectedDepartment.Employees[i].name
                 + " - " + this.selectedDepartment.Employees[i].position + "\n";
            }

            let selection = this.showDepartmentMenuOptions(decription);
            switch(selection){
                case "1":
                    this.createNewEmployee();
                    break;
                case "2":
                    this.deleteExistingEmployee();
                    break;
            }
        }
    }

    deleteDepartment(){
        let index = prompt("Enter the Index of the Department you wish to Delete:");
        if(index > -1 && index < this.departments.length){
            this.departments.splice(index, 1);
        }
    }

    createNewEmployee(){
        let name = prompt("Enter name of new Employee:");
        let position = prompt("Enter Position for New Employee:");
        this.selectedDepartment.Employees.push(new Employee(name, position));
    }

    deleteExistingEmployee(){
        let index = prompt("Enter the Index of the Employee you wish to Delete:");
        if(index > -1 && index < this.selectedDepartment.Employees.length){
            this.selectedDepartment.Employees.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();