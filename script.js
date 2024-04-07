var originaltext = "I love my country pakistan. <br> I like my city Faisalabad. <br> I love my Homeland" 

var Cities = ["Faisalabad","Lahore","Islamabad","Karachi","Burawala","Multan","Kashmir"] 

document.getElementById("originaltextbox").innerHTML= originaltext ;

//placeholder
document.getElementById("buttoninput").onclick = function (){
    document.getElementById("inputtext").innerHTML = "";
}

// Lowercase
function lowercase () {
    let lowerCaseText = originaltext.toLowerCase();
    document.getElementById("output").innerHTML = lowerCaseText 
}


// Uppercase
function uppercase(){
let UpperCaseText = originaltext.toUpperCase();
document.getElementById("output").innerHTML = UpperCaseText
}

function capitalize (){
    let capitalizeText = '<span style="text-transform: capitalize;">' + originaltext + '</span>' 
    document.getElementById("output").innerHTML = capitalizeText
}
   
// Betterformating

function betterFormatting() {
    let text = document.getElementById("inputtext"). value ;

    if(!text){
     alert("Please type your text")
     return;
    }
    text = text.toLowerCase();
    document.getElementById("output").style.textTransform = "capitalize";
    document.getElementById("output").innerHTML = text
}

// Print All Cities 

function printAllCities(){
document.getElementById("output").innerHTML = "";

for(let i = 0; i < Cities.length ; i++){
    let num = 1 + i;
    document.getElementById("output").innerHTML += num + ')' + Cities[i] + "<br>";
}
}

// Add city into the list

function addcity(){
let city = document.getElementById("inputtext"). value ;
if(city.length < 3 ){
alert("please type your city correctly.");
return;
}

let cityFirstLetter= city.slice(0,1).toUpperCase();
let cityAllLetters= city.slice(1).toLowerCase();

let cityWordInCapitalize = cityFirstLetter + cityAllLetters;

let cityFound = false;
for(let i = 0; i <Cities.length; i++ ){
    if(Cities === cityWordInCapitalize){
        cityFound = true;
        let html = '<span style="color:red; font-size: 20px;">"' + cityWordInCapitalize + '"</span> is already in list.';
        document.getElementById("output").innerHTML = html;
    }
}

if(cityFound == false){
    Cities.push(cityWordInCapitalize);
    let html = '<span style="color: green; font-size:20px;">"' + cityWordInCapitalize + '"</span> has been successfully added into list.';
    document.getElementById("output").innerHTML = html
}

}


// ckeck city in list
function ckeckcity(){
    let city = document.getElementById("inputtext").value;

    if(!city){
        alert("Please type your city name");
        return;
    }
    let cityFirstLetter = city.slice(0,1).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();
    cityWordInCapitalize = cityFirstLetter + cityAllLetters ;

    let cityFound = false

    for(let i = 0; i < Cities.length ; i++){

        if (Cities === cityWordInCapitalize){
            cityFound = true

            let html = '<span style ="color: green; font-size: 20px; ">"' + cityWordInCapitalize + "'Found in the list. &#128151;";
            document.getElementById("output").innerHTML = html
        }
    }

    if(cityFound == false){
        let html = 'SORRY &#128524; We coudln\'t found your city <span style="color: red; font-size: 20px;">"' + cityWordInCapitalize + '"</span>';
        document.getElementById("output").innerHTML = html;
    }
}

// find the  word
 function findword(){
let neworiginaltext = originaltext.toLowerCase();
let word = document.getElementById("inputtext").value;

if(!word){
    alert("please type your word");
    return;
}

word = word.toLowerCase();

let findword = neworiginaltext.indexOf(word);
console.log(findword);

if(findword !== -1){
    let html = 'Your word <span style="color: green; font-size: 18px;">"' + word + '"</span> find at index: ' + findword;
    document.getElementById("output").innerHTML = html; 
}else{
    let html ='Your word <span style="color: green; font-size: 18px; ">"' + word + '"</span> dose not exist in the Original String';
    document.getElementById("output").innerHTML = html;
}


 }
// replace the word

 function replaceword(){
 let neworiginaltext = originaltext.toLowerCase();

 let word = document.getElementById('inputtext').value;

 if(!word){
    alert('Please type your word replacing.');
    return;
 }

 let replacewith = prompt('Enter a word that you want to replace with');
 if(!replacewith){
    alert("Please type a word to replace it with " + word + ".");
    return;
 }

 word = word.toLowerCase();
 word = new RegExp(word,'g');

 replacewith = replacewith.toLowerCase();

 let replaceword = neworiginaltext.replace(word,replacewith);
 document.getElementById("output").innerHTML = replaceword ;
 }

 // clear output
document.getElementById("clearoutputbutton").onclick = function (){
    let outputboxHTML = document.getElementById("output").innerHTML = "" ;
}


