/* Vue.js way Vue.js offers v-bind:class as a way to manipulate HTML class
attribute. */

<button class="btn" :class="{ 'btn-primary': isPrimary }">...</button>
<button class="btn" :class="['btn-primary', 'btn-small']">...</button>
