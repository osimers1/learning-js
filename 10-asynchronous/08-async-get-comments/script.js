// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', async()=>{
        const maPromise = await window.lib.getPosts();
        maPromise.forEach(async()=>{
            const post = await window.lib.getComments(maPromise.id);
            console.log(post);
        })
    })
})();
