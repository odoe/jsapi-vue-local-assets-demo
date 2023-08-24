import { createApp } from "vue";
import App from "./App.vue";
import esriConfig from "@arcgis/core/config";
import "./global.css";

esriConfig.assetsPath = "./assets";

createApp(App).mount("#app");
