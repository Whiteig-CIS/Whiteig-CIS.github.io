
/**
 
// PUT functions first
const sayHello = () => {        // "sayHello" IS A FUNCTION "()" THAT HOLDS "=>"
    console.log("hello world");
}

 

// VARIABLES are preceeded by: var , let , or const
// make everything a const ... and change it to 'let' if you need to change it
const btnClickMe = document.getElementById("btn-click-me"); // this makes the const point to the button in our html
                //console.log(btnClickMe);
btnClickMe.onclick = sayHello;      //dont put the parenthesis after "saHello" because the parenthesis calls the function INSTANTLY



        ///Iterate on this for efficiency ^^///

document.getElementById("btn-click-me").onclick = sayHello;

*/

        ///// Iterate on this for efficiency ^^ ////

document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello World";  // document.getElementById("btn-click-me").classList.add("clicked");

    event.currentTarget.classList.add("clicked"); // <-- element that was clicked
};



const happy = document.getElementById("btn-happy");
const sad = document.getElementById("btn-sad");
const clear = document.getElementById("btn-clear");
const par = document.getElementById("p-happy");


happy.onclick = (event) => {
    par.innerHTML = "Im Happy";  // document.getElementById("btn-click-me").classList.add("clicked");
    sad.className = ""; // this can lead to issues. use --> sad.classList.remove();
    event.currentTarget.classList.add("happy"); // <-- element that was clicked
};

sad.onclick = (event) => {
    par.innerHTML = "Im Sad";  // document.getElementById("btn-click-me").classList.add("clicked");
    happy.className = "";
    sad.classList.add("sad"); // <-- element that was clicked
};

clear.onclick = (event) => {
    par.innerHTML = "";  // document.getElementById("btn-click-me").classList.add("clicked");
    happy.className = "";
    sad.className = "";
    
};

document.getElementById("text-emotion").onkeyup = (event) => {
    const userInput = event.currentTarget.value;
    document.getElementById("p-emotion").innerHTML = `You are feeling ${userInput}.`;
    document.getElementById("img-emotion").classList.remove("hidden");
};



document.getElementById("color-show").onclick = (event) => {
    const colorInput = document.getElementById("mood-color").value.trim().toLowerCase(); // trim whitespace and lowecase
    const display = document.getElementById("display-color");
    display.innerHTML = ""; // clear out the <p> display
    const error = document.getElementById("error-color").innerHTML = ""; // reset error
    let mood = ""; // 'let' because we are modifying this
    
    if (colorInput == "") {
        error.innerHTML = "* blank"; 
        return;
    }

switch (colorInput) {
    case "red":
        display.style.color = "red";
        mood = "angry";
        break;
    case "blue":
        display.style.color = "blue";
        mood = "sad";
        break;
    case "yellow":
        display.style.color = "yellow" ;
        mood = "mellow";
        break;
  // ... more cases
  default:
        error.innerHTML = "*invalid color";
        return;
    break;
}

display.innerHTML = `You chose ${colorInput}, so you are feeling ${mood}`;
}



/* Counter */
let counter = 0;
let counterInterval;
const countP = document.getElementById("p-count");

const startBtn = document.getElementById("btn-count-start");
const pauseBtn = document.getElementById("btn-count-pause");
const resetBtn = document.getElementById("btn-count-reset");

pauseBtn.disabled = true;


document.getElementById("btn-count-start").onclick = () => {
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    counterInterval = setInterval(()=>{
        countP.innerHTML = counter;
        counter++;
    }, 1000);
   
}

document.getElementById("btn-count-pause").onclick = () => {
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    clearInterval(counterInterval);
}

document.getElementById("btn-count-reset").onclick = () => {
    clearInterval(counterInterval);
    counter = 0;
    countP.innerHTML = counter;
}

/* donations */

const goal = 10000;

document.getElementById("goal-span").innerHTML = goal;

const donateBtn = document.getElementById("btn-donations");

donateBtn.onclick = () => {
    const donation = document.getElementById("txt-donation").value;
    const errorSpan = document.getElementById("donation-error");
    errorSpan.innerHTML = "";
    console.log(donation);

    if(isNaN(donation) || donation <= 0) {
        errorSpan.innerHTML = "* Invalid Amount";
        return;
    }

    const donationPercent = donation / goal * 100;
    const message = document.getElementById("goal-message");
    console.log(donationPercent);

    
        if (donationPercent < 25) {
            console.log("x");
            message.innerHTML = "lets get started";
        }
        
        document.querySelector(":root").style.setProperty("--donation-percent", donationPercent + "%");
        
       
}


