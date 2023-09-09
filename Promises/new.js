let counter  = 0;
function getData(){
    
    //calls an api  to fetch the data
    console.log("Fetching data...",counter++);
}

const debouncing = function(fn , d){
    let timer;
   
    return function(){
        let context = this;
        args = arguments;
        clearTimeout(timer);    

        timer = setTimeout(()=>{
            getData.apply(context,arguments);
        },d)
    }
}

const betterFunction = debouncing(getData,1000);