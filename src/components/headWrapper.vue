<template>
    <div>
        <div>
            <ul>
                <li>
                    <img src="../assets/logo.png" alt="logo">
                    <span class="webName"> GoGoBike</span>
                </li>
                <li class="search-box">
                    <input type="search" name="mySearch" id="mySearch" placeholder="搜尋地點" >
                    <i class='bx bx-search'></i>
                </li>
            </ul>
        </div>
        <div>
            <ul class="btn-group">
                <li >
                    <i class='bx bx-smile'></i>
                    <span>YouBike</span>
                </li>
                <li>
                    <i class='bx bx-git-repo-forked'></i>
                    <span>自行車路線</span>
                </li>
                <li>
                    <i class='bx bxs-image'></i>
                    <span> 觀光景點</span>
                </li>
                <li>
                    <i class='bx bx-restaurant'></i>
                    <span>餐廳</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
ul,li{
    list-style: none;
    display: inline-block;
}
img{
    vertical-align: middle; 
}
.webName{
    font-style: italic;
    font-size: 24px;
    vertical-align: middle;
}
.search-box{
    margin-left: 40px;
    background-color: #F5F7F9;
    border-radius: 500px;
    padding: 5px 30px;
    input,i{
        vertical-align: middle;
    }
    input{
        background-color: #F5F7F9; 
        border:0 none;
    }
}
.btn-group{
    li,span{
        padding:0 2px;
        font-size: 14px;
    }
    li{
        margin-right:5px ;
        padding: 8px;
        border: 1px #aaa solid;
        border-radius: 500px;
        &:hover{
            border: 1px #FFB82E solid;
            background-color:#FFB82E; 
            cursor: pointer;
        }
    }
}
</style>