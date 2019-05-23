<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Component, Vue } from 'vue-property-decorator';
import { get } from '../http';

@Component({
  components: {
    HelloWorld
  },
  name: 'home'
})
export default class Home extends Vue {
  msg = 'Welcome to Your Vue.js App';
  
  mounted() {
    get('/api/todo/getData').then(res => {
      if (res.success) {
        this.msg = res.data.info;
      }
    })
  }
}
</script>
