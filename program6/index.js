var str = '({"firstName":"Pranjali","lastName":"Karjawkar"})';
var obj = eval(str);
document.write("String Is Converted Into Object Using Eval() : ")
document.write(obj.firstName + " "); 
document.write(obj.lastName);
