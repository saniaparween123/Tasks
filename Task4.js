let display_output= document.getElementById('display_output');
let click_button = document.getElementById('click_button');

    
let input_array =[];
click_button.addEventListener('click',()=>{

    let name = document.getElementById('name');
    let age = document.getElementById('age');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone_number');
    let city = document.getElementById('city');

    let input=`Name: ${name.value} ,  Age: ${age.value} ,  E-mail: ${email.value}  ,  Phone: ${phone.value}  , City: ${city.value}`
  

    input_array.push(input);
    var newDiv = document.createElement("div");
    

    for (i of input_array){
        newDiv.innerHTML = i;
        display_output.appendChild(newDiv);

    }

})