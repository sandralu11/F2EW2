<template>
    <div>
        <button @click="showPopup">顯示列表<i class='bx bx-show'></i></button>
        <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }">
            <div class="card">
                <ul>
                    <li>捷運美麗島站(10號出口)</li>
                    <li><i class='bx bxs-map'></i>中山一路168號前方</li>
                    <li>
                        <div class="rent-bike">
                            <span>5</span>
                            <span>可租借</span>
                        </div>
                        <div class="return-bike">
                            <span>8</span>
                            <span>可歸還</span>
                        </div>
                    </li>
                </ul>
            </div>
        </van-popup>
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

<style lang="scss" scoped>
.card{
    border: 1px #aaa solid ;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    li:first-child{
        border-left: 3px solid #FFB82E;
        line-height: 27px;
        padding-left: 15px;
    }
}
</style>