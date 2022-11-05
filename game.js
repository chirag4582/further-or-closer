var leftText = document.getElementById('title-text-left');
var rightText = document.getElementById('title-text-right');
var distance = document.getElementById('distance');
var leftImage = document.getElementsByClassName('image-one')
var rightImage = document.getElementsByClassName('image-two')
const far = document.getElementById('further')
const closer = document.getElementById('closer')
var audio = document.getElementsByTagName("audio")




class Sprite {
    constructor(name,distance,src)
    {
        this.name = name;
        this.distance = distance;
        this.src = src;
    }
}

const bubble = new Sprite ("Bubble", 11000,"bubble")
const carina = new Sprite ("Carina", 7500,"carina")
const crab = new Sprite ("Crab", 6500,"crab")
const ghost = new Sprite ("Ghost", 1470,"ghost")
const helix = new Sprite ("Helix", 700,"helix")
const lagoon = new Sprite ("Lagoon", 4077,"lagoon")
const ring = new Sprite ("Ring",2200 ,"ring")
const spirograph = new Sprite ("Spirograph", 3500,"spirograph")
const twinjet = new Sprite ("Twinjet", 2120,"twinjet")
const veil = new Sprite ("Veil", 1470,"veil")


var array = [carina,crab,ghost,helix,lagoon,ring,spirograph,twinjet,veil]
var randomnumber = Math.floor((Math.random())*7)
var randomnelement = (array[randomnumber]);
var randomname = (randomnelement.name);
var randomdist = (randomnelement.distance);
var randomsource = (randomnelement.src)
console.log(randomname,randomdist,randomsource,randomnumber,array);
far.onclick = checkfar
 var score=0;

closer.onclick = checkclose;

function checkclose()
{
  var num = 7
var array = [crab,ghost,helix,lagoon,ring,spirograph,twinjet,veil]
var randomnumber = Math.floor((Math.random())*num)
var randomnelement = (array[randomnumber]);
var randomname = (randomnelement.name);
var randomdist = (randomnelement.distance);
var randomsource = (randomnelement.src)
console.log(randomname,randomdist,randomsource,distance.innerHTML);
console.log(array)
rightText.innerHTML=randomname;
if(randomdist<distance.innerHTML)
{
    score++;
    leftText.innerHTML=randomnelement.name
    distance.innerHTML=randomnelement.distance
    num-=1;
    console.log(score,num)
}
else
{window.location.href="./score.html";}
const newarray = array.splice(randomnumber,1)
console.log(newarray)
console.log(array)

var randomnumber = Math.floor((Math.random())*num)
var randomnelement = (array[randomnumber]);
var randomname = (randomnelement.name);
var randomdist = (randomnelement.distance);
var randomsource = (randomnelement.src)
rightText.innerHTML=randomnelement.name;
localStorage.setItem('score',score);
// var audio = new Audio = "sci-fi-door-14782.mp3"
audio.play()
}
function checkfar ()
{
   
var num = 7
    var array = [crab,ghost,helix,lagoon,ring,spirograph,twinjet,veil]
    var randomnumber = Math.floor((Math.random())*num)
    var randomnelement = (array[randomnumber]);
    var randomname = (randomnelement.name);
    var randomdist = (randomnelement.distance);
    var randomsource = (randomnelement.src)

    if(randomdist>=distance.innerHTML)
    {
        score++;
        leftText.innerHTML=randomnelement.name
        distance.innerHTML=randomnelement.distance
        
    }
    else
    {window.location.href="./score.html";}
    var randomnumber = Math.floor((Math.random())*num)
    var randomelement = (array[randomnumber]);
    var randomname = (randomnelement.name);
    var randomdist = (randomnelement.distance);
    var randomsource = (randomnelement.src)
    rightText.innerHTML=randomnelement.name;
    score++;
    leftImage.src = randomelement.src
    console.log(score);
    localStorage.setItem('score',score)
}





