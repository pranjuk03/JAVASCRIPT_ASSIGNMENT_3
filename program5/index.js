const person = {
    firstName : "Pranjali",
    lastName : "K",
    greeting : function(){
        alert('Hi! I\m ' + this.firstName + this.middleName + this.lastName + '.');
    }
};

document.write(person.firstName + " ");
person.middleName = "Shuaib";
document.write(person.middleName + "  ");
document.write(person.lastName);
console.log(person.greeting());
