
function menuItem(name, description, kcal, vegetarian, gluten, lactose, picFilePath) {
    this.name = name; // The this keyword refers to the object itself
    this.description = description;
    this.kcal = kcal;
    this.vegetarian = vegetarian;
    this.gluten = gluten;
    this.lactose = lactose;
    this.picFilePath = picFilePath;
}

/*
this.prototype.picFilePath = function() {
    return this.picFilePath;
}
*/
this.nameAndKcal = function(){
    return this.name + ' ' + this.kcal;
}


menuItem1 = new menuItem("Big boy burger", "tasty burgers made for big boys", 1400, false , true, true, "img/burg1.jpg");
menuItem2 = new menuItem("Homeboy burger", "For the homeboys ONLY", 2300, false, true, true, "img/burg2.jpg");
menuItem3 = new menuItem("Classy burger", "made for the burger connoisseur", 1000, false, false, true, "img/burg3.jpg");
menuItem4 = new menuItem("Burg", "...it's a burger", 1100, false, false, false, "img/burg4.jpg");
menuItem5 = new menuItem("Crab burger", "this burger is best eaten underwater", 750, true, true, false, "img/burg5.jpg");




//let grid = document.getElementByID("grid");



//document.getElementById("grid").innerHTML  = "öööööööööööööö";

let menu = [menuItem1, menuItem2, menuItem3, menuItem4, menuItem5];

//document.getElementById("test").innerHTML  = "öööööööööööööö";


let grid = document.getElementById("grid");

grid.classList.add("wrapper");






// skapa diven, ge properties, upp på sidan. nästa index.

let i = 0;

for(i; i < menu.length; i++){
    
    let burg = menu[i];

    let div = document.createElement('div');
    grid.appendChild(div);

    let header = document.createElement('h3');
    let name = document.createTextNode(burg.name);
    header.appendChild(name);
    div.appendChild(header);


    let  img = document.createElement('img');
    img.src = burg.picFilePath;
    img.style.height = '316px';
    img.style.width = '474px';
    div.appendChild(img);

    let list = document.createElement('ul');

    let desc = document.createTextNode(burg.description);
    let li1 = document.createElement('li');
    li1.appendChild(desc);
    list.appendChild(li1);

    let li2 = document.createElement('li');
    let kcal = document.createTextNode(burg.kcal);
    li2.appendChild(kcal);
    list.appendChild(li2);
    
    let li3 = document.createElement('li');
    let vegS = document.createTextNode("is ");
    li3.appendChild(vegS);
    
    if(burg.vegetarian){
        let veg = document.createTextNode("vegetarian");
        li3.appendChild(veg);
    }else{
        let b = document.createElement('b');
        let veg = document.createTextNode("not vegetarian");
        b.appendChild(veg);
        li3.appendChild(b);
    }
    list.appendChild(li3);

    if(burg.lactose){
        let li4 = document.createElement('li');
        let contains = document.createTextNode("contains ");
        li4.appendChild(contains);

        let b = document.createElement('b');
        let lactose = document.createTextNode("Lactose");
        b.appendChild(lactose);
        li4.appendChild(b);
        list.appendChild(li4);
    }
    if(burg.gluten){
        let li5 = document.createElement('li');
        let contains = document.createTextNode("contains ");
        li5.appendChild(contains);

        let b = document.createElement('b');
        let gluten = document.createTextNode("Gluten");
        b.appendChild(gluten);
        li5.appendChild(b);
        list.appendChild(li5);
    }
        
    
    div.appendChild(list);
    
}







/*
///////

  document.getElementById("b1").innerHTML  = menuItem1.name;
  document.getElementById("b2").innerHTML  = menuItem2.name;
  document.getElementById("b3").innerHTML  = menuItem3.name;
  document.getElementById("b4").innerHTML  = menuItem4.name;
  document.getElementById("b5").innerHTML  = menuItem5.name;

/*
 ______HTML CODE____
<div id="myID">
    <h1>Välj en burgare</h1>
    <p id="b1"> {{ burgerName }} </p>
    <p id="b2"> {{ burgerName }}</p>
    <p id="b3"> {{ burgerName }}</p>
    <p id="b4">{{ burgerName }} </p>
    <p id="b5"> {{ burgerName }} </p>

</div>

 ^/

///////


//simple for-loop
let i = 0;
for (i; i < 5; i++) {
    var para = document.createElement("p");

	  let string  = "";
    string = burgers[i].name;

    if(burgers[i].lactose){
        string = string + "\n - contains: Lactose";
    }

    if(burgers[i].gluten){
        string = string + "\n - contains: Gluten";
    }

    var node = document.createTextNode(string);

    para.appendChild(node);

    var element = document.getElementById("myID");
    element.appendChild(para);
}
*/




