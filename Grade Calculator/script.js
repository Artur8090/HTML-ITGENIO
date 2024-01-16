let grade = +prompt("Grades");
let TotalGrades = 0;
let sum = 0;
let allGrades = [];
while (grade != "yes"){
    allGrades.push(grade);
    TotalGrades++;
    grade = +prompt("Grades");
}
for(let i = TotalGrades; i >= 0; i--){
    sum += allGrades[i];
}
console.log(sum/TotalGrades)