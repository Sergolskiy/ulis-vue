import { createApp } from 'vue'
import moment from 'moment'
import 'moment/dist/locale/uk';
import App from './App.vue'
import lodash from 'lodash'
import {STATIC_VARIABLES} from "./staticData/staticVariables";
import vSelect from "vue-select";
import VueDatePicker from '@vuepic/vue-datepicker';
import globalMixin from "./globalMixins/globalMixin";

const app = createApp(App)

/**
 * Add vue select
 */
app.component("v-select", vSelect);

/**
 * Add moment.js
 */
moment.locale('uk');
app.config.globalProperties.$moment=moment

/**
 * Add lodash.js
 */
app.config.globalProperties.$_=lodash

/**
 * Add Vue Date Picker
 */
app.component('VueDatePicker', VueDatePicker);

/**
 * Add global static variables
 */
app.config.globalProperties.$STATIC_VARIABLES=STATIC_VARIABLES

app.mixin(globalMixin)

app.mount('#app')

