<template>
  <div id="content">
    <h1>纯CSS响应式弹窗</h1>
    <a href="#image1" class="wiggle"><img src="./../assets/imgs/pop-up01.png"/></a>
    <div class="lightbox short-animate" id="image1">
      <img class="long-animate" src="./../assets/imgs/pop-up02.png"/>
    </div>
    <div id="lightbox-controls" class="short-animate">
      <a id="close-lightbox" class="long-animate" href="#">关闭</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
}
</script>

<style scoped>
  @import url('./../assets/css/popup.css');
</style>
