
function printBookPrise (bookArray,bookName,price){
    for (let i = 0; i < bookArray.length; i++) {
      bookArray[i].price==price;
      if (bookArray[i].name==bookName&& bookArray[i].available==true) {
        return bookName +" this book is avaliable,prise:"+price;
      } else {
        return bookName +" this book is  not avaliable,prise:"+price;

      }
        
    }
}
var bookArray =[
    {name:"organic", available: true}  ,
    {name:"clean code", available: false},
    {name:"Math", available: true} ,
];

 var bookName="organic";
 var price =60;
 console.log(printBookPrise(bookArray,bookName,price));

var bookName="clean code";
var price =20;

console.log(printBookPrise(bookArray,bookName,price));

var bookName="Math";
var price =80;
console.log(printBookPrise(bookArray,bookName,price));


