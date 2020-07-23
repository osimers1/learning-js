(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        fetch("http://localhost:3000/heroes").then((xmen) => {
            return xmen.json();
        }).then((xmen) => {
            
        })
    })
})();