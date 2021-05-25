<template>
    <div class="main column">
        <div class="left row q-gutter-md">
            <div class="avatar">
                <q-img class="avatar-image" :src="avatar" :ratio="1/1"></q-img>
            </div>
            <div class="right column">
                <div class="top col-4 text-secondary">
                    <h5 class="q-ma-none">{{ name }}</h5>
                </div>
                <div class="bottom col-8">
                    <p class="q-ma-none">{{ email }}</p>
                    <p class="q-ma-none">{{ phone }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CustomCards',
    props: {
        avatar: {
            type: String,
            default: "https://cdn.discordapp.com/emojis/792839288093933608.png?v=1",
            required: true
        },
        name: {
            type: String,
            default: "Gay McGee",
            required: true
        },
        email: {
            type: String,
            default: "gay.mcgee@gmail.com",
            required: true
        },
        phone: {
            type: Number,
            default: "072 769-0420",
            required: true
        },
        role: {
            type: String,
            default: "Staff",
            required: true
        }
    }
}
</script>

<style>
.avatar {
    width: 75px;
    height: 75px;
}

.avatar-image {
    border-radius: 50%;
}
</style>