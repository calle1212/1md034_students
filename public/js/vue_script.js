'use strict';
const socket = io();

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
        orders: {},
        
        
        clicked: false
    },


  created: function() {
    /* When the page is loaded, get the current orders stored on the server.
     * (the server's code is in app.js) */
    socket.on('initialize', function(data) {
      this.orders = data.orders;
    }.bind(this));

    /* Whenever an addOrder is emitted by a client (every open map.html is
     * a client), the server responds with a currentQueue message (this is
     * defined in app.js). The message's data payload is the entire updated
     * order object. Here we define what the client should do with it.
     * Spoiler: We replace the current local order object with the new one. */
    socket.on('currentQueue', function(data) {
      this.orders = data.orders;
    }.bind(this));
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
                let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
                    return Math.max(last, next);
                }, 0);
                return lastOrder + 1;
            },
            addOrder: function(event) {
                /* When you click in the map, a click event object is sent as parameter
                 * to the function designated in v-on:click (i.e. this one).
                 * The click event object contains among other things different
                 * coordinates that we need when calculating where in the map the click
                 * actually happened. */
                let offset = {
                    x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top,
                };
                socket.emit('addOrder', {
                    orderId: this.getNext(),
                    details: {
                        x: event.clientX - 10 - offset.x,
                        y: event.clientY - 10 - offset.y,
                    },
                    orderItems: ['Beans', 'Curry'],
                });
            }
            
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
