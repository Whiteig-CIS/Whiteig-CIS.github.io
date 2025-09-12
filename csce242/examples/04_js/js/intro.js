
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

document.getElementById("txt-emotion").onkeyup = (event) => {
    const userInput = event.currentTarget.value;
    document.getElementById("p-emotion").innerHTML = `You are feeling ${userInput}.`;
    document.getElementById("img-emotion").classList.remove("hidden");
};


