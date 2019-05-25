<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Todolist />
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Component, Vue } from 'vue-property-decorator';
import { get } from '../http';
import Todolist from './todolist';

@Component({
  components: {
    HelloWorld,
    Todolist
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
