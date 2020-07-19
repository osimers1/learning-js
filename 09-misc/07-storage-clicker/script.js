// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    let count = 0;
    let run = document.getElementById('increment');
    let storage = 0;
    var target = document.getElementById("target");
    
    run.addEventListener('click',()=>{
        
        count++;
        parseInt(localStorage.setItem('count', count));
        target.innerHTML = localStorage.getItem('count');
    })
})();