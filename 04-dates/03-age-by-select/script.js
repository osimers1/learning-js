
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    

    function getAge(date) { 
        var diff = Date.now() - date.getTime();
        var age = new Date(diff); 
        return Math.abs(age.getUTCFullYear() - 1970);
    }
    document.getElementById('run').addEventListener('click', () => {
        let day = parseInt(document.getElementById("dob-day").value, 10);
        let month = parseInt(document.getElementById("dob-month").value, 10);
        let year = parseInt(document.getElementById("dob-year").value, 10);
        alert(getAge(new Date(year, month, day))); //Date(année, mois, jour)
    });
})();
