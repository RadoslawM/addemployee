function employeeApp() {
    this.employeeList = [],
        this.name = '',
        this.surname = '',
        this.age = '',
        this.position = '',
        this.inputName = (() => {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = this.name;
            input.placeholder = 'Imię'
            return input;

        })()
    this.inputSurname = (() => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = this.surname;
        input.placeholder = 'Nazwisko';
        return input;

    })()
    this.inputAge = (() => {
        const input = document.createElement('input');
        input.type = 'number';
        input.value = this.age;
        input.placeholder = 'Wiek';
        return input;

    })()
    this.inputPosition = (() => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = this.position;
        input.placeholder = ' Stanowisko';
        return input;

    })()
    this.inputSubmit = (() => {
        const input = document.createElement('input');
        input.type = 'submit';
        input.value = 'Dodaj';
        return input;

    })()
    this.listOfEmployee = (() => {
        const container = document.querySelector('#EmployeeAppContainer');
        const list = document.createElement('ul');
        container.appendChild(list);
        return list;
    })()

    this.formNode = document.querySelector('.employeeForm');
};

employeeApp.prototype.renderForm = function () {

    this.formNode.appendChild(this.inputName);
    this.formNode.appendChild(this.inputSurname);
    this.formNode.appendChild(this.inputAge);
    this.formNode.appendChild(this.inputPosition);
    this.formNode.appendChild(this.inputSubmit);
    this.inputSubmit.addEventListener('click', this.addEmployee);

}

employeeApp.prototype.addEmployee = function () {
    const newEmploya = [];
    event.preventDefault();
    console.log('dodano pracownika');
    newEmploya.name = this.inputName.value;
    newEmploya.surname = this.inputSurname.value;
    newEmploya.age = this.inputAge.value;
    newEmploya.position = this.inputPosition.value;

    this.inputName.value = '';
    this.inputSurname.value = '';
    this.inputAge.value = '';
    this.inputPosition.value = '';

    this.employeeList.push(newEmploya);
    this.renderList();
    console.log(this.employeeList);

}
employeeApp.prototype.renderList = function () {
    const newListItem = document.createElement('li')
    return newListItem;
    // this.employeeList.forEach((employee, index) => {
    //  console.log(employee[index]);


    console.log('render');


};




// ######################################################### //
const NewEmployee = new employeeApp();

NewEmployee.renderList = employeeApp.prototype.renderList.bind(NewEmployee);
NewEmployee.addEmployee = employeeApp.prototype.addEmployee.bind(NewEmployee);



NewEmployee.renderForm();