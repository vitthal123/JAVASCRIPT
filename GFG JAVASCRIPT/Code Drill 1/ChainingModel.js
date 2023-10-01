const employees=[
    {
        name:'Vitthal',
        numOfYears:4
    },
    {
        name:'Rajesh',
        numOfYears:10
    },
    {
        name:'Mangesh',
        numOfYears:5
    },
    {
        name:'Pritam',
        numOfYears:8
    },
    {
        name:'Ram',
        numOfYears:3
    }

]

const arr=employees.filter(employees=>employees.numOfYears>5);
console.log(arr);