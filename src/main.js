/**
 * main.js
 * Vue 애플리케이션의 시작점
 * 앱 구동에 필요한 핵심 요소들을 설정하고 조립하는 역할
 *
 * Vue 앱 인스턴스 생성: createApp(App) 함수를 사용해 가장 기본이 되는 App.vue 컴포넌트를 기반으로 Vue 애플리케이션 인승턴스 생성, 이 인스턴스가 앱의 본체
 * 플러그인 등록: app.use() 메서드를 사용해 앱 전체에서 사용될 기능 추가, vue-router나 pinia 등이 여기에 해당
 * 전역요소 등록: app.component()나 app.directive() 같은 메서드를 사용해 앱의 모든 컴포넌트에서 import 없이 공통으로 사요할 컴포넌트나 디렉티브 등록
 * DOM에 마운트: app.mount('#app') 메서드를 사용해 생성하고 설정한 Vue앱 인스턴스를 실제 웹페이지의 특정 HTML요소 (index.html안에 <div id='app'>)에 연결, 이 과정이 끝나야 사용자가 화면애서 앱을 볼 수 있음
 */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "./plugins/fontawesome";

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
