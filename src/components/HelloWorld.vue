<template>
  <div class="hello">
    <Header />
    <h1>{{ msg }}</h1>
    <button @click="showName">点击按钮</button>
    <a v-show="isShow">我是要显示的内容</a>
    <button @click="showTabs">获取li内容</button>
    <ul>
      <li v-for="(tab,index) in tabs" :key="index">
        {{tab.text}}
      </li>
    </ul>
    <Foot />
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex';
import Foot from '@/components/Foot';
import Header from '@/components/Header';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Foot,
    Header
  },
  computed:{
    ...mapState({
      isShow:state=>state.isShow,
      tabs:state=>state.tabs
    })
  },
  methods:{
    showName(){
      this.$store.dispatch('showname',true)
    },
    showTabs(){
      this.$store.dispatch('showTabs',true);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
