<template>
    <div class="row justify-center">
        <div class="row col-8 justify-between">
            <div class="left col-7 column q-ma-sm q-mt-none">
                <h2 class="q-ma-none q-mb-md">About us</h2>
                <q-img src="..\assets\bakery.jpg"></q-img>
                <div>
                    <p class="q-mt-md">
                        Over at Bear Island Bakery we have a simple and down to earth mindset, be who you want to be, that is why we at Bear Island Bakery have chosen to remain local and loyal to our customers. We have chosen to remain unchanged and keep our pasteries locally produced while also helping other local businesses by buying their ingredients and equipment. Environment is another important core value here at Bear island bakery, treat the environment as you want to be treated, by using environment friendly transportation measures we are reducing the pressure on mother earth while staying true to ourselves. Come on by and try our environment friendly, locally produced and honest pastries.
                    </p>
                    <h4 class="q-ma-none q-mb-md">Back to our roots</h4>
                    <q-img src="..\assets\family.jpg"></q-img>
                    <p class="q-mt-md">
                        In 1923 Christopher Benjamin Swhartz had an idea, to create pastries for people. This mindset was the beginning of Bear Island Bakery. The plan was to create pastries for everyone at Bear Island and only remaining local, not expanding or sell out. It all started with Christopher, his wife Greta and their two children, Josefine and Fredrick. Together they expanded and passed down the Bear Island Bakery for generation, which is now owned by David, son of Fredrick and Josefine. The family business is almost 100 years old and has become the most famous attraction of Bear Island. We may have grown but we remain faithful to our only bakery here at Bear Island.
                    </p>
                </div>
            </div>
            <div class="right column col-4 q-ma-sm q-mt-none q-gutter-sm">
                <h2 class="q-ma-none">Our staff</h2>
                <h4 class="q-ma-sm text-primary text-weight-medium">Manager</h4>
                <div v-for="member in importedStaff" :key="member.name">
                    <staff-card v-if="member.role=='manager'"
                        :avatar="member.avatar"
                        :name="member.name"
                        :email="member.email"
                        :phone="member.phone"
                    />
                </div>
                <h4 class="q-ma-sm text-primary text-weight-medium">Baker</h4>
                <div v-for="member in importedStaff" :key="member.name">
                    <staff-card v-if="member.role=='baker'"
                        :avatar="member.avatar"
                        :name="member.name"
                        :email="member.email"
                        :phone="member.phone"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StaffCard from "../components/StaffCard.vue"

export default {
    components: {
        StaffCard
    },
    computed: {
        importedStaff() {
            return this.$store.state.bakery.staff
        }
    }
}
</script>

<style>
p {
    font-size: 18px;
}
</style>