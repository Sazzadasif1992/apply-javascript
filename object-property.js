const student = [
    {id:23, name:'omar sunny'},
    {id:24, name:'Salman khan'},
    {id:25, name:'Amir khan'},
    {id:26, name:'suuny leone'},
]
// const names = student.map(s => s.name);
const ids  = student.map( s => s.id);
const bigger = student.filter (s => s.id>21);
console.log(bigger);
