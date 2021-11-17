import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Popup } from 'vant';
import 'vant/lib/popup/style'

Vue.use(Popup);


// 載入 vue2-leaflet，依照自己需要載入組件
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from "vue2-leaflet";
// 載入 css
import "leaflet/dist/leaflet.css";
// 啟用載入的各組件
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-popup", LPopup);
Vue.component("l-icon", LIcon);

// 設定預設 icon
import { Icon } from "leaflet";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
