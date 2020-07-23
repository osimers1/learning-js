// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, articles) => {
            articles.forEach(article => {
                window.lib.getComments(article.id, (error, comment) => {
                    if(error)
                        console.error(error);
                    else
                        console.log(comment);
                });
            });
        });
    });
})();