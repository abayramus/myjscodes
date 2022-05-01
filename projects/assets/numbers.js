function isEven(){
    //Accessing the Number 1 input and getting the value of that input
    const num = document.getElementById('input-box-1').value;
    console.log(num);

    //num%2===0 checks if even
    //num%1===0 checks if a whole number
    //num%2!==0 checks if an odd number
if(num%2===0 && num%1===0){
    alert(num + ' is EVEN!')

}else if(num%2!==0 && num%1===0) {
    alert(num+' is ODD!')

}else{
    alert('ENTER A WHOLE NUMBER')
}
}


function calculateSum(){
    //We must get the values from both input boxes
    const num1 = document.getElementById('input-box-1').value
    const num2 = document.getElementById('input-box-2').value


    //calculate the sum of the numbers
    const sum = Number(num1)+Number(num2);

    //show the result in the correct place : <div id="show-sum"></div><br>
    // alert(sum);
    
    //Assign the sum to this element : <div id="show-sum"></div><br>
    document.getElementById('show-sum').innerHTML = `The sum of ${num1} and ${num2} = ${sum}`
    document.getElementById('calculate').value = `The sum of ${num1} and ${num2} = ${sum}`


}

//Task 2: When user clicks on calculate products, then result show be displayed on the UI  <div id="show-product"></div><br>
//We should get the multiplication of the 2 numbers and show on the UI
function calculateProduct(){
        //We must get the values from both input boxes
        const num1 = document.getElementById('input-box-1').value
        const num2 = document.getElementById('input-box-2').value

        const product = Number(num1)*Number(num2)

        document.getElementById('show-product').innerHTML = `The pruduct of ${num1} and ${num2} = ${product}`

}