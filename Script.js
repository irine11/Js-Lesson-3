// 1 exercise
let array = [5, 25, 89, 120, 36];
array.push("javascript", "python")
array.unshift("html", "css")
console.log(array);
array.shift();
array.pop();
console.log(array);

// 2 exercise
let fruit = ['ფორთოხალი', 'ბანანი', 'მსხალი'];
console.log(fruit);
fruit.push('ვაშლი', 'ანანასი');
console.log(fruit);
fruit.unshift('საზამთრო')
console.log(fruit);
fruit.splice(2, 0, 'მანგო');
console.log(fruit);
fruit.shift();
console.log(fruit);
fruit.pop();
console.log(fruit);

// 3 exercise
let array = [12, 25, 3, 6, 8, 14, 7, 23];
let result = array.map(function(x) {
    return x / 3;
})
console.log(result);

// 4 exercise
let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let newArray = array.filter(function(x) {
    if (typeof x == "number") {
        return x;
    }
});
console.log(newArray);

// 5 exercise
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let newWords = languages.filter(function(x) {
    return x.length > 3;

})
console.log(newWords);

// 6 exercise
let array = ['academy', 'of', 'digital', 'industries'].reduce(function(accumulator, currentValue) {
        return accumulator.concat(currentValue, " ");
    },
    "",
)
console.log(array);

// 7 exercise
let items = [12, 'google', 32, null, 'yahoo', 25];
let newArray = items.map(function(item) {
    if (typeof item == "number") {
        return Math.sqrt(item)
    }
    if (typeof item == "string") {
        return item.toUpperCase()
    }
    return item;

});
console.log(newArray);

// 8 exercise
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let result = words.filter(function(x) {
    return x.includes("m", "M")
})
console.log(result);