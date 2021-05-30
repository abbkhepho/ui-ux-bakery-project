
export function addCakes (state, cakes) {
  // Adds all cakes in "cakes" the the state "cakes"
  for (var i = 0; i < cakes.length; i++) {

    state.cakes.push(cakes[i])
  }

}

export function addStaff (state, staff) {
  // Adds all staff in "staff" the the state "staff"
  for (var i = 0; i < staff.length; i++) {

    state.staff.push(staff[i])
  }

}

export function addCustomers (state, customers) {
  // Adds all customers in "customers" the the state "customers"
  for (var i = 0; i < customers.length; i++) {

    state.customers.push(customers[i])
  }

}

export function addOrders (state, orders) {
  // Adds all orders in "orders" the the state "orders"
  for (var i = 0; i < orders.length; i++) {

    state.orders.push(orders[i])
  }

}

export function addCurrentOrder (state, cake) {
  // Adds a cake to current order and calculates price
  
  var cakePresent = false
  // Checks if the cake added exists in currentOrder
  for (var i = 0; i < state.currentOrder.cakes.length; i++) {
    if (state.currentOrder.cakes[i].cakeId == cake) {
      // If it does it adds one to the quantity
      state.currentOrder.cakes[i].quantity += 1
      cakePresent = true
    }
  }
  // If it doesn't it add a new dictionary with the new cake
  if (!cakePresent) {
    var newCake = {
      "cakeId": cake,
      "quantity": 1
    }
    state.currentOrder.cakes.push(newCake)
  }

  var currentPrice = 0
  // Loops trough every type of cake in currentOrder and calculates the price by checking the cakes state
  for (var i = 0; i < state.currentOrder.cakes.length; i++) {
    for (var j = 0; j < state.cakes.length; j++) {
      if (state.cakes[j].id == state.currentOrder.cakes[i].cakeId) {
        console.log(state.cakes[j].price)
        currentPrice += state.cakes[j].price * state.currentOrder.cakes[i].quantity
      }
    }
  }
  state.currentOrder.totalPrice = currentPrice
  console.log(state.currentOrder)
}

export function subtractCurrentOrder (state, cake) {
  // Removes a cake to current order and calculates price

  // Checks if the cake added exists in currentOrder
  for (var i = 0; i < state.currentOrder.cakes.length; i++) {
    if (state.currentOrder.cakes[i].cakeId == cake) {
      // If it does it removes one from quantity
      state.currentOrder.cakes[i].quantity -= 1
      // Removes cake from current oreder if quantity is 0 or less
      if (state.currentOrder.cakes[i].quantity <= 0) {
        state.currentOrder.cakes.splice(i)
      }
    }
  }

  var currentPrice = 0
  // Loops trough every type of cake in currentOrder and calculates the price by checking the cakes state
  for (var i = 0; i < state.currentOrder.cakes.length; i++) {
    for (var j = 0; j < state.cakes.length; j++) {
      if (state.cakes[j].id == state.currentOrder.cakes[i].cakeId) {
        console.log(state.cakes[j].price)
        currentPrice += state.cakes[j].price * state.currentOrder.cakes[i].quantity
      }
    }
  }
  state.currentOrder.totalPrice = currentPrice
  console.log(state.currentOrder)

}

export function removeCurrentOrder (state) {
  state.currentOrder = {"cakes": [], "totalPrice": 0,}
  console.log(state.currentOrder)
}

export function login (state, id) {
  // Looks for the customer with the correct id and changes the state currentUser to it
  for (var i = 0; i < state.customers.length; i++) {
    if (state.customers[i].id == id) {
      state.currentUser = state.customers[i]
    }
  }
}

export function logout (state) {
  state.currentUser = null
}