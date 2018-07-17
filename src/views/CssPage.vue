<template>
  <el-scrollbar class="scrollbar">
    <ul>
      <li v-for="person in changeTest">
        <span>{{person.name}}</span>
        <span>{{person.sex}}</span>
      </li>
    </ul>
    <button @click="changeSex(1)">改变性别</button>
    <button @click="changeHash">改变hash</button>
  </el-scrollbar>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: "CssPge",
  computed:{
    person(){//vuex的代码模板，可以用来粘贴a
      return this.$store.state.test;
    },
    /*newPerson(){//vuex的代码模板，可以用来粘贴
      return this.$store.getters.changeTest;
    },*/
    ...mapGetters([//vuex的代码模板，可以用来粘贴
      'changeTest',
      // ...
    ])
  },
  watch:{
    $route(to,from){//监听路由变化可以做一些操作
      console.log(to.hash);
    }
  },
  components:{
  },
  methods:{
    changeHash(){
      this.$router.push('/#'+ Math.random())
    },
    // changeSex(som){//vuex的代码模板，可以用来粘贴
    //   //this.$store.commit('changeSex');
    //   this.$store.dispatch("changeSex",som);
    // },
    ...mapActions([
      'changeSex', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      //'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    /*...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })*/
  }
}
</script>

<style scoped>
.scrollbar{
  height: 100%;
  width: 100%;
}
.main{
  height: 1000px;
  width: 1000px;
}
</style>
