const drawBtn = document.getElementById("draw");
const clouds = document.getElementById("clouds");
const trees = document.getElementById("trees");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");







drawBtn.onclick = () => {

    clouds.innerHTML = trees.innerHTML = moon.innerHTML = sun.innerHTML = ""; // clears both clouds and trees
    trees.classList.toggle("hide");
    



    const date = new Date();
    const hour = date.getHours();

    if (hour >= 18 || hour <= 6) {
        document.getElementById("body").classList.add("night");
        
        const newMoon = document.createElement("div");
        newMoon.classList.add("moon");
        moon.append(newMoon);
    }
    else {
        const newSun = document.createElement("div");
        newSun.classList.add("sun");
        sun.append(newSun);
    }
    

    /* i coded all the logic but used ai to help with the delay feature bc i thought it was cool */
    /*Loop through and add trees and clouds*/
    function draw(i) {
        if (i >= 6) return;
        const cloud = document.createElement("div");
        cloud.classList.add("cloud");
        const tree = document.createElement("div");
        tree.classList.add("tree");

        clouds.append(cloud);
        trees.append(tree);

        setTimeout(() => draw(i + 1), 1000); // delay next iteration
    }
    draw(0);
}


