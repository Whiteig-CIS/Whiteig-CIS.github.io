document.getElementById("sunny-times").onclick = (event) => {
    document.getElementById("text").textContent =   "Here comes the sun\n sun\n  sun\n   sun\n Here it comes";  
};

const colorInput = document.getElementById("color-picker");
let hexCode = document.getElementById("hex-code");

// show initial value
hexCode.innerHTML = `${colorInput.value}`;
hexCode.style.color = colorInput.value;

// update on user input
colorInput.addEventListener("input", () => {
    console.log(`${colorInput.value}`);
    hexCode.innerHTML = `${colorInput.value}`;
    hexCode.style.color = colorInput.value;
});

document.getElementById("image").onclick = (event) => {
    const img = document.getElementById("image");
    img.src = "images/sunny.png";
};