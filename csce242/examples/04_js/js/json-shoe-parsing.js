const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch (url); // await makes it so no further code gets executed until the data from the url is fetched
        return response.json();
    }
    catch(error) {
        console.log("sorry");
    }
};

const showShoes = async () => {
    const shoes = await getShoes();
    const shoeList = document.getElementById("shoe-list");

    // name, brand, price, material, description, ratting. reviews
    shoes.forEach((shoe) => {
        const shoeSection = document.createElement("section");
        const ul = document.createElement("ul");

        const name = document.createElement("li");
        name.innerHTML = "Name: "+shoe.name;
        ul.append(name);

        const brand = document.createElement("li");
        brand.innerHTML = "Brand: "+shoe.brand;
        ul.append(brand);

        const price = document.createElement("li");
        price.innerHTML = "Price: $"+shoe.price;
        ul.append(price);

        const material = document.createElement("li");
        material.innerHTML = "Material: "+shoe.material;
        ul.append(material);

        /*3const description = document.createElement("li");
        description.innerHTML = shoe.description;
        ul.append(description); */

        const rating = document.createElement("li");
        rating.innerHTML = shoe.rating;
        ul.append(rating);


        const reviews = shoe.reviews;
        const reviewLi = document.createElement("li");
        const reviewUl = document.createElement("ul");
        reviews.forEach((review) => {
            const li = document.createElement("li");
            li.innerHTML = review;
            reviewUl.append(li);
        });
        reviewLi.append(reviewUl);
        ul.append(reviewLi);


        
        shoeSection.append(ul);

        shoeList.append(shoeSection);

    });
};

showShoes();