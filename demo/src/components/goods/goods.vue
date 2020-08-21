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

        <div class="foods-item" @click="showFood">
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
      <!-- food页 -->
      <div class="food" v-show="foodShow">
        <div class="food-item1">
          <img src="../../../src/assets/12.png" />
        </div>
        <div class="food-item2">
          <div class="item2-1">
            皮蛋瘦肉粥
          </div>
          <div class="item2-2">
            <div class="xiaoliang">月售1132份</div>
            <div class="haoping">好评率100%</div>
          </div>
          <div class="item2-3">
            <div class="newjiage">￥24</div>
            <div class="oldjiage">￥28</div>
            <div class="gouwuche">加入购物车</div>
          </div>

        </div>
        <div class="food-item3">
          <div class="item3-4"></div>
          <div class="jieshao">商品介绍</div>
          <div class="xiangxi">一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足。</div>
          <div class="item3-4"></div>
        </div>


         <div class="food-item4">
      <div class="content-item">商品评价</div>
      <div class="manyi">
        <div class="manyi1" style="background-color: #00a0dc;">全部57</div>
        <div class="manyi1" style="background-color: #ccecf8;">推荐47</div>
        <div class="manyi1" style="background-color: #e9ebec;">吐槽10</div>
      </div>
       <div class="neirong">
          <img src="../../assets/duihao.png" />
        <span>只看有内容的评价</span>
      </div>
      <div class="pingjia">
        <div class="pingjia-item1">
          <div class="time2">
            2016-07-07
          </div>
          <div class="songda">
              14:59
          </div>
          <div class="id">
              3**********2
          </div>
        </div>
        <div class="pingjia-item2">
          <div class="dianzan">
           <img src="../../../src/assets/chaping.png"/>
          </div>
          <div class="userpingjia">
            太少了，不够一个人吃！！
          </div>

        </div>
      </div>
      <div class="pingjia">
        <div class="pingjia-item1">
          <div class="time2">
            2016-07-07
          </div>
          <div class="songda">
              10:20
          </div>
          <div class="id">
              3**********4
          </div>
        </div>
        <div class="pingjia-item2">
          <div class="dianzan">
           <img src="../../../src/assets/dianzan.png"/>
          </div>
          <div class="userpingjia">
            味道不错，就是有点咸，有待进一步优化
          </div>

        </div>
      </div>
      <div class="pingjia">
        <div class="pingjia-item1">
          <div class="time2">
            2016-07-07
          </div>
          <div class="songda">
              12:35
          </div>
          <div class="id">
              3**********5
          </div>
        </div>
        <div class="pingjia-item2">
          <div class="dianzan">
           <img src="../../../src/assets/dianzan.png"/>
          </div>
          <div class="userpingjia">
            GOOD
          </div>

        </div>
      </div>
    </div>
  

  <div class="food-gouwu">
      <div class="gouwuleft">
          <div class="gouwulogo">
            <img src="../../../src/assets/gouwuche.png"/>
          </div>
          <div class="lala">￥0</div>
        </div>
        <div class="gouwucenter">
          <span>另需配送费￥4元</span>
        </div>
         <div class="gouwuright">
            <span>￥20元起送</span>
         </div>
     </div>  

        <!-- 将food页隐藏 -->
        <div class="food-close" @click="hideFood">
        <div class="icon-close"><img src="../../../src/assets/06.png" /> </div>
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
      foodShow: false,
    };
  },
   methods: {
    // 当点击时，详情页显示
    showFood() {
      this.foodShow = true;
    },
    hideFood() {
      this.foodShow = false;
    },
  
  },
 
};
</script>

