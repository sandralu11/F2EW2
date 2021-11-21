<template>
    <div class="header">
        <div>
            <ul>
                <li>
                    <img src="../assets/logo.png" alt="logo">
                    <span class="webName"> GoGoBike</span>
                </li>
                <li class="search-box">
                    <input type="text" list="datalist" placeholder="搜尋地點">
                    <datalist id="datalist" >
                        <option value="台北">台北</option>
                        <option value="新北">新北</option>
                        <option value="苗栗">苗栗</option>
                        <option value="新竹">新竹</option>
                        <option value="台中">台中</option>
                        <option value="嘉義">嘉義</option>
                        <option value="台南">台南</option>
                        <option value="高艘">高艘</option>
                        <option value="屏東">屏東</option>
                        <option value="金門">金門</option>
                    </datalist>
                </li>
            </ul>
        </div>
        <div>
            <ul class="btn-group">
                <li >
                    <router-link to="/">
                        <i class='bx bx-smile'></i>
                        <span>YouBike</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/bikeShape">
                        <i class='bx bx-git-repo-forked'></i>
                        <span>自行車路線</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/scenicSpot">
                        <i class='bx bxs-image'></i>
                        <span> 觀光景點</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/restaurant">
                        <i class='bx bx-restaurant'></i>
                        <span>餐廳</span>
                    </router-link>
                </li>
            </ul>
        </div>
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
@import '../assets/media.scss';
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include mobile{
        display: block;
    }
    
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
        @include mobile{
            display:none;
        }
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
            padding:2px;
            font-size: 14px;
        }
        li{
            margin:0 5px 5px 0 ;
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
}

</style>

