const e1Bttn = document.getElementById("e1-bttn");
const e2Bttn = document.getElementById("e2-bttn");

const e2 = document.getElementById("e2");
const e1 = document.getElementById("e1");

const daySlider = document.getElementById("day-slider");
let numDays = daySlider.value;

const dayOut = document.getElementById("p-days");
const message = document.getElementById("water-warning");
const image = document.getElementById("image");

document.getElementById("toggle").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide");
    document.getElementById("toggle").classList.toggle("up");
};


e1Bttn.onclick = () => {
    e1.classList.toggle("hide");

    if(!e2.classList.contains("hide"))
        e2.classList.add("hide");
};

e2Bttn.onclick = () => {
    e2.classList.toggle("hide");

    if(!e1.classList.contains("hide"))
        e1.classList.add("hide");
};


daySlider.oninput = () => {
    let val = daySlider.value;
    dayOut.innerHTML = val;

    if(val <= 2 ) {
        message.innerHTML = "Your plant is happy and healthy.";
        image.src = "images/healthy.png";
    }
    else if (val > 2 && val <= 5) {
        message.innerHTML =    "Your plant needs watering.";
        image.src = "images/thirsty.jpeg";
    }
    else if (val > 5 && val <= 9) {
        message.innerHTML =    "Leaves are dropping, the color is changing. Water soon.";
        image.src = "images/withering.jpg";
    }
    else {
        message.innerHTML =    "Sorry, your plant is dead.";
        image.src = "images/dead.jpeg";
    }
};


    /*                          */
    /* sourced from w3 schools. */
    /*                          */

    function updateLiveTime() {
        const now = new Date(); // Get the current date and time
        const timeString = now.toLocaleTimeString(); // Format the time for display

        // Get the HTML element by its ID
        const timeDisplayElement = document.getElementById('time');

        // Update the content of the element
        if (timeDisplayElement) {
            timeDisplayElement.textContent = timeString;
        }
    }

    // Call the function once immediately to display the time on page load
    updateLiveTime();

    // Set an interval to call the function every second (1000 milliseconds)
    setInterval(updateLiveTime, 1000);