<style>
.goods {
  display: flex;
  position: absolute;
  width: 100%;
  top: 220px;
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
.food{
  z-index:100;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: white;
  top: 0;
  left: 0;
}
.food-item1 img{
  width: 100%;
  height: 375px;
}
.food-item2{
  width: 100%;
  height: 108px;
  margin-left: 18px;
}
.item2-1{
  /* height: 20px; */
  font-size: 14px;
  font-weight: 700;
  color: #07111b;
  line-height: 14px;
}
.item2-2{
  display: flex;
}
.xiaoliang{
  font-size: 10px;
  color: #93999f;
  line-height: 10px;
  margin-top: 8px;
}
.haoping{
  font-size: 10px;
  color: #93999f;
  line-height: 20px;
  text-decoration: line-through;
  margin-left: 12px;
  margin-top: 8px;
}
.item2-3{
  display: flex;
}
.newjiage{
  font-size: 14px;
  font-weight: 700;
  color: red;
  line-height: 24px;
  margin-top: 18px;
}
.oldjiage{
   font-size: 10px;
  font-weight: 700;
  color: #93999f;
  line-height: 24px;
  text-decoration: line-through;
  margin-left: 14px;
  margin-top: 18px;
}
.gouwuche{
  width: 74px;
  height: 24px;
  background-color: #00a0dc;
  border-radius: 24px;
  margin-left: 195px;
  margin-top: 20px;
}
.item3-4{
  height: 16px;
  background-color:#f3f5f7;
  border-bottom: 1px solid #e6e7e8;
  border-top: 1px solid #e6e7e8;
  margin-top: 18px;
}
.jieshao{
  color: #464a4f;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  margin-top: 36px;
  margin-left: 18px;

}
.xiangxi{
   font-size: 12px;
  font-weight: 200;
  color: #979a9e;
  line-height: 24px;
  margin-top: 6px;
   margin-left: 20px;
   margin-bottom: 18px;

}
.content-item{
  color: #464a4f;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  margin-top: 18px;
  margin-left: 18px;
}
.manyi{
  display: flex;
  width: 60%;
  margin-bottom: 18px;
  margin-top: 18px;
  margin-left: 16px;
  height: 34px;
  text-align: center;
  line-height: 35px;
}
.manyi1{
  flex: 1;
  margin-right: 10px;
 
}
.neirong{
  width: 100%;
  height: 49px;
  margin-left: 18px; 
  padding-top: 18px;
  color: #93999f;
  border-top: 1px solid #e6e7e8;
  
}
.neirong img{
  width: 20px;
  height: 20px;
}
.neirong span{
  font-size: 16px;
  padding-left: 10px;
}
.pingjia{
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #e6e7e8;
  border-top: 1px solid #e6e7e8;
 
}
.pingjia-item1{
  display:flex;
  width: 100%;
  height: 25px;
  margin-left: 18px;
  padding-top: 18px;

}
.time2{
  width: 20%;
  font-size: 10px;
 color: #93999f;
 line-height: 12px;
 
}
.songda{
  height: 20px;
 font-size: 10px;
 font-weight: 200;
 color: #93999f;
 line-height: 12px;
 
}
.id{
  height: 20px;
  font-size: 10px;
  font-weight: 200;
  color: #93999f;
  line-height: 12px;
  margin-left: 170px;
}

.pingjia-item2{
  margin-left: 18px;
}
.pingjia-item3{
  display: flex;
  margin-top: 8px;
  margin-bottom: 18px;
}
.pingjia-item2{
  display: flex;
}
.userpingjia{
  margin-left: 4px;
  font-size: 12px;
  color: #07111b;
  line-height: 16px;
}
.food-gouwu{
  position: fixed;
  left: 0;
  bottom: 0;
  z-index:50;
  width: 100%;
  height: 48px;
  display: flex;
}
.gouwuleft{
  /* flex:1; */
  background-color: #141d27 ;
  width: 30%;
  
}
.gouwulogo{
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
.gouwulogo img{
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
.gouwucenter{
  /* flex: 1; */
   background-color: #141d27;
   border-left:1px solid rgb(255, 255, 255,0.1) ;
   width: 150px;
}
.gouwucenter span{
  font-size: 16px;
  color: rgb(255, 255, 255,0.4);
  font-weight: 700;
  line-height: 3;
  text-align: center;
}
.gouwuright{
   background-color:rgb(77, 85, 93);
   text-align: center;
   width: 105px;
}
.gouwuright span{
  font-size: 12px;
  color: rgb(255, 255, 255,0.4);
  font-weight: 700;
  line-height: 4;
}
.food-close {
  height: 52px;
}
.icon-close{
  width: max-content;
  margin: auto;
  position: fixed;
  bottom: 80px;
  left: 90%;

}
</style>
