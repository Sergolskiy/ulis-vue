import { createApp } from 'vue'
import moment from 'moment'
import App from './App.vue'
import lodash from 'lodash'
import {STATIC_VARIABLES} from "./staticData/staticVariables";
import vSelect from "vue-select";
import VueDatePicker from '@vuepic/vue-datepicker';

const app = createApp(App)

/**
 * Add vue select
 */
app.component("v-select", vSelect);

/**
 * Add moment.js
 */
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

app.mount('#app')

