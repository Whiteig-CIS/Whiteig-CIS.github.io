class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");

        //header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);
        const arrow = document.createElement("a");
        arrow.href = "#";
        arrow.innerHTML = "&#x2964";
        h3.append(arrow);

        //div
        const split = document.createElement("div");
        split.classList.add("columns");

            //image div
            const imageDiv = document.createElement("div");
            imageDiv.classList.add("one");
                //image
                imageDiv.append(this.picture(this.pic));
                split.append(imageDiv);
            // text div
            const textDiv = document.createElement("div");
            textDiv.classList.add("one");
            textDiv.append(this.text("breed", this.breed));
            textDiv.append(this.text("color", this.color));
            textDiv.append(this.text("age", this.age));
            textDiv.append(this.text("size", this.size));
            textDiv.classList.add("transparent");
            split.append(textDiv);

        section.append(split);

        arrow.onclick = (e) => {
            e.preventDefault(); // prevents it from taking us to the href
            textDiv.classList.toggle("transparent");
        };

        return section;
    }

    picture(filename){
        const image = document.createElement("img");
        image.src = "images/classes/"+filename;
        image.classList.add("dog-image");
        return image;  
    }

    text(label, value) {
        const p = document.createElement("p");
        p.innerHTML = label+": "+value;
        p.classList.add("dog-image");
        return p;
    }
}

const dogs = [];
dogs.push(new Dog("bean", "mut", "black", 2, "large", "yorkie.jpg"))
dogs.push(new Dog("sam", "dalmatian", "white with black spots", 4, "large", "yorkie.jpg"))
dogs.push(new Dog("fido", "poodle", "white", 3, "medium", "golden-retriever.jpg"))
dogs.push(new Dog("rex", "german shepherd", "black and tan", 5, "large", "pitt-bull.jpg"))

// on page load
const dogListDiv = document.getElementById("dog-list");

dogs.forEach((dog)=>{
    dogListDiv.append(dog.item);
}); 