<template>
    <div>
        <img :src="image_url" :alt="title">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
name: 'CustomCards',
    props: {
        title: {
            type: String,
            required: true
        },
        image_url: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        price: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style>

</style>