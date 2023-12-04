// modules
// constants
    let time = 0;
// f(x)


    //___ what's avaliable on global object

        setTimeout(() => {
            console.log('it has been 3 seconds')
        }, 3000); 

        // loops endlessly
        setInterval(() => {
            time += 3;

            console.log(time + ' second have passed');
            
        }, 3000)

        
// flow 