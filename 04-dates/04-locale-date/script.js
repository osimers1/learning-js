
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let date = new Date();
    let options = { weekday : 'long' , year : 'numeric' , day : 'numeric' , month : 'long' , hour : '2-digit' , minute : '2-digit'};
    document.getElementById("target").innerHTML = date.toLocaleDateString('en-GB', options);

})();
