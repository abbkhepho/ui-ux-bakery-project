<template>
    <div class="row justify-center">
        <div class="row col-8 justify-between">
            <div class="row col-7 q-ma-sm q-mt-none q-gutter-sm">
                <div>
                    <h2 class="q-ma-none">About us</h2>
                </div>
                <div>
                    <p>
                        Over at Bear island bakery we have a simple and down to earth mindset, be who you want to be, that’s why we at Bear island bakery have chosen to remain local and loyal to our customers. We have chosen to remain unchanged and keep our pasteries locally produced while also helping other local businesses by buying their ingredients and equipment. Envoirment is another important core value hear at Bear island bakery, treat as you want to be treated, by using envoirment friendly transportation measures we are reducing the pressure on mother earth while staying true to ourselves. Come on by and try our envoirment friendly, locally produced and honest pastries.
                    </p>
                </div>
            </div>
            <div class="column col-4 q-ma-sm q-mt-none q-gutter-sm">
                <h2 class="q-ma-none">Our staff</h2>
                <h4 class="q-ma-sm text-primary text-weight-medium">Manager</h4>
                    <staff-card/>
                <h4 class="q-ma-sm text-primary text-weight-medium">Baker</h4>
                    <staff-card/>
            </div>
        </div>
    </div>
</template>

<script>
import StaffCard from "../components/StaffCard.vue"

export default {
    components: {
        StaffCard
    }
}
</script>

<style>
p {
    font-size: 18px;
}
</style>