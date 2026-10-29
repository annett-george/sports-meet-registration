const form= document.getElementById("registration-form");
const msg= document.getElementById("msg");
const uname = document.getElementById("name");
form.addEventListener("submit", function(event){
    event.preventDefault();
    const sports = document.querySelectorAll('input[name="sports[]"]:checked');
    const selectedSports = Array.from(sports).map(sport=>sport.value);
    if(selectedSports.length===1){
        msg.textContent=`${uname.value}, your registration was successful, the sport you have chosen is ${selectedSports.join(", ")}.`;
    }
    else if(selectedSports.length===0){
        msg.textContent=`${uname.value}, your registration was successful, no sport chosen.`;
    }
    else{
    msg.textContent=`${uname.value}, your registration was successful, the sports you have chosen are ${selectedSports.join(", ")}.`;
    }
});