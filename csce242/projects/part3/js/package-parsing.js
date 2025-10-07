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

        switch (vehicle) {
            case "pontoon":
                
                break;
            case "haul":
                break;
            case "passenger_vehicle":
                console.log("vehicle: "+vehicle +"  teir: "+teir);
            default:
                console.log("default");

        }
        
        


    });

};

displayPackages();