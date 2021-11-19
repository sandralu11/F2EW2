<template>
    <div class="card" @click="callback(positon)">
        <ul>
            <li>{{name}}</li>
            <li><i class='bx bxs-map'></i>{{address}}</li>
            <li>
                <div class="rent-bike">
                    <span>{{availableRentBikes}}</span>
                    <span>可租借</span>
                </div>
                <div class="return-bike">
                    <span>{{availableReturnBikes}}</span>
                    <span>可歸還</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        show:Boolean,
        availableRentBikes:Number,
        availableReturnBikes:Number,
        name:String,
        address:String,
        uid:String,
        positon:Array,
        callback:Function,
    }
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