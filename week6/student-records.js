const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const students = [
    {last: 'Andrus', first: 'Aaron', grade:'D'},
    {last: 'Masa', first:'Manny', grade: 'C'},
    {last: 'Tanda', first: 'Tamanda',grade: 'B'}
];
const para = document.querySelectorAll('.student')
const list = document.querySelectorAll('.grade')

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

function grab(grade) {
    switch(grade)
    {
        case 'F':
            return 'Zero';
            break;
        case 'D':
            return 'One';
            break;
        case 'C':
            return 'Two';
            break;
        case 'B':
            return 'Three';
            break;
        case 'A':
            return 'Four';
            break;
        default:
            alert('Invalid grade')
    }
}
        
para.forEach((student, index) => {
    student.textContent = students[index].first + ' ' + students[index].last;
});

list.forEach((bullet, index) => {
    bullet.textContent = grab(students[index].grade)
});

students.forEach((student) => {
    console.log(grab(student.grade));
})

const grade_scale = students.map(student => 
    convert(student.grade)
)
console.log(grade_scale);