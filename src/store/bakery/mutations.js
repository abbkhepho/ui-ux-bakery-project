
export function addCakes (state, cakes) {
  // Adds all cakes in "cakes" the the state "cakes"
  for (var i = 0; i < cakes.length; i++) {

    state.cakes.push(cakes[i])
  }

}

