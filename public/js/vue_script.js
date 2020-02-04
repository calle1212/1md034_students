const vm = new Vue({
  el: '#myID',
  data: {
    arbitraryVariableName: 'Välj en burgare'
  }
})


const vm1 = new Vue({
  el: '#b1',
  data: {
    burgerName: menuItem1.name
  }
})

const vm2 = new Vue({
  el: '#b2',
  data: {
    burgerName: menuItem2.name
  }
})
const vm3 = new Vue({
  el: '#b3',
  data: {
    burgerName: menuItem3.name
  }
})
const vm4 = new Vue({
  el: '#b4',
  data: {
    burgerName: menuItem4.name
  }
})
const vm5 = new Vue({
  el: '#b5',
  data: {
    burgerName: menuItem5.name
  }
})



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




let menu = [menuItem1, menuItem2, menuItem3, menuItem4, menuItem5];


var loop = new Vue({
  el: '#burgers',
  data: {
   menu 
  }
})



/*
 ___________HTML CODE, LOOP_____

 <div id="myID">
    <h1>Välj en burgare</h1>
    <p> original text  </p>

     <ul id="burgers">
     <li v-for="burger in menu">
     {{ burger.name }}
     <ul>
     <li v-if="burger.lactose"> 
         Contains <b>Lactose</b>
     </li>
        <li v-if="burger.gluten"> 
         Contains <b>Gluten</b>
     </li>
     </ul>
     </li>
     </ul>

  </div>

*/
