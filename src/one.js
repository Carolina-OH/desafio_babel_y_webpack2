export default function resultOne() {
    let multiplos=[]
    let arrOne=[1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415]
        let cuadruples=arrOne.map(function(n){
                n= n*4;
                if(n>8){
                multiplos.push(n);                    
                }
        })
        console.log(multiplos)
        return multiplos
      };