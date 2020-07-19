// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here
    let source = document.getElementById("source");
    let img = document.createElement("img");
    img.src = "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg";
    source.appendChild(img);
    document.getElementById("target").appendChild(img);
})();