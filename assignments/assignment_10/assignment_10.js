//problem 1
var employee1 = {
    "name": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": "40000",
    "raiseEligibility": "true"
}
var employee2 = {
    "name": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": "18500",
    "raiseEligibility": "true"
}
var employee3 = {
    "name": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": "21200",
    "raiseEligibility": "false"
}
console.log("problem 1")
console.log(employee1);
console.log(employee2);
console.log(employee3);

//problem 2
var company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [employee1, employee2, employee3]
}
console.log("problem 2")
console.log(company);

//problem 3
var employee4 = {
    "name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": "25600",
    "raiseEligibility": "false"
}
company.employees[3] = employee4;
console.log("problem 3")
console.log(company);

//problme 4
var totalSalary = 0;
for(var i = 0; i < 4; i++){
    totalSalary += parseInt(company.employees[i].salary);
}
console.log("problem 4");
console.log(totalSalary);

//problem 5
var newSalary = 0;
for(var i = 0; i < 4; i++){
    if(company.employees[i].raiseEligibility == 'true') {
        newSalary = (parseInt(company.employees[i].salary) / 10) + parseInt(company.employees[i].salary);
        company.employees[i].salary = newSalary;
        company.employees[i].raiseEligibility = 'false';
    }
}
console.log("problem 5");
console.log(company);

//problem 6 Working from home: ['Anna', 'Sam']
var wfhEmployees = ['Anna', 'Sam'];
for(var i = 0; i < 4; i++){
}
for(var i = 0; i < 4; i++){
    for(var j = 0; j < 2; j++){
        if(company.employees[i].name == wfhEmployees[j]){
            company.employees[i].wfh = 'true';
        }
    }
    if(company.employees[i].wfh != 'true'){
        company.employees[i].wfh = 'false';
    }
}
console.log("problem 6");
console.log(company);
