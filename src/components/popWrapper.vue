<template>
        <div>
        <button @click="showPopup">查看<i class='bx bx-show'></i></button>
        <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }" />
    </div>
</template>

<script>

export default {
data() {
return {
    show: false,
};
},
methods: {
showPopup() {
    this.show = true;
},
},
}
</script>

<style>

</style>