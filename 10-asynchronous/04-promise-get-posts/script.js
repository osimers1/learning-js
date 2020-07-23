// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () =>{
        const maPromise = window.lib.getPosts();
        maPromise.then((liste) => liste.forEach(element => {
            console.log(element);
        }))
    })
})();