
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

    document.createElement("ul");
    for (let i=0; i <= end; ++i) {
        const p = document.createElement("p");
        p.innerHTML = i;
        resultDiv.append(p);
        p.onclick = () => {console.log(`you clicked # ${i}`)};
    }
};

document.getElementById("btn-show").onclick = () => {
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    const toys = ["ball", "skipping rope", "doll", "mini car", "elmo"];

    /* first method to iterate 
    for (let i = 0; i <= toys.length; ++i) {
        const toy = document.createElement("li");
        toy.innerHTML = toys[i];
        toyList.append(toy);
    } */

       /* second method */
       toys.forEach((toy, i) => {
        const li = document.createElement("li");
        li.innerHTML = toy;
        toyList.append(li);
       });
}

document.getElementById("btn-show-price").onclick = () => {
    const toys = [];
    toys["ball"] = 2.99;
    toys["barbie"] = 19.99;
    toys["skipping rope"] = 1.98;
    toys["mini car"] = 3.88;

    const toyDiv = document.getElementById("toys");
    toyDiv.innerHTML = "";

    for (let toy in toys) {
        const p = document.createElement("p");
        p.innerHTML = toy;
        toyDiv.append(p);
        const prices = document.getElementById("prices");

        p.onclick = () => {
            prices.innerHTML = "";
            const price = document.createElement("p");
            price.innerHTML = toy + " is $"+toys[toy];
            prices.append(price);
        };
    }
};
