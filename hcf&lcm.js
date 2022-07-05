let first = document.querySelector('.input1');
let second = document.querySelector('.input2');
let display = document.querySelector('.Answer');
let factor1 = [];
let factor2 = [];
let common = [];






function submit() {

    display.innerHTML = ''

    if (first.value == '' || second.value == '') {
        display.innerHTML = 'Your have not input the variable'
        return
    }

    for (let index = 1; index < first.value; index++) {
        
        if (first.value % index == 0 ) {

            factor1.push(index)
            
        }
        
    }
    console.log(factor1);

    for (let ind = 1; ind < second.value; ind++) {
        
        if (second.value % ind == 0 ) {

            factor2.push(ind)
            
        }
        
    }
    console.log(factor2);

    for (let i = 0; i < factor1.length; i++) {
        
        for (let k = 0; k < factor2.length; k++) {
            
            if (factor1[i] === factor2[k]) {
                common.push(factor2[k])
            }
            
        }
        
    }
    console.log(common);

    // using sort function

    let result = common.sort(function(y,z){
        return z - y

    })
    console.log(result);
    console.log(result[0]);

  //To calculate the LCM = HCF * firstvariable/HCF * secondvariable/hcf

    let lcm =  (first.value * second.value ) / result[0]
     
    console.log(lcm);

    display.innerHTML = ` The HCF of ${first.value} and ${second.value} is ${result[0]} <br>
                                      and <br>
                            The LCM of ${first.value} and ${second.value} is ${lcm} 
    
                            `
                        
    
                        


    //using if statement
//     s = common[0]
//     for (let ix = 0; ix < common.length; ix++) {
//         if (s <= common[ix]) {
            
//             s = common[ix]
//         }
        
//     }
// console.log(s);

factor1.length = 0
factor2.length = 0
common.length = 0


}

    

    
   