// 05-arrays/07-filter-array/script.js - 5.7: filter an array

(() => {

    const people = [
        {
            firstname: "Dreddy",
            lastname: "Nussgen",
            age: 70,
        },
        {
            firstname: "Yves",
            lastname: "Sear",
            age: 49,
        },
        {
            firstname: "Marcel",
            lastname: "Cowderay",
            age: 59,
        },
        {
            firstname: "Dag",
            lastname: "Binnall",
            age: 31,
        },
        {
            firstname: "Horten",
            lastname: "Claesens",
            age: 75,
        },
        {
            firstname: "Charmian",
            lastname: "Harnes",
            age: 10,
        },
        {
            firstname: "Sean",
            lastname: "Littlejohns",
            age: 37,
        },
        {
            firstname: "Hazlett",
            lastname: "Sprouls",
            age: 87,
        },
        {
            firstname: "Marcel",
            lastname: "Hasted",
            age: 66,
        },
        {
            firstname: "Cary",
            lastname: "Summerson",
            age: 15,
        },
        {
            firstname: "Feodor",
            lastname: "Ollett",
            age: 56,
        },
        {
            firstname: "Kelly",
            lastname: "Ranahan",
            age: 62,
        },
        {
            firstname: "Madelene",
            lastname: "Davie",
            age: 14,
        },
        {
            firstname: "Bent",
            lastname: "Karpe",
            age: 82,
        },
        {
            firstname: "Reinaldo",
            lastname: "Grimbleby",
            age: 81,
        },
    ];

    // your code here
    document.getElementById('run').addEventListener('click', () => {
        var majors = [];
        for(var i = 0; i < people.length; i++){
            var person = people[i];
            if(person.age > 18){
              majors.push(person);
            }
          }
          console.log(majors);
         
        // ou bien comme ceci vu qu'il n'i a q'une seul ligne  
        //   let majors = [];
        //   for(let person of people)
        //     if(person.age > 18)
        //       majors.push(person);
    });
})();