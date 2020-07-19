// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here
        let password = document.getElementById("pass-one");
        let counter = document.getElementById("counter");

        password.addEventListener('input', Check);

        function Check(mdp) {
            password.value.length > 10 &&  (password.value = password.value.substring(0, password.value.length -1)); // -1  car commence a 0
            counter.innerHTML = password.value.length + "/10"
        }
})();