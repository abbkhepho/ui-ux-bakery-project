<template>
    <div class="main column justify-center">
        <div class="left row q-gutter-md">
            <div class="avatar">
                <q-img class="avatar-image" :src="avatar" :ratio="1/1"></q-img>
            </div>
            <div class="right column justify-center">
                <div class="top col-4 text-primary">
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
            type: String,
            default: "072 769-0420",
            required: true
        },
        role: {
            type: String,
            default: "Staff"
        }
    }
}
</script>

<style>
.avatar {
    width: 82px;
    height: 82px;
}

.avatar-image {
    border-radius: 50%;
}
</style>