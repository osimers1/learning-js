// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById('run').addEventListener('click', () => {
        var adjs = [];
        for(let adj of adjectives)
            adjs.push(adj);
        var randomBird = birds[Math.floor(Math.random()*birds.length)];
        var adj = adjs[Math.floor(Math.random() * adjs.length)] + (randomBird.fem == true ? "e" : "");
        document.getElementById("target").innerHTML = (randomBird.fem ? "La " : "Le ") + randomBird.name + " " + adj + ".";
    });
})();