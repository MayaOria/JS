let lastname = "Orianne";
let firstname = "Maya";
let age = 35;
let birthdate = 18-06-1987;
const numberOfEyes = 2;

let sentence = "Bonjour" + firstname;

let myBook =
{
    title : "ABCD",
    author : "Jean Dupont",
    numberOfPages : 250,
    isAvailable : true
}

class Book 
{
    constructor(title, author, numberOfPages, isAvailable)

    {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.isAvailable = isAvailable;
    }
}

class OtherBook
{
    constructor(title, author, theme) {
        
        this.title = title;
        this.author = author;
        this.theme = theme
        
    }
}

let aBook = new Book ("lalala", "jajaja", 123, true);
let anotherBook = new OtherBook("lalala", "jejeje", 145, false);

let myFirstArray = [];
myFirstArray[0] = "hahaha";

let firstIndex = myFirstArray[0];



console.log(myFirstArray);



