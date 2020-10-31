// const data = [
//     {
//         country: "Bulgaria",
//         size: "110 994",
//         population: "7",
//         areas: [
//             {
//                 name: "Burgas",
//                 cities: [
//                     { name: "Nesebar", population: "0,002" },
//                     { name: "Pomorie", population: "0,004" },
//                     { name: "Aytos", population: "0,001" },
//                     { name: "Sozopol", population: "0,002" },
//                 ],
//                 population: 2
//             },
//             {
//                 name: "Sofia",
//                 cities: [
//                     { name: "Botevgrad", population: "0,050" },
//                     { name: "Pernik", population: "0,055" },
//                     { name: "Dupnitsa", population: "0,041" },
//                     { name: "Pravets", population: "0,010" },
//                 ],
//                 population: 4
//             },
//             {
//                 name: "Blagoevgrad",
//                 cities: [
//                     { name: "Usoika", population: "0,002" },
//                     { name: "Kyustendil", population: "0,040" },
//                 ],
//                 population: 3
//             },
//         ]
//     },
//     {
//         country: "Austria",
//         size: "88 874",
//         population: "8.8",
//         areas: [
//             {
//                 name: "Vienna",
//                 cities: [
//                     { name: "Kneshto", population: "2" },
//                     { name: "Asd", population: "0,004" },
//                     { name: "Fksks", population: "0,001" },
//                     { name: "Brkrk", population: "0,002" },
//                 ],
//                 population: 5
//             },
//             {
//                 name: "Aksksk",
//                 cities: [
//                     { name: "Broks", population: "0,050" },
//                     { name: "Als", population: "0,055" },
//                     { name: "Dksks", population: "0,041" },
//                     { name: "Akskss", population: "0,010" },
//                 ],
//                 population: 3
//             }
//         ]
//     }
// ]


// //data.sort((a, b) => a.country.localeCompare(b.country));
// //data.sort((a, b) => a.population - b.population);

// console.log(data.filter(a => a.areas.filter(b => b.name == "Burgas")))

const arr = [
    {name: "Ivan", egn: "990203"},
    {name: "Pesho", egn: "970616"},
    {name: "Viktor", egn: "041203"},
    {name: "Maryia", egn: "980405"}
]

let name = arr.find(x => x.name == "Pesho");
let index = arr.indexOf(name);
arr.splice(index, 3)
console.log(arr)

