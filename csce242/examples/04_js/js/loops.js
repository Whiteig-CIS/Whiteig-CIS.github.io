
const displayBttn = document.getElementById("btn-display");
const display = document.getElementById("loop-result");
const ul = document.createElement("ul"); // creates a ul


displayBttn.onclick = () => {
    display.append(ul);
    for (let i = 0; i < 10; ++i) {
        const li = document.createElement("li");
        li.innerHTML = i + " Banannazz";
        ul.append(li);
    }
};



document.getElementById("btn-count").onclick = () => {
    const error = document.getElementById("error-number");
    error.innerHTML = "";

    const start = parseInt(document.getElementById("txt-start").value);
    const end = parseInt(document.getElementById("txt-end").value);

    const resultDiv = document.getElementById("displayNums");
    resultDiv.innerHTML = "";

    if(end < start) {
        error.innerHTML = "* end must be greater than the start";
        return;
    }

};
