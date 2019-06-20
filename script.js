//convert to roman numbers


function convertToRoman(num) {

let roman1 = ["I","X","C","M"];
let roman5=["V","L","D"];
let num2=num.toString();
let n = "";
let numRomanArr = [];
let k=0;
for (let i=num2.length-1; i>-1; i--) {
        
    if (num2[i]==1) 
    n = roman1[k];
    else if (num2[i]==2) 
    n = roman1[k]+roman1[k];
  else if (num2[i]==3) 
    n = roman1[k]+roman1[k]+roman1[k];
    else if (num2[i]==4) 
    n =roman1[k]+ roman5[k];
    else if (num2[i]==5) 
    n = roman5[k];
    else if (num2[i]==6) 
    n = roman5[k]+roman1[k];
    else if (num2[i]==7) 
    n = roman5[k]+roman1[k]+roman1[k];
    else if (num2[i]==8) 
    n = roman5[k]+roman1[k]+roman1[k]+roman1[k];
    else if (num2[i]==9) 
    n = roman1[k]+roman1[k+1];
    else if (num2[i]==0) {
        k++;
        continue
    }


//console.log(n);
    numRomanArr.unshift(n);
        k++;
    //console.log(numRomanArr);
}

 return numRomanArr.join('');
}

console.log(convertToRoman(1004))


//symbols: I V X L C D M 
//start from smaller digits and keep going up
//start to see how many digits
//if digit between 1 and 3, 4
