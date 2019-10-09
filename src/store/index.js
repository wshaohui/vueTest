
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
 const state={//要设置的全局访问的state对象
     showFooter: true,
     changableNum:0,
     isShow:false,
     tabs: []
     //要设置的初始属性值
   };
   const getters={
    renderIsShow:state=>state.isShow,
    renderTabs:state=>state.tabs
  };
   const mutations = {
       isShowfuc(state,items){
           state.isShow = items;
       },
       showTabsFuc(state){
           state.tabs = [
            { text: '巴士' },
            { text: '快车' },
            { text: '专车' },
            { text: '顺风车' },
            { text: '出租车' },
            { text: '代驾' }
        ]
       }
   }
   const actions = {
        showname({commit},items){
            commit('isShowfuc',items)
       },
       showTabs({commit}){
           commit('showTabsFuc');
       }
   }
 const store = new Vuex.Store({
       state,
       mutations,
       actions,
       getters
    });

export default store;