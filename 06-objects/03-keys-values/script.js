// 06-objects/03-keys-values/script.js - 6.3: keys & values


(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here
    document.getElementById('run').addEventListener('click', () => {
        var keys = Object.keys(person);
        for(let key of keys)
            console.log(`Key: ${key}, Value: ${person[key]}.`)
    });
})();