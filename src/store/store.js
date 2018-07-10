//vuex的代码模板，可以用来粘贴===>https://vuex.vuejs.org/zh/guide/state.html
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{//
    test:[
      {name:"张三",sex:"男"},
      {name:"李四",sex:"男"},
      {name:"王五",sex:"女"},
    ]
  },
  getters: {
    changeTest: (state) => {
      var changeTest = state.test.map(person=>{
        return {
          name:'1、'+'姓名：'+person.name,
          sex :'性别：'+person.sex,
        }
      });
      return changeTest;
    }
  },
  mutations:{
    changeSex: (state,payload) =>{
      state.test.forEach(person =>{
        person.sex=person.sex + payload
      })
    }
  },
  actions:{
    changeSex: (context,payload) =>{
      context.commit("changeSex",payload);
    }
  }
});
