<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    //神兽
    /*region*/
    console.log("┏┛┻━━━┛┻┓\n" +
                 "┃｜｜｜｜｜｜｜┃\n" +
                 "┃　　　━　　　┃\n" +
                 "┃　┳┛  ┗┳  ┃\n" +
                 "┃　　　┻　　　┃\n" +
                 "┗━┓　史　┏━┛　\n" +
                 "　　┃　诗　┃　　\n" +
                 "　　┃　之　┃　　\n" +
                 "　　┃　秀　┗━━┓\n" +
                 "　　┃无敌与我同在┣┓\n" +
                 "　　┃编程专用宠物┃\n" +
                 "　　┗┓┓┏━┳┓┛\n" +
                 "　　　┗┻┛　┗┻┛")
    /*endregion*/
  }
}
</script>

<style>
html,body,#app{
  height: 100%;
  width: 100%;
}
*{
  margin: 0;
  padding: 0;
}
#app {
}
</style>
