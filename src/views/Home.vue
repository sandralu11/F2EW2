<template>
  <div class="home">
    <PopWrapper/>
   <!-- 初始化地圖設定 -->
    <l-map
      ref="myMap"
      :zoom="zoom"
      :center="center"
      :options="options"
      style="height: 100vh;">
      <!-- 載入圖資 -->
      <l-tile-layer :url="url" :attribution="attribution" />
    
      <v-marker-cluster>
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
import PopWrapper from '../components/popWrapper.vue'
import getApi from '../lib/Authorization.js'
export default {
  name: 'Home',
  components: {
    PopWrapper,
  },
  
  data() {
    return {
      station:[],
      available:[],
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
      }
    };
  },
  methods:{
    pop(item){
      console.log(item);
    }
  },
  mounted(){
    getApi.getStation().then(res=>{
      this.station=res
    }),
    getApi.getAvailability().then(res=>{
      this.available =res
    })
    // 等地圖創建後執行
    this.$nextTick(() => {
      // 獲得目前位置
      navigator.geolocation.getCurrentPosition(position => {
        const p = position.coords;
        // 將中心點設為目前的位置
        this.center = [p.latitude, p.longitude];
        // 將目前的位置的標記點彈跳視窗打開
        this.$refs.location.mapObject.openPopup();
      });
    });
  },
}
</script>
