class art {

    constructor (name, artist, image,isFrame) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.isFrame = isFrame;
    }

    get section() {
        // adding content to the section
        const section = document.createElement("section");
        const h2 = document.createElement("h2");
        h2.classList.add("art-name");
        const img = document.createElement("img");

        h2.innerHTML = this.name;
        img.src = "images/"+this.image;
        
        section.append(h2, img);

        // adding event listener to open modal
        section.onclick = () => {
            document.getElementById("modal").style.display="block";
            const modalTitle = document.getElementById("modal-title");
            const modalArtist = document.getElementById("modal-artist");
            const modalImage = document.getElementById("modal-image");

            modalTitle.innerHTML = this.name;
            modalArtist.innerHTML = this.artist;
            modalImage.src = "images/"+this.image;

            if(this.isFrame)
                modalImage.classList.add("border");
        };

        document.getElementById("close-modal").onclick = () => {
            document.getElementById("modal").style.display="none";
            document.getElementById("modal-title").innerHTML = ""; // clears the modal and closes it
            document.getElementById("modal-artist").innerHTML = "";
            document.getElementById("modal-image").src = "";
            document.getElementById("modal-image").classList.remove("border");
        }
        return section;
    }
}


const artworks = [
    new art("Starry Night", "Vincent van Gogh", "starry_night.jpg", true),
    new art("The Persistence of Memory", "Salvador Dalí", "persistence-memory.jpg", false),
    new art("Mona Lisa", "Leonardo da Vinci", "mona-lisa.png", true),
    new art("The Scream", "Edvard Munch", "scream.png", false),
    new art("Girl with a Pearl Earring", "Johannes Vermeer", "pearl.jpg", true)
];

artworks.forEach(element => {
    document.getElementById("art-board").append(element.section);
});
