// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
    let tar = document.getElementById('target');
    
    let table = tar.appendChild(document.createElement('table'));
    for(let i = 0 ; i < 10;i++){
        var tr = document.createElement("tr");
        tr.appendChild(document.createElement("td"));
        table.appendChild(tr);
    }
    
})();