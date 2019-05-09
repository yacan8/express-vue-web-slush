<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>服务端技术栈</h3>
    <ul>
      <li><a href="http://expressjs.com/" target="_blank" rel="noopener">框架 Express</a></li>
      <li><a href="https://www.archiverjs.com/" target="_blank" rel="noopener">依赖注入 archiver</a></li>
    </ul>
    <h3>客户端技术栈</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/axios/axios" target="_blank" rel="noopener">axios</a></li>
      <li><a href="https://github.com/vuejs/vue-class-component" target="_blank" rel="noopener">vue-class-component</a></li>
      <li><a href="https://github.com/kaorun343/vue-property-decorator#readme" target="_blank" rel="noopener">vue-property-decorator</a></li>
      <li><a href="https://github.com/ktsn/vuex-class" target="_blank" rel="noopener">vuex-class</a></li>
    </ul>
  </div>
</template>

<script>

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'HelloWorld'
})
export default class HelloWorld extends Vue {
  @Prop({type: String}) msg;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
