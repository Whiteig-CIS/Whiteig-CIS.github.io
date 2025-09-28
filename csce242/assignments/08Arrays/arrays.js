const part3Path = "../../projects/part3/images/portfolio/";

const beforeArr = {
    "seats": part3Path + "9b.jpeg",
    "bimini": part3Path + "12b.jpeg",
    "wax": part3Path + "8b.jpeg",
    "pontoons": part3Path + "24b.jpeg"
}

const afterArr = {
    "seats": part3Path + "9a.jpeg",
    "bimini": part3Path + "12a.jpeg",
    "wax": part3Path + "8a.jpeg",
    "pontoons": part3Path + "24a.jpeg"
}

const display = document.getElementById("array-display");


display.innerHTML = ""; // clear the display.

for (let i in beforeArr) {
    const li = document.createElement("li"); // creates li

    const img = document.createElement("img"); // creates the image
    img.src = beforeArr[i];
    img.id = i;

    const caption = document.createElement("h2"); // create the h2
    caption.innerHTML = "before "+i+ " treatment."
    caption.classList.add("hover-h2", "hidden");


    li.append(img, caption); // append them
    display.append(li);
}

    for(let li of display.children) {

        let img = li.querySelector("img");

         img.addEventListener("mouseenter", () => { // display caption on mouse in
            let caption = li.querySelector("h2");
            caption.classList.remove("hidden");
        });

         img.addEventListener("mouseout", () => {  // hide caption on mouse out
            let caption = li.querySelector("h2");
            caption.classList.add("hidden");
        });

       
        li.onclick = (e) => {
            console.log(e.clientX);
            document.getElementById("pop-up").classList.remove("hidden");
            document.getElementById("pop-up-img").src = afterArr[img.id];
            document.getElementById("pop-up-caption").innerHTML = "After " + img.id + " treatment.";
             /*figured this out on my own by researching how to do it*/
            document.getElementById("pop-up").style.left = e.clientX-200 + "px";    
        }
    }

    document.getElementById("close").onclick = () => {
        document.getElementById("pop-up").classList.add("hidden");
    }

     




