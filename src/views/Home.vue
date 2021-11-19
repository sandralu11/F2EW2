<template>
  <div class="home">
    <button @click="show=!show"  :class="{active:show}"><i class='bx bxs-hide' v-if="show"></i><i class='bx bx-show' v-else></i>{{show?'關閉':'顯示'}}列表</button>
    <van-popup v-model="show" round position="bottom" :style="{ height: '75%'}" :overlay="false">
      <CardWrapper v-for="item in station" :key="item.StationUID"
        :availableReturnBikes="item.AvailableReturnBikes"
        :availableRentBikes="item.AvailableRentBikes"
        :name="item.StationName.Zh_tw"
        :address="item.StationAddress.Zh_tw"
        :uid="item.StationUID"
        :positon="[item.StationPosition.PositionLat,item.StationPosition.PositionLon]"
        :callback="clickitem"
      />
    </van-popup>
    <!-- 初始化地圖設定 -->
    <l-map
      ref="myMap"
      :zoom="zoom"
      :center="center"
      :options="options"
      style="height:calc(100vh - 86px)">
      <!-- 載入圖資 -->
      <l-tile-layer :url="url" :attribution="attribution" />    
      <v-marker-cluster :options="{disableClusteringAtZoom:15}" >
        <!-- 創建標記點 -->
        <l-marker :lat-lng="[item.StationPosition.PositionLat, item.StationPosition.PositionLon]" v-for="item in station" :key="item.StationUID"
          @click="pop(item)"
        >
          <!-- 標記點樣式判斷 -->
          <l-icon
            :icon-url="icon.type.bike"
            :icon-size="icon.iconSize"
            :icon-anchor="icon.iconAnchor"
          />
        </l-marker>
      </v-marker-cluster>
      
    </l-map>
  </div>
</template>

<script>
import CardWrapper from '../components/cardWrapper.vue'
import getApi from '../lib/Authorization.js'
export default {
  name: 'Home',
  components: {
    CardWrapper,
  },
  
  data() {
    return {
      station:[],
      zoom: 13,
      center: [25.043615, 121.522522],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
      options: {
        zoomControl: false
      },
      icon: {
        type: {
          bike:
            "img/youbike.png",
        },    
        iconSize: [60, 65],
        iconAnchor: [30, 65],
      },
      show:false,
    };
  },
  methods:{
    pop(item){
      console.log(item);
    },
    clickitem(positon){
      console.log(positon);
      this.show=false;
      this.$refs.myMap.mapObject.flyTo(positon,18)
    }
  },
  mounted(){
    Promise.all([getApi.getStation(),getApi.getAvailability()]).then(res=>{
      let station=res[0]
      let available=res[1]
      let result = station.map(item=>{
        let availableItem = available.find(obj => obj.StationUID === item.StationUID)
        let obj = { ...item }
        obj.AvailableReturnBikes = availableItem.AvailableReturnBikes
        obj.AvailableRentBikes = availableItem.AvailableRentBikes
        return obj
      })
      this.station = result
    })
    // 等地圖創建後執行
    this.$nextTick(() => {
      // 獲得目前位置
      navigator.geolocation.getCurrentPosition(position => {
        const p = position.coords;
        // 將中心點設為目前的位置
        this.center = [p.latitude, p.longitude];
      });
    });
  },
}
</script>
<style lang="scss" scoped>
.home{
  position: relative;
    button{
      position: absolute;
      z-index: 1000;
      bottom: 15px;
      left: 50%;
      transform: translate(-50%,-50%);
      margin: auto;
      background: #FFFFFF;
      border: 1px solid rgba(8, 27, 44, 0.12);
      box-sizing: border-box;
      box-shadow: 0px 3px 8px rgba(20, 37, 80, 0.12);
      border-radius: 12px;
      padding: 12px;
  }
  .active{
    bottom: 85%;
  }
}

</style>