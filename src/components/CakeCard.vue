<template>
    <div id="main" class="q-ma-sm shadow-4">
        <div id="img-div" class="relative-position">
            <q-img class="test" :ratio="1/1" :src="imageurl" alt="image"></q-img>
        </div>
        <div class="column q-pa-md">
            <div class="row justify-between text-primary">
                <div>
                    <h6 id="title" class="q-ma-none text-weight-bolder">{{ title }}</h6>
                    <h6 class="q-ma-none text-weight-light">${{ price }}</h6>
                </div>
                <div class="column items-center">
                    <q-btn flat class="bg-secondary text-white" icon="arrow_drop_up" size="xs" @click="addItem"></q-btn>
                    <h6 class="q-ma-none text-weight-light text-accent">{{ quantity }}</h6>
                    <q-btn flat class="bg-secondary text-white" icon="arrow_drop_down" size="xs" @click="subtractItem"></q-btn>
                </div>
            </div>
            <q-expansion-item switch-toggle-side class="text-info q-mt-sm" label="Description">
                {{ description }}
            </q-expansion-item>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CustomCards',
    props: {
        id: {
            type: Number,
            default: '',
            required: true
        },
        title: {
            type: String,
            default: 'Clementine Cake',
            required: true
        },
        imageurl: {
            type: String,
            default: "https://cdn.discordapp.com/emojis/792839288093933608.png?v=1"
        },
        description: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.'
        },
        price: {
            type: Number,
            default: ''
        }
    },
    methods: {
        Route(route) {
            this.$router.push(route)
        },
        addItem() {
            this.$store.commit("bakery/addCurrentOrder", this.id)
        },
        subtractItem() {
            this.$store.commit("bakery/removeCurrentOrder", this.id)
        },
    },
    data() {
        return {
            
        }
    },
    computed: {
        quantity() {
            console.log(this.$store.state.bakery.currentOrder.totalPrice)

            if(this.$store.state.bakery.currentOrder.cakes.length != 0) {
                for(var cake = 0; cake < this.$store.state.bakery.currentOrder.cakes.length; cake++) {
                    if(this.$store.state.bakery.currentOrder.cakes[cake].cakeId == this.id) {
                        return this.$store.state.bakery.currentOrder.cakes[cake].quantity
                    }
                }
            }

            return 0
        }
    }
}
</script>

<style>
q-img {
    width: auto;
    height: 100%;
}

q-expansion-item {
    height: 10px;
}

#main {
    border-radius: 7px;
    width: 285px;
}

#description {
    font-size: 100%;
    height: 100%;
}

#img-div {
    width: 285px;
    height: 285px;
}

.test {
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
}

.clickable {
    cursor: pointer;
}
</style>