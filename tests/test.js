function mydata() {

    return new Promise((resolve, reject) => {
         setTimeout(() => {
            const data = { name: "Rohit", age: 23 };
             resolve(data);
        }, 1000);
    });
}

mydata()
    .then((data) => {
        console.log("Data:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });