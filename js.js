// - Знайти та вивести довижину настипних стрінгових значень
let str1='hello world'
let str2='lorem ipsum'
let str3='javascript is cool'
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
let str4='hello world';
let str5='lorem ipsum';
let str6='javascript is cool'
console.log(str4.toUpperCase());
console.log(str5.toUpperCase());
console.log(str6.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
let str7='HELLO WORLD';
let str8='LOREM IPSUM';
let str9='JAVASCRIPT IS COOL';
console.log(str7.toLowerCase());
console.log(str8.toLowerCase());
console.log(str9.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str10 = ' dirty string   ';
console.log(str10.trim());
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str11 = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let stringToarray=(str)=>{
    console.log(str.split(' '));
}
stringToarray(str11);
//
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let mas1=[10,8,-7,55,987,-1011,0,1050,0];
let MapMas=mas1.map(value=>value.toString());
console.log(MapMas);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let sortNums=(arr,direction)=>{
    if(direction==='descending'){
        let result =arr.sort(function (a,b) {
	return b-a;
 })
 console.log(result);
    }else if(direction==='ascending'){
        let result =arr.sort(function (a,b) {
            return a-b;
        })
        console.log(result);
    }
};
sortNums(mas1,'ascending');



//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let SortCourses =coursesAndDurationArray.sort((a,b)=>{
     return b.monthDuration-a.monthDuration;
 })
console.log(SortCourses);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
coursesAndDurationArray.filter((value)=>{
    return value.monthDuration>5;
})
//
// описати колоду карт
let cards = [
    {cardSuit: 'clubs', value: 'Ace', color:'black'},
    {cardSuit: 'clubs', value: 2, color:'black'},
    {cardSuit: 'clubs', value: 3, color:'black'},
    {cardSuit: 'clubs', value: 4, color:'black'},
    {cardSuit: 'clubs', value: 5, color:'black'},
    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},

    {cardSuit: 'diamonds', value: 'Ace', color:'red'},
    {cardSuit: 'diamonds', value: 2, color:'red'},
    {cardSuit: 'diamonds', value: 3, color:'red'},
    {cardSuit: 'diamonds', value: 4, color:'red'},
    {cardSuit: 'diamonds', value: 5, color:'red'},
    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},

    {cardSuit: 'hearts', value: 'Ace', color:'red'},
    {cardSuit: 'hearts', value: 2, color:'red'},
    {cardSuit: 'hearts', value: 3, color:'red'},
    {cardSuit: 'hearts', value: 4, color:'red'},
    {cardSuit: 'hearts', value: 5, color:'red'},
    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {value: 'Joker', color:'red'},

    {cardSuit: 'spades', value: 'Ace', color:'black'},
    {cardSuit: 'spades', value: 2, color:'black'},
    {cardSuit: 'spades', value: 3, color:'black'},
    {cardSuit: 'spades', value: 4, color:'black'},
    {cardSuit: 'spades', value: 5, color:'black'},
    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {value: 'Joker', color:'black'},

];

// - знайти піковий туз
let findSpadesAce=cards.find(value =>value.cardSuit==='spades' && value.value==='Ace');
console.log(findSpadesAce);
// - всі шістки
let find6=cards.filter(value => value.value===6);
console.log(find6);
// - всі червоні карти
let filterRedCards=cards.filter(value => value.color==='red');
console.log(filterRedCards);
// - всі буби
let filterDiamonds=cards.filter(value =>value.cardSuit==='diamonds' )
console.log(filterDiamonds);
// - всі трефи від 9 та більше
let filter = cards.filter(value => value.cardSuit === 'clubs' && value.value > 8 || typeof value.value === 'string' &&
value.cardSuit === 'clubs' || value.value === 'Joker' && value.cardSuit === 'clubs');
 console.log(filter);
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = cards.reduce((accum, card) => {
        if (card.cardSuit === 'spades') {
            accum.spades.push(card);
        } else if (card.cardSuit === 'diamonds') {
            accum.diamonds.push(card);
        } else if (card.cardSuit === 'hearts') {
            accum.hearts.push(card);
        } else if (card.cardSuit === 'clubs') {
            accum.clubs.push(card);
        } else {
            accum.joker.push(card);
        }
        return accum;
    }, {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: [],
        joker: []
    }
);
 console.log(reduce);
