import { createApp } from 'vue';
import router from './components/router';

// Vuetify
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Components
import App from './App.vue';
import './style.css';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(router).mount('#app');
