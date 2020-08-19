<template>
  <div class="goods">

    <div class="menu-wrapper">
      <ul>
         <li v-for="item in goods" :key="item.name" class="caidan">
          <span class="text">{{item.name}}</span>
        </li> 
      </ul>
      </div>
<!-- 1 -->
      <div class="foods-wrapper">
        <div class="foods-title">
          <span>单人特色套餐</span>
        </div>

        <div class="foods-item">
          <div class="left">
             <img src="../../../src/assets/01.png"/>
          </div>
          <div class="right">
            <div class="foods-name">
              <span>皮蛋瘦肉粥配包子套餐</span>
            </div>

             <div class="foods-description">
              <span>咸粥</span>
            </div>

            <div class="foods-xiaoliang">
              <span>月售1132份</span>
              <span style="margin-left:12px;">好评率100%</span>
            </div>

            <div class="foods-jiage">
              <span>￥24</span>
              <span style="text-decoration:line-through;color:rgb(147,153,159);line-height:24px;font-size:10px;font-weight:normal;" >￥28</span>
            </div>
          </div>
        </div>
<!-- 2 -->
       <div class="foods-title">
          <p>特色粥品</p>
        </div>

        <div class="foods-item">
          <div class="left">
            <img src="../../../src/assets/02.png"/>
          </div>
          <div class="right">
            <div class="foods-name">
              <span>莲子核桃黑米粥</span>
            </div>

            <div class="foods-xiaoliang">
              <span>月售1132份</span>
              <span style="margin-left:12px;">好评率100%</span>
            </div>

            <div class="foods-jiage">
              <span>￥10</span>
            </div>
          </div>
        </div>
 <!-- 3 -->
       <div class="foods-item">
          <div class="left">
             <img src="../../../src/assets/03.png"/>
          </div>
          <div class="right">
            <div class="foods-name">
              <span>雪梨银耳百合粥</span>
            </div>
            <div class="foods-xiaoliang">
              <span class="xiaoliang">月售1132份</span>
              <span style="margin-left:12px;">好评率100%</span>
            </div>

            <div class="foods-jiage">
              <span>￥24</span>
            </div>
          </div>
        </div>
       <div class="foods-item">
          <div class="left">
             <img src="../../../src/assets/04.png"/>
          </div>
          <div class="right">
            <div class="foods-name">
              <span>南瓜粥</span>
            </div>
            <div class="foods-xiaoliang">
              <span>月售1132份</span>
              <span style="margin-left:12px;">好评率100%</span>
            </div>

            <div class="foods-jiage">
              <span>￥20</span>
            </div>
          </div>
        </div>
      </div>
      <div class="shop">
        <div class="shopleft">
          <div class="shoplogo">
            <img src="../../../src/assets/gouwuche.png"/>
          </div>
          <div class="lala">￥0</div>
        </div>
        <div class="shopcenter">
          <span>另需配送费￥4元</span>
        </div>
         <div class="shopright">
            <span>￥20元起送</span>
         </div>
      </div>
    </div>
    
</template>

<script>
import mockData from "../../mock.json";
export default {
  data() {
    return {
      goods: mockData.goods,
    };
  },
};
</script>

<style>
.goods {
  display: flex;
  position: absolute;
  width: 100%;
  top: 174px;
  bottom: 60px;
  /* 超出部分隐藏 */
  overflow: hidden;
  left:0px;
}
.menu-wrapper {
  /* 第一个参数是等分，第二个参数是根据内容的缩放情况，第三个参数是占位大小 */
  flex: 0 0 80px;
  width: 80px;
  background: #f3f5f7;
  text-align: center;
  
}
.caidan{
  width: 100%;
  height: 54px;
  border-bottom: 1px solid gainsboro;
  line-height: 14px;
  display: table;
 
}
.text{
  font-size:12px ;
  font-weight: 200;
  line-height: 14px;
  color: rgb(77, 85, 93);
  display: table-cell;
  vertical-align: middle;
}
.foods-wrapper {
  flex: 1;
}
.foods-title{
  width: 100%;;
  height: 30px;
  background: #f3f5f7;
  color: rgb(77, 85, 93);
  border-left: 3px solid gray;
  padding-left: 20px;
   line-height: 2; 
}
.foods-item{
  display: flex;
  width: 100%;
  height: 100px;
  border-bottom:1px solid  #f3f5f7 ;
  /* margin: 18px 0 18px 18px;  */

}
.left{
  width: 60px;
  height: 60px;
  margin-right: 10px;
}
.left img{
  width: 100%;
  margin-top: 18px;
  margin-left: 18px;
}
.foods-jiage span{
  color: red;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
}
.foods-name span{
  font-size: 14px;
  color: rgb(16, 27, 37);
  line-height: 14px;
}
.foods-xiaoliang span{
  font-size: 10px;
  color: rgb(147, 153, 159);
  line-height: 10px;
}
.foods-description span{
  font-size: 10px;
  color: rgb(147, 153, 159);
  line-height: 10px;
}
.right{
  height: 60px;
  margin-top: 18px;
  margin-left: 20px;
}
.shop{
  position: fixed;
  left: 0;
  bottom: 0;
  z-index:50;
  width: 100%;
  height: 48px;
  display: flex;
}
.shopleft{
  flex:1;
  background-color: #141d27 ;
  
}
.shoplogo{
background-color:rgb(255, 255, 255,0.4);
  position: relative;
  top: -10px;
  margin: 0 12px;
  padding: 6px;
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  vertical-align: top;
  border-radius: 50%;
}
.shoplogo img{
  margin-top: 6px;
  margin-left: 5px;
}
.lala{
  display: inline-block;
  font-size: 16px;
  color: rgb(255, 255, 255,0.4);
  font-weight: 700;
  line-height: 24px;
}
.shopcenter{
  /* flex: 1; */
   background-color: #141d27;
   border-left:1px solid rgb(255, 255, 255,0.1) ;
   width: 150px;
}
.shopcenter span{
  font-size: 16px;
  color: rgb(255, 255, 255,0.4);
  font-weight: 700;
  line-height: 3;
  text-align: center;
}
.shopright{
   background-color:rgb(77, 85, 93);
   text-align: center;
   width: 105px;
}
.shopright span{
  font-size: 12px;
  color: rgb(255, 255, 255,0.4);
  font-weight: 700;
  line-height: 4;
}
</style>
