<template>
  <div>
    <div class="todo-operation">
      <input v-model="inputName"/>
      <button @click="addTodo">添加</button>
    </div>
    <div v-show="loading">加载中...</div>
    <ul class="todo-list-wrapper">
      <li @click="toggleState(item)" :key="item.name" v-for="item in filterTodolist">
        <a :class="{'delete-line': item.state == 1}">{{item.name}}</a>
      </li>
    </ul>
    <div class="todo-filter">
      <a @click="filterState(s.value)" :class="{'active': state == s.value}" :key="s.value" v-for="s in states">{{s.label}}</a>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { get, post } from '@/http';
import { State, Action } from 'vuex-class';

const STATE = {
  '-1': '全部',
  0: '待办',
  1: '已完成'
}

const handleError = e => {
  console.error(e);
  alert('客户端错误');
}

@Component
export default class Todolist extends Vue {
  inputName = '';

  loading = true;

  STATE_MAP = {
    '-1': '全部',
    0: '待办',
    1: '已完成'
  }
  state = -1;

  @State todolist;

  @Action fetchTodolist;
  @Action addTodoItem;
  @Action doToggleState;
  
  mounted() {
    this.fetchData();
  }

  get filterTodolist() {
    return this.todolist.filter(item => {
      if (this.state == -1) {
        return true;
      }
      return item.state == this.state;
    })
  }

  get states() {
    return Object.keys(this.STATE_MAP).map(key => {
      return {
        value: key,
        label: this.STATE_MAP[key]
      }
    })
  }

  fetchData() {
    this.loading = true;
    this.fetchTodolist().then(res => {
      if (!res.success) {
        alert(res.message);
      }
    }).catch(e => handleError(e)).finally(() => {
      this.loading = false;
    });
  }

  addTodo() {
    const { inputName } = this;
    if (!inputName) {
      return;
    }
    this.loading = true;
    this.addTodoItem({name: inputName, state: 0}).then(res => {
      if (!res.success) {
        alert(res.message);
      }
    }).catch(e => handleError(e)).finally(() => {
      this.loading = false;
    });
  }

  toggleState(item) {
    this.loading = true;
    this.doToggleState(item).then(res => {
      if (!res.success) {
        alert(res.message);
      }
    }).catch(e => handleError(e)).finally(() => {
      this.loading = false;
    });
  }

  filterState(state) {
    this.state = state;
  }
}
</script>

<style lang="scss">
.todo-list-wrapper {
  width: 400px;
  margin: 20px auto;
  text-align: left;
  padding: 20px 30px;
  border: 1px solid #ddd;
  li {
    .delete-line {
      text-decoration: line-through;
    }
  }
}

.todo-filter {
  a {
    margin: 0 10px;
    cursor: pointer;
    text-decoration: underline;
    color: #999;
    &.active {
      color: #222;
    }
  }
}
</style>
