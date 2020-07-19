// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here
    let tar = document.getElementById('target');
    
    let table = tar.appendChild(document.createElement('table'));
    for(let i = 0 ; i < 10;i++){
        var tr = document.createElement("tr");
        
        for(let j = 0; j < 10; j++){
            tr.appendChild(document.createElement("td"));
            table.appendChild(tr);
        }
    }
})();