////with out async
// fetch('../data/data.json')
// .then( (res)=>{
//     return res.json();
// })
// .then( (data)=>{
//     let result = data.results;
//     console.table(result);
// })

// async function fetchData(){
//     let data = await fetch('');
//     return data;
// }
// async function display(){
//     let result = await
// }

fetch('https://api.chucknorris.io/jokes/random')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    let tbody = document.querySelector('tbody');
    Object.keys(data).forEach( (item)=>{
        if(data[item].length){
            console.log(`${item}: ${data[item]}`);
            tbody.innerHTML +=
            `
                <tr>
                    <td>${item}</td>
                    <td>${data[item]}</td>
                </tr>
            `
        }
    } )
})