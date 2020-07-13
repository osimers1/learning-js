
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    
    document.getElementById('run').addEventListener('click', () => {
        function numberOfFridaythe13thsIn(y) {
            var count = [];
            for (var month=0; month<12; month++) {
                var d = new Date(y,month,13);
                if(d.getDay() == 5){
                  count.push(month);
               }
            }
            return count;                            
        }
        // !!!!! rajouter +1 au nombre pour avoir le mois, et VAIS DEVOIR FAIRE CORRESPONDRE LE NOMBRE AU MOIS
        alert(numberOfFridaythe13thsIn(parseInt(document.getElementById("year").value, 10)));
    });
})();
