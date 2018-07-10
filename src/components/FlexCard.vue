<template>
  <div class="cards"><!--卡片的容器-->
    <div class="card" v-for="card in restaurants"><!--卡片的具体内容-->
      <img v-lazy="card.imgUrl"><!--卡片的图片-->
      <div class="card-title">
        <a href="#" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a>
        <h2>
          {{card.bigName}}<!--卡片的大标题-->
          <small>{{card.smallName}}</small><!--卡片的小标题-->
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description"><!--卡片的具体信息-->
          {{card.content}}
        </div>
        <div class="card-flap flap2">
          <div class="card-actions"><!--卡片的下载-->
            <a href="#" class="btn" @click="downLoad(card.downLoadUrl)">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssOne",
  data(){
    return{
      restaurants:[],
    }
  },
  methods:{
    loadAll(){
      return [//用来存储每个卡片的信息
        {imgUrl:'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=2610b317bf1c8701c9b6b4e6177e9e6e/0d338744ebf81a4c596ce13adb2a6059242da6e2.jpg',bigName:'网络泵',smallName:'呼吸算法',content:'This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they\'re not available etc.',downLoadUrl:"http://192.168.100.135:3003/public/uploadfiles/fonts/icomoon.eot"},
        {imgUrl:'https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/skin/776.jpg?2',bigName:'网络泵',smallName:'血氧分析',content:'This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they\'re not available etc.',downLoadUrl:"http://192.168.100.135:3003/public/uploadfiles/fonts/icomoon.eot"},
        {imgUrl:'http://pic.58pic.com/58pic/16/06/72/87a58PICWRj_1024.jpg',bigName:'网络泵',smallName:'肌电分析',content:'This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they\'re not available etc.',downLoadUrl:"http://192.168.100.135:3003/public/uploadfiles/fonts/icomoon.eot"},
        {imgUrl:'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=f560166a52df8db1a32e7a643922dddb/0ff41bd5ad6eddc4f8daa30935dbb6fd52663306.jpg',bigName:'网络泵',smallName:'脉搏信号分析',content:'This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they\'re not available etc.',downLoadUrl:"http://192.168.100.135:3003/public/uploadfiles/fonts/icomoon.eot"},
        {imgUrl:'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=fb8af6169d2397ddc9799e046983b216/0823dd54564e92584fbb491f9082d158cdbf4eb0.jpg',bigName:'网络泵',smallName:'脉搏信号分析',content:'This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they\'re not available etc.',downLoadUrl:"http://192.168.100.135:3003/public/uploadfiles/fonts/icomoon.eot"},
        {imgUrl:'http://pic.58pic.com/58pic/16/06/72/87a58PICWRj_1024.jpg',bigName:'网络泵',smallName:'肌电分析',content:'This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they\'re not available etc.',downLoadUrl:"http://192.168.100.135:3003/public/uploadfiles/fonts/icomoon.eot"},
        {imgUrl:'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=f560166a52df8db1a32e7a643922dddb/0ff41bd5ad6eddc4f8daa30935dbb6fd52663306.jpg',bigName:'网络泵',smallName:'脉搏信号分析',content:'This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they\'re not available etc.',downLoadUrl:"http://192.168.100.135:3003/public/uploadfiles/fonts/icomoon.eot"},
        {imgUrl:'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=fb8af6169d2397ddc9799e046983b216/0823dd54564e92584fbb491f9082d158cdbf4eb0.jpg',bigName:'网络泵',smallName:'脉搏信号分析',content:'This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they\'re not available etc.',downLoadUrl:"http://192.168.100.135:3003/public/uploadfiles/fonts/icomoon.eot"},

      ]
    },
    readyList(){//内容加载或者更新后添加删除class
      $(document).ready(function(){
        var zindex = 10;
        $("div.card").click(function(e){
          e.preventDefault();
          var isShowing = false;
          if ($(this).hasClass("show")) {
            isShowing = true
          }
          if ($("div.cards").hasClass("showing")) {
            // a card is already in view
            $("div.card.show").removeClass("show")
            if (isShowing) {
              // this card was showing - reset the grid
              $("div.cards").removeClass("showing");
            } else {
              // this card isn't showing - get in with it
              $(this).css({zIndex: zindex}).addClass("show");
            }
            zindex++;
          } else {
            // no cards in view
            $("div.cards").addClass("showing");
            $(this).css({zIndex:zindex}).addClass("show");
            zindex++;
          }
        });
      });
    },
    downLoad(aUrl){//下载
      window.open(aUrl)
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  created() {
    this.readyList();
  }
}
</script>

<style scoped>
  @import url('../assets/css/flex-card.css');
</style>
