
let delay = 5000;

function makeMeAWebSite(){
    document.body.innerHTML = "";
    setTimeout(welcome, delay);
}

function welcome(){
    let display = document.createElement("div");
    display.id = "display";
    document.body.appendChild(display);
    document.getElementById("display").innerHTML = "Szia!";
    setTimeout(step0, delay);
}

function step0(){
    document.getElementById("display").innerHTML = "Én vagyok a JavaScript";
    setTimeout(step1, delay);
}

function step1(){
    document.getElementById("display").innerHTML = "Most pedig készítek neked egy weboldalt";
    setTimeout(step2, delay);
}

function step2(){
    document.getElementById("display").innerHTML = "Hol is kezdjük?";
    setTimeout(step3, delay);
}

function step3(){
    document.getElementById("display").innerHTML = "Először is, állítsuk be az oldal címsorát (title)";
    setTimeout(step4, delay);
}

function step4(){
    document.getElementById("display").innerHTML = "Legyen az, hogy \"Ez vagyok én\", mivel egy személyes oldalt készítünk";
    document.title = "Ez vagyok én";
    setTimeout(step5, delay);
}

function step5(){
    document.getElementById("display").innerHTML = "Ha most megnézed, akkor láthatod, hogy megváltozott az oldal címsora";
    setTimeout(step6, delay);
}

function step6(){
    document.getElementById("display").innerHTML = "Jöhet a háttér beállítása";
    setTimeout(step7, delay);
}

function step7(){
    document.getElementById("display").innerHTML = "A háttér lehet egyszinű";
    document.body.style.background = "#0000FF";
    setTimeout(step8, delay/3);
}

function step8(){
    document.body.style.background = "#FF0000";
    setTimeout(step9, delay/3);
}

function step9(){
    document.body.style.background = "#00FF00";
    setTimeout(step10, delay/3);
}

function step10(){
    document.getElementById("display").innerHTML = "Színátmenet";
    document.body.style = "background-image: linear-gradient(to right, red , yellow)";
    setTimeout(step11, delay/3);
}

function step11(){
    document.body.style = "background-image: linear-gradient(to left, blue , white)";
    setTimeout(step12, delay/3);
}

function step12(){
    document.body.style = "background-image: linear-gradient(to bottom right, green , red)";
    setTimeout(step13, delay/3);
}

function step13(){
    document.getElementById("display").innerHTML = "Esetleg valami kép";
    document.body.style = "background-image: url(\"../images/bg1.jpg\")";
    setTimeout(step14, delay/3);
}

function step14(){
    document.body.style = "background-image: url(\"../images/bg2.jpg\")";
    setTimeout(step15, delay/3);
}

function step15(){
    document.body.style = "background-image: url(\"../images/bg3.jpg\")";
    setTimeout(step16, delay/3);
}

function step16(){
    document.getElementById("display").innerHTML = "Ez szerintem jó is lesz";
    setTimeout(step17, delay);
}

function step17(){
    document.getElementById("display").innerHTML = "Kelleni fog egy \"container\" elem is";
    setTimeout(step18, delay);
}

function step18(){
    document.getElementById("display").innerHTML = "Ebbe fogjuk majd elhelyezni az oldal tartalmát";
    let container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);
    setTimeout(step19, delay);
}

function step19(){
    document.getElementById("display").innerHTML = "Igazitsuk a képernyő közepére";
    document.getElementById("container").style = "margin: auto;";
    setTimeout(step20, delay);
}

function step20(){
    document.getElementById("display").innerHTML = "Engedjük kicsit lejjebb";
    document.getElementById("container").style = "margin: auto; position: relative; top: 60px;";
    setTimeout(step21, delay);
}

function step21(){
    document.getElementById("display").innerHTML = "Adjunk neki egy kis árnyékot";
    document.getElementById("container").style = "margin: auto; position: relative; top: 60px; box-shadow: 0 0 10px #222222;";
    setTimeout(step22, delay);
}

