<template>
    <div class="card" @click="callback(positon)">
        <ul>
            <li class="title">
                <span>{{name}}</span>
                <a :href="'tel:'+phone" class='phone'><i class='bx bxs-phone-call'></i></a>
            </li>
            <img :src="img" alt="trawelimg">
            <li><i class='bx bxs-time' ></i>{{time}}</li>
            <li class="address">
                <i class='bx bxs-map'></i>
                <span class="location">{{ address || city || "詳見官網"}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        show:Boolean,
        name:String,
        address:String,
        city:String,
        phone:String,
        time:{
            type:String,
            default:"詳見官網",
        },
        img:String,
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
    .title{
        display: flex;
        justify-content: space-between;
        .phone{
            color: #41CD8A;
        }
    }
    li:first-child{
        border-left: 3px solid #FFB82E;
        line-height: 27px;
        padding-left: 15px;
    }
    img{
        width: 100%;
        border-radius: 20px;
        margin: 10px 0;
    }
    
}
</style>