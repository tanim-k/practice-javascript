

// if (classInterval = '80-100') {
//     console.log('letter grade: A+')
//     console.log('grade point: 5')
// }
// else if (classInterval = '70-79') {
//     console.log('letter grade: A')
// }
// else if (classInterval = '60-69') {
//     console.log('letter grade: A-')
// }
// else if (classInterval = '50-59') {
//     console.log('letter grade: B')
// }
// else if (classInterval = '40-49') {
//     console.log('letter grade: C')
// }
// else if (classInterval = '33-39') {
//     console.log('letter grade: D')
// }
// else if (classInterval = '0-32') {
//     console.log('letter grade: F')
// }
// learning a specific way to make a grade sheet ]

function finalGrade(firstterm, secondtem, finalterm) {
    let average = (firstterm+secondtem+finalterm)/3;
    switch (true){
        case (average >=0 && average <= 32):
            return 'F';
            break;
        case (average >=33 && average <= 39):
            return 'D';
            break;
        case (average >=40 && average <= 49):
            return 'C';
            break;
        case (average >=50 && average <= 59):
            return 'B';
            break;
        case (average >=60 && average <= 69):
            return 'A-';
            break;
        case (average >=70 && average <= 79):
            return 'A';
            break;
        case (average >=80 && average <= 100):
            return 'abdul got: A+';
            break;
        default:
            return 'you have entered an invalid grade.';    
    }
}

console.log(finalGrade(99, 87, 88));
console.log(finalGrade(76, 55,188));