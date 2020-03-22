
/*
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

*/

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





//let menu = [menuItem1, menuItem2, menuItem3, menuItem4, menuItem5];

/*
  var loop = new Vue({
  el: '#grid',
  data: {
  menu 
  }
  })
*/
/*
  const vm5 = new Vue({
  el: '#burger2',
  data: {
  burger: menu[1]
  }
  })
*/



/*
  const burgerz = new Vue({
  el: '#grid',
  data: {
  
  
  }
  })
*/

/*
 ___________HTML CODE, LOOP_____

<div id="myID">
    <h1>Välj en burgare</h1>
    <p> original text  </p>

     <ul id="burgers">
       <li v-for="burger in menu">
         {{ burger.name }}
           <ul>
           <li>
             Kcal: {{ burger.kcal }}
           </li>
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

^/

*/



'use strict';
const socket = io();


const info = new Vue({
    el: '#main',
    data: {
        menu: food,
        
        vburgers: [],
        
        vname: '',
        vemail: '',
        // vstreet: '',
        // vhouse: '',
        vpay_op: 'Credit Card',
        vgender: 'Male',
        orders: {}, //copied
        local_order: {
          //  orderId: 'T',
            details: {x: 0, y: 0},
            orderItems: []
        },
        
        get_next: 0,
        
        clicked: false
    },

        
        methods: {
            buttonClicked: function() {
                console.log("button clicked!");
                /*
                  console.log("name: " + this.vname);
                  console.log("email: " + this.vemail);
                  console.log("street: " + this.vstreet);
                  console.log("house: " + this.vstreet);
                  console.log("pay_op: " + this.vpay_op);
                  console.log("gender: " + this.vgender);
                  console.log("burgers: " + this.vburgers);

                  console.log(this.clicked);
                */
                this.clicked = !this.clicked;
                
                
            },
            fakeSend: function() {
                alert("Order Sent!");
                location.reload(); 

                
            },
            
            getNext: function() {
                /* This function returns the next available key (order number) in
                 * the orders object, it works under the assumptions that all keys
                 * are integers. */
                this.get_next++;
                return this.get_next;
            },
            addOrder: function(event) {
                /* When you click in the map, a click event object is sent as parameter
                 * to the function designated in v-on:click (i.e. this one).
                 * The click event object contains among other things different
                 * coordinates that we need when calculating where in the map the click
                 * actually happened. */
            
                socket.emit('addOrder', {
                    orderId: this.getNext(),
                    details: this.local_order.details,
                    orderItems: this.local_order.orderItems,
                });
            },


            displayOrder:  function(event) {
                /* When you click in the map, a click event object is sent as parameter
                 * to the function designated in v-on:click (i.e. this one).
                 * The click event object contains among other things different
                 * coordinates that we need when calculating where in the map the click
                 * actually happened. */
                let offset = {
                    x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top,
                };
                this.local_order=  {
                 //   orderId: this.getNext(),
                    details: {
                        x: event.clientX - 10 - offset.x,
                        y: event.clientY - 10 - offset.y,
                    },
                    orderItems: this.vburgers,
                };

                console.log(this.local_order.details.x +"," + this.local_order.details.y );
            }
            
        }
    })
                        

