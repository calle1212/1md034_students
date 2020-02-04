
function menuItem(name, description, kcal, vegetarian, gluten, lactose, picFilePath) {
    this.name = name; // The this keyword refers to the object itself
    this.description = description;
    this.vegetarian = vegetarian;
    this.gluten = gluten;
    this.lactose = lactose;
    this.picFilePath = picFilePath;
}

this.prototype.picFilePath = function() {
    return this.picFilePath;
}

this.nameAndKcal = function(){
    return this.name + ' ' + this.kcal;
}


menuItem1 = new menuItem("Big boy burger", "tasty burgers made for big boys", 1400, false , true, true, "img/burg1.jpeg");
menuItem2 = new menuItem("Homeboy burger", "For the homeboys ONLY", 2300, false, true, true, "img/burg2.jpeg");
menuItem3 = new menuItem("Classy burger", "made for the burger connoisseur", 1000, false, false, true, "img/burg3.jpeg");
menuItem4 = new menuItem("burg", "...it's a burger", 1100, false, false, false, "img/burg3.jpeg");
menuItem5 = new menuItem("Crab burger", "this burger is best eaten underwater", 750, false, true, false, "img/burg3.jpeg");


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

*/

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
