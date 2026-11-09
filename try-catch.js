function checkAge(){
     const ageField = document.getElementById('age');
     const ageText = ageField.value;

     const errorTag = document.getElementById('error');

     try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw "Please enter a number";
        }
        else if(age < 18){
            throw 'Baccha Kaccha not allowed';
        }
        else if(age > 30){
            throw "murobbi ra aikhane aisen an";
        }
        errorTag.innerHTML ='';
     }
     catch(err){
        console.log('Error: ', err);
        // errorTag.innerText = err;
        errorTag.innerHTML = 'Error: ' + err;
     }
     finally{
        console.log("All done inside try catch!");
     }
        console.log(11111);

}



// for enter button handler: 
const ageField = document.getElementById('age').addEventListener('keydown', function(event){

    if(event.key === 'Enter'){
        checkAge();
    }
});


