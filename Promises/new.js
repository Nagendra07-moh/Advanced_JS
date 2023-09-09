let counter  = 0;
function getData(){
    
    //calls an api  to fetch the data
    console.log("Fetching data...",counter++);
}

const doSomeMagic = function(fn , d){
    let timer;
    let context = this;
        args = arguments;
    clearTimeout(timer);    
    return function(){
        timer = setTimeout(()=>{
            getData.apply(context,arguments);
        },d)
    }
}

const betterFunction = doSomeMagic(getData,3000);