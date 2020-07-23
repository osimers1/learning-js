// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () => {
        const maPromise = window.lib.getPosts();
        maPromise.then((articles) => {
            articles.forEach(liste =>{
                const maPromise1 = window.lib.getComments(liste.id);
                maPromise1.then(Comment =>{
                    console.log(Comment);
                })
            })
        })
    })
})();