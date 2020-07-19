// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, articles) => {
            if(error)
                console.log(error);
                // console.error(error)// aficche dans la console en mode error
            else
                console.log(articles);
        });
        console.log("Requete envoyée.");
    });
})();