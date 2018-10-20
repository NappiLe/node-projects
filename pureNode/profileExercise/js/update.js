'use strict';

(function(){
    let firstname;
    let lastname;
    let photo;
    let yearofbirth;
    let yearofdead;

    document.addEventListener('DOMContentLoaded',init);

    function init(){
        firstname=document.getElementById('firstName');
        lastname=document.getElementById('lastName');
        photo=document.getElementById('peopleImage');
        yearofbirth=document.getElementById('yearOfBirth');
        yearofdead=document.getElementById('yearOfDead');
        fetch('/all')
            .then(result=> result.json())
            .then(data=>populateProgrammer(data))
            .catch(err=>console.log(err));
    }

    function populateProgrammer(data){
        firstname.textContent=data.firstname;
        lastname.textContent=data.lastname;
        photo.src=`/images/${data.image}`;
        yearofbirth.textContent=data.yearofbirth;
        yearofdead.textContent=data.yearofdead;
    }

})();
