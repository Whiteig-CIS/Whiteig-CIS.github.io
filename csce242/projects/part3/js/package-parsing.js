const getPackages = async() => {
    const url = "https://whiteig-cis.github.io/csce242/projects/part3/json/packages.json";

    try {
        const response = await fetch (url); // await makes it so no further code gets executed until the data from the url is fetched
        console.log("fetching data...");
        return response.json();
    }
    catch(error) {
        console.log("File now found");
    }
};

const displayPackages = async () => {

    const packages = await getPackages();

    packages.forEach((package) => {
        const vehicle = package.vehicle_type;
        const teir = package.teir;

        const interiorUL = document.getElementById(vehicle+"-"+teir+"-interior");
        const exteriorUL = document.getElementById(vehicle+"-"+teir+"-exterior");
        const gallery = document.getElementById(vehicle+"-"+teir+"-gallery");

        // populating the list of interior services //
        if(interiorUL) {
        package.interior_services.forEach((service) => {
            const li = document.createElement("li");
            li.innerHTML = service;
            interiorUL.append(li);
            
                console.log(service);
            
        });
        } 

        if(exteriorUL) {
        // populating the list of exterior services //
        package.exterior_services.forEach((service) => {
            const li = document.createElement("li");
            li.innerHTML = service;
            exteriorUL.append(li);
        });
    }

    if(gallery) {
        package.images.forEach((image) => {
            const img = document.createElement("img");
            img.src = "./json/images/"+image;
            gallery.append(img);

        });
    }
        
        
        


    });

};

displayPackages();