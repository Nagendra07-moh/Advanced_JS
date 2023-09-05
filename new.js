document.querySelector('#category').addEventListener('click', (e)=>{
    // console.log("category parent clicked!!");

    let prodSelected = e.target.id;
    console.log(prodSelected);

    if(e.target.tagName == 'LI'){
        
        window.location.href = '/' + prodSelected //to redirect to the new 
    }

})

//FOR THE FROMS (convert it to uppercase)

document.querySelector('#form').addEventListener('keydown', (e)=>{
    // console.log("category parent clicked!!");
    console.log(e);

    if(e.target.dataset.conupper != undefined){
        e.target.value = e.target.value.toUpperCase();
    }

})
