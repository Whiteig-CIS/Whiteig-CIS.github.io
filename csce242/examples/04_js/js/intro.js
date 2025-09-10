
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

document.getElementById("btn-click-me").onclick = () => {
    console.log("hello world");
};