function step22(){
    document.getElementById("display").innerHTML = "Így olyan lesz mintha kiemelkedne a háttérből";
    setTimeout(step23, delay);
}

function step23(){
    document.getElementById("display").innerHTML = "Jöhet a név, természetesen H1 tag-be";
    let name = document.createElement("h1");
    name.id = "name";
    document.getElementById("container").appendChild(name);
    document.getElementById("name").innerHTML = "John Smith";
    setTimeout(step24, delay);
}

function step24(){
    document.getElementById("display").innerHTML = "Ez is mehet középre";
    document.getElementById("name").style = "width: 100%; text-align: center;";
    setTimeout(step25, delay);
}

function step25(){
    document.getElementById("display").innerHTML = "Keressünk valami szebb betűtípust";
    document.getElementById("name").style = "width: 100%; text-align: center; font-family: 'Lora';";
    setTimeout(step26, delay/3);
}

function step26(){
    document.getElementById("name").style = "width: 100%; text-align: center; font-family: 'Lobster';";
    setTimeout(step27, delay/3);
}

function step27(){
    document.getElementById("name").style = "width: 100%; text-align: center; font-family: 'Chelsea Market';";
    setTimeout(step28, delay/3);
}

function step28(){
    document.getElementById("display").innerHTML = "Ez jó lesz, csak kicsit nagyobbra vesszük";
    setTimeout(step29, delay);
}

function step29(){
    document.getElementById("display").innerHTML = "Eddig jó. Jöhet bele egy kis bla-bla szöveg";
    document.getElementById("name").style = "width: 100%; text-align: center; font-family: 'Chelsea Market'; font-size: 40px;";
    setTimeout(step30, delay/3);
}

function step30(){
    let blabla = "<h2>Lórum ipse linika mindig</h2><p>Rvélyez valamilyen rományos ridlengert: kerűségöt, olást, grágot, akármit. A szaka 2003 ményeres szűréne a szárt</p><p> csaponatlan hezések, a csaponatlan hígság moszmója és fűzése mordján a fortó, némes, radt és csiper fehely zatlatos borzainak kultja valamint jeli mudás szeprője.</p><p> A locsmazás elé tönbölyű szűrénök kaságához borlódás van az alább többes cselelő akartásokban nyúzott hegyesek bükkös idekére: A körcs hogások fejgli szőkéjén délután 13.30-től 18.00-ig a fedés takállban tészkednek. A locsmazáson 15 kelen salan pörpecekre és 2 kelen spopol alatos külésökre van tüksés. A zatos pörpecek és spopolok vizedei (talatos) szerejences és lebető vetelésen ronotrányos talkorban az alásban kodnak meg, amelyet a locsmazás birgii kundás nélkül gatgathatnak át. A farácsok szintén kundás nélkül kodnak a locsmazás birgii pockábára. A táns húság kombékony nyergetei a halárnyákban részletesen bőgők.</p>";
    let text = document.createElement("div");
    text.id = "text";
    document.getElementById("container").appendChild(text);
    document.getElementById("text").innerHTML = blabla;
    setTimeout(step31, delay);
}

function step31(){
    document.getElementById("display").innerHTML = "Ide is kell egy jobb betűtípus";
    setTimeout(step32, delay);
}

function step32(){
    document.getElementById("text").style = "font-family: 'Arial';";
    setTimeout(step33, delay);
}

function step33(){
    document.getElementById("display").innerHTML = "És tulajdonképpen készen is vagyunk";
    setTimeout(step34, delay);
}

function step34(){
    document.getElementById("display").innerHTML = "Ezt már nevezhetjük weboldalnak";
    setTimeout(step35, delay);
}

function step35(){
    document.getElementById("display").innerHTML = "Kicsit sárga, kicsit savanyú, de a miénk :)";
    setTimeout(step36, delay);
}

function step36(){
    document.body.innerHTML = "<div id=\"end\">Kőszi a figyelmet!<br>Vége!</div>";
    document.body.style = "";
}