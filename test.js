// modules
// constants
    let time = 0;
    let  location = __dirname;
// f(x)


    //___ what's avaliable on global object

        setTimeout(() => {
            console.log('it has been 3 seconds')
        }, 3000); 

        // loops endlessly
        // setInterval(() => {
        //     time += 3;

        //     console.log(time + ' second have passed');
            
        // }, 3000)

         
         let timer = setInterval(() => {
            time += 3;

            console.log(time + ' second have passed');
            if(time >= 9){
                clearInterval(timer);
            }
        }, 3000)

        
// flow 
console.log(__dirname);
console.log(__filename);
console.log(location);