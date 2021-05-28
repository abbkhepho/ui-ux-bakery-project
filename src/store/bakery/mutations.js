
export function addCakes (state, cakes) {
  // Adds all cakes in "cakes" the the state "cakes"
  console.log(cakes)
  for (var i = 0; i < cakes.length; i++) {

    state.cakes.push(cakes[i])
  }

}

export function addStaff (state, staff) {
  // Adds all staff in "staff" the the state "staff"
  console.log(staff)
  for (var i = 0; i < staff.length; i++) {

    state.staff.push(staff[i])
  }

}

export function addCustomers (state, customers) {
  // Adds all customers in "customers" the the state "customers"
  console.log(customers)
  for (var i = 0; i < customers.length; i++) {

    state.customers.push(customers[i])
  }

}

export function addOrders (state, orders) {
  // Adds all orders in "orders" the the state "orders"
  console.log(orders)
  for (var i = 0; i < orders.length; i++) {

    state.orders.push(orders[i])
  }

}

export function addCurrentOrder (state, cake) {
  // Adds a cake to current order and calculates price
  var currentPrice = 0
  var cakePresent = false
  for (var i = 0; i < state.currentOrder.cakes.length; i++) {
    if (state.currentOrder.cakes[i].cakeId == cake) {
      state.currentOrder.cakes[i].quantity += 1
      cakePresent = true
    }
  }
  if (!cakePresent) {
    var newCake = {
      "cakeId": cake,
      "quantity": 1
    }
    state.currentOrder.cakes.push(newCake)
  }
  console.log(state.currentOrder)
}

