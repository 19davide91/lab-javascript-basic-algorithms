// Iteration 1: Names and Input


const hacker1 = 'Gulia'
const hacker2 = 'Davide'
console.log (`the driver's name is ${hacker1}`)
console.log (`the navegator's name is ${hacker2}`)


// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log(`the driver has the longest name, it is ${hacker1.length} characters`)
    }
    else if (hacker1.length < hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
        }
         else {
            console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }

// Iteration 3: Loops


let newName='';


for (let i=0; i<hacker1.length; i++){
let letterUpper = (hacker1[i]).toUpperCase();
newName += letterUpper + ' '
}
console.log (newName)




let reverseName=''
for (let i=hacker2.length -1; i>=0; i--){
reverseName += hacker2[i]
}
console.log (reverseName)





for(let i = 0; i < hacker1.length; i++){
    for(let j = 0 ; j < hacker2.length; j++){
      if(hacker1[i] = hacker2[j]){
        console.log(`What?! You both have the same name?`)
      }
      else if (hacker1[i] < hacker2[j]){
        console.log(`The driver's name goes first.`)
      }
      else{
        console.log(`Yo, the navigator goes first definitely.`)
      }
    }
  }



