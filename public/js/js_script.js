
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


menuItem1 = new menuItem("Big boy burger", "tasty burgers made for big boys", 1400, false, true, true, "img/burg1.jpeg");
menuItem2 = new menuItem("Homeboy burger", "For the homeboys ONLY", 2300, false, true, true, "img/burg2.jpeg");
menuItem3 = new menuItem("Classy burger", "made for the burger connoisseur", 1000, false, false, true, "img/burg3.jpeg");
menuItem4 = new menuItem("burg", "...it's a burger", 1100, false, false, false, "img/burg3.jpeg");
menuItem5 = new menuItem("Crab burger", "this burger is best eaten underwater", 750, false, true, false, "img/burg3.jpeg");
