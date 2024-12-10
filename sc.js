// let url = 'https://ecommerce-api3.p.rapidapi.com/malefootwear';
// let options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': '34cc9b6d9cmsh3534ac1d5a1e268p115675jsn67ca2a8a10cb',
//         'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
//     }
// };

// var allData = [];
// let container = document.getElementById("cardsContainer")

// function display(b) {
//     container.textContent = "";
//     b.forEach(x => {
//         let card = document.createElement("div");
//         card.innerHTML = `
//          <img src="${x.Image}"/>
//        <h2>${x.Brand}</h2>
//        <span>${x.Price}</span>
//         `
//         container.appendChild(card)
//     })
// }

// async function getFootWearProducts(){
//    try{
//     var a=await fetch(url,options)
//     var b= await a.json();
//     allData=b;
//     searchItem(allData)
    
//    }catch(err){
//     console.log(err);
    
//    }
// }
// function searchItem(){
//     getFootWearProducts();
//     let i=document.getElementById("find").value.trim().toLowerCase();
//     let filterData= allData.filter(x=>x.Brand.toLowerCase().includes(i));
//     display(filterData)
// }

const url = 'https://ecommerce-api3.p.rapidapi.com/femalefootwear';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cf904d6abfmsh0eed0c9e41bc310p157aa3jsnff2f7543c5e3',
		'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
	}
};

let allData=[];
let container = document.getElementById("cardsContainer")

function display(b){
    container.textContent="";
    b.forEach(x=>{
       
        let card = document.createElement("div");
                card.innerHTML = `
                 <img src="${x.Image}"/>
               <h2>${x.Brand}</h2>
               <span>${x.Price}</span>
                `
                container.appendChild(card)
            
    })
}
async function getFootWearProducts() {
   try{
    var a=await fetch(url,options);
    var b=await a.json();
    allData=b
    searchItem(allData)
   }catch(err){
    console.log(err);
    
   }
}

function searchItem(){
    getFootWearProducts();
    let i=document.getElementById("find").value.trim().toLowerCase();
    let fd=allData.filter(x=>x.Brand.toLowerCase().includes(i))
    display(fd)
}