
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    
    let date = new Date();

    if(date.getHours() < 17 || date.getMinutes() < 30 && date.getHours() === 17){
        document.getElementById("target").innerHTML = "Hello";
    }
    else{
        document.getElementById("target").innerHTML = "Good evening";
    }
    

})();
