<template>
    <div class="card" @click="callback(positon)">
        <ul>
            <li>{{name}}</li>
            <li>
                <span>車行方向：{{direction || "無提供"}}</span> &nbsp &nbsp
                <span>車道長度：{{length}}km</span>
            </li>
            <li>
                <span class="green">起</span> &nbsp {{start || "無提供"}}
            </li>
            <li>
                <span class="green">迄</span> &nbsp {{end || "無提供"}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        name:String,
        direction:String,
        length:Number,
        start:String,
        end:String,
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
    li{
        padding-top: 10px;
    }
    li:first-child{
        border-left: 3px solid #FFB82E;
        line-height: 27px;
        padding-left: 15px;
    }
    .green{
        color: #00A667;
    }
}
</style>