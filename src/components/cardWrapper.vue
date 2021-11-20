<template>
    <div class="card" @click="callback(positon)">
        <ul>
            <li>{{name}}</li>
            <li class="address"><i class='bx bxs-map'></i>{{address}}</li>
            <li class="bike-available">
                <div class="rent-bike">
                    <span>{{availableRentBikes}}</span>
                    <span>可租借</span>
                </div>
                <div class="line"></div>
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
    .address{
        padding: 10px 0;
    }
    .bike-available{
        display: flex;
        justify-content: space-between;
    }
    .rent-bike{
        color: #00A667;
        padding: 20px 40px;
    }
    .return-bike{
        color: #005A7A; 
        padding: 20px 40px;
    }
    .line{
        border-right: 1px #aaa solid;
    }
}
</style>