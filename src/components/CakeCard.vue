<template>
    <div id="main" class="q-ma-sm shadow-6">
        <div v-ripple:white id="img-div" class="clickable relative-position" @click="Route('asdad')">
            <q-img class="test" :ratio="1/1" :src="imageurl" alt="image"></q-img>
        </div>
        <div class="column q-pa-md">
            <div class="row justify-between items-center text-primary">
                <h6 id="title" class="clickable q-ma-none text-weight-bolder" @click="Route('asdad')">{{ title }}</h6>
                <div class="row q-gutter-x-md items-center">
                    <h6 class="q-ma-none text-weight-light">${{ price }}</h6>
                    <q-btn id="add" class="text-white q-ma-none q-ml-sm" :class="classbg" round @click="addToCart" :icon="icon"></q-btn>                
                </div>
            </div>
            <q-expansion-item switch-toggle-side class="text-info q-mt-md" label="Description">
                {{ description }}
            </q-expansion-item>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CustomCards',
    props: {
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
        addToCart() {
            if (!this.added) {
                this.added = true
                this.icon = "remove"
                this.classbg = "bg-accent"
                console.log("added to cart")
            } else {
                this.added = false
                this.icon = "add"
                this.classbg = "bg-secondary"
                console.log("removed from cart")
            }
            
        },
        Route(route) {
            this.$router.push(route)
        }
    },
    data() {
        return {
            icon: "add",
            added: false,
            classbg: "bg-secondary"
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