/* 1. Declare an array named 'teaFlavours' that contains the string 'green tea', 'black tea', and 'oolong tea'
Access the first element of the array and store it in a variable named 'firstTea'*/

let teaFlavours = ["green tea", "black tea", "oolong tea"]
console.log(teaFlavours)
//another way to declare an array is by using new
// let teaFl = new Array("green tea", "black tea", "oolong tea")
let firstTea = teaFlavours[0]
console.log(firstTea)

/*
2. Declare an array named 'cities' containing 'London', 'Tokyo', 'Paris', and 'New York'
Access the third element in the array and store it in a variable named 'favoriteCity'*/

let cities = ["London", "Tokyo", "Paris", "New York"]
console.log(cities)
let favoriteCity = cities[2]
console.log(favoriteCity)

/*
3. you have an array named 'teaType' containing 'herbal tea', 'white tea', and 'masala chai'
change the second element of the array tp 'jasmine tea'*/

let teaType = ["white tea", "herbal tea", "masala chai"]
console.log(teaType)
teaType[2] = "jasmine tea"
console.log(teaType)

/*
4. Declare an array named 'citiesVisited' containing 'Mumbai' and 'Sydney'
Add 'Berlin' to the array using 'push' method*/

let citiesVisited = ['Mumbai', 'Sydney']
//method 1
citiesVisited[2] = "Berlin"     //not recommended

//method 2
citiesVisited[citiesVisited.length] = "Berlin"     //many people use
console.log(citiesVisited)

//method 3
citiesVisited.push("Berlin")         //recommended
console.log(citiesVisited)

/*
5. you have an array named 'teaOrders' with 'chai', 'iced tea', 'matcha' and 'earl grey'
Remove the last element of the array using 'pop' method and store it in a variable named 'lastOrder'*/
let teaOrders  = ['chai', 'iced tea', 'matcha', 'earl grey' ]
let lasrOrder = teaOrders.pop()
console.log(lasrOrder)

/*
6. you have an array named 'popularTeas' containing 'green tea', 'oolong tea', 'chai'
create a soft copy of this array named 'softCopyTeas'*/

let popularTeas = ['green tea', 'oolong tea', 'chai']
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas)
console.log(popularTeas)   //this happens cos in objects they now point to same memory reference


/*
7. you have an array named 'topCities' containing 'Berlin', 'Singapore', and 'New York'
create a hard copy of this array named 'hardCopyCities'*/

let topCities = ['Berlin', 'Singapore', 'New York']
hardCopyCities = [...topCities]
topCities.pop()
console.log(hardCopyCities)

/*
8. you have two array europeanCities = ['Paris', 'Rome' ] and asianCities = ['Tokyo', [Bangkok]]
Merge these two arrays into a new array named 'worldCities'*/

let europeanCities = ['Paris', 'Rome' ];
let asianCities = ['Tokyo', 'Bangkok'];

let worldCities = europeanCities.concat(asianCities)
console.log(worldCities)

/*
9. you have an array named 'teaMenu' containing 'masala chai', 'oolong tea', 'green tea', 'earl grey'
Find the length of the array and store it in a variable named 'menuLength'*/

let teaMenu = ['masala chai', 'oolong tea', 'green tea', 'earl grey']
let menuLength = teaMenu.length;
console.log(menuLength)

/*
10. you have an array named 'cityBucketList' containing 'kyoto', 'London', 'Cape Town', 'Vancouver'
check if 'london' is in the array and store the result in a variable named 'isLondonList'*/

let cityBucketList = ['kyoto', 'London', 'Cape Town', 'Vancouver']
let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList)
