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
      
      <!-- 自己所在位置 -->
      <l-marker ref="location" :lat-lng="center">
        <l-popup>
          你的位置
        </l-popup>
      </l-marker>
      <!-- 創建標記點 -->
      <l-marker :lat-lng="item.local" v-for="item in data" :key="item.id">
        <!-- 標記點樣式判斷 -->
        <l-icon
          :icon-url="item.name === '夢時代購物中心'?icon.type.gold:icon.type.black"
          :shadow-url="icon.shadowUrl"
          :icon-size="icon.iconSize"
          :icon-anchor="icon.iconAnchor"
          :popup-anchor="icon.popupAnchor"
          :shadow-size="icon.shadowSize"
        />
        <!-- 彈出視窗 -->
        <l-popup>
          {{ item.name }}
        </l-popup>
      </l-marker>
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
      // 模擬資料
      data: [
        { id: 1, name: "夢時代購物中心", local: [22.595153, 120.306923] },
        { id: 2, name: "漢神百貨", local: [22.61942, 120.296386] },
        { id: 3, name: "漢神巨蛋", local: [22.669603, 120.302288] },
        { id: 4, name: "大統百貨", local: [22.630748, 120.318033] }
      ],
      
      zoom: 13,
      center: [22.612961, 120.304167],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
      options: {
        zoomControl: false
      },
      icon: {
        type: {
          black:
            "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
          gold:
            "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png"
        },
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }
    };
  },
  mounted(){
    getApi.getStation().then(res=>{
      console.log(res);
    }),
    getApi.getAvailability().then(res=>{
      console.log(res);
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
