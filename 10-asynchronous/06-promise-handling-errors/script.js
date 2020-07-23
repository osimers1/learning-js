// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () =>{
        const maPromise = window.lib.getPersons();
        maPromise.then((error, persons) => {
            if(error){
                console.error(error);
            }
            else{
                console.log(persons);
            }
        })
    })
})();