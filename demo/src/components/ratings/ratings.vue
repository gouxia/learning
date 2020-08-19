<template>
  <div class="ratings">
    <!-- 上 -->
    <div class="ratings-title">
      <div class="pingfen">
        <div class="pingfen1">3.9</div>
        <div class="pingfen2">综合评分</div>
        <div class="pingfen3">高于周边商家69.2%</div>
      </div>
      <div class="fuwu">
        <div class="fuwu1">
           <span>服务态度</span>
            <div class="star">
              <img src="../../../src/assets/star24_on@2x.png" />
            </div>
            <div class="star">
              <img src="../../../src/assets/star24_on@2x.png" />
            </div>
            <div class="star">
              <img src="../../../src/assets/star24_on@2x.png" />
            </div>
            <div class="star">
              <img src="../../../src/assets/star24_on@2x.png" />
            </div>
            <div class="star">
              <img src="../../../src/assets/star24_off@2x.png" />
            </div>
            <span>4.0</span>
        </div>
        <div class="fuwu1">
          <span>服务态度</span>
          <div class="star">
              <img src="../../../src/assets/star24_on@2x.png" />
            </div>
            <div class="star">
              <img src="../../../src/assets/star24_on@2x.png" />
            </div>
            <div class="star">
              <img src="../../../src/assets/star24_on@2x.png" />
            </div>
            <div class="star">
              <img src="../../../src/assets/star24_on@2x.png" />
            </div>
            <div class="star">
              <img src="../../../src/assets/star24_off@2x.png" />
            </div>
           <span>3.9</span>
        </div>
        <div class="fuwu1">送达时间
         <div class="time">44分钟</div>
        </div>
        
      </div>
    </div>
    <!-- 中 -->
    <div class="ratings-content">
      <div class="content-item"></div>
    </div>
    <!-- 下 -->
    <div class="ratings-shop"></div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.ratings-title{
  display: flex;
  width: 100%;
  height: 100px;
  margin-top: 18px;
}
.pingfen{
  width: 137px;
  height: 100%;
  text-align: center;
   border-right:1px solid rgba(78, 76, 76, 0.1);
}

.pingfen1{
  font-size: 24px;
  color: rgb(255, 153, 0);
  line-height: 28px;
  padding-bottom: 6px;
}
.pingfen2{
  font-size: 10px;
  color: rgb(7, 17, 27);
  line-height: 10px;
  padding-bottom: 8px;
}
.pingfen3{
  font-size: 12px;
  color: rgb(72, 103, 134, 0.9);
  line-height: 12px;
}
.fuwu{
  width: 237px;
  height: 100%;
  margin-left: 24px;
  margin-right: 24px;
}
.fuwu1{
  height: 25px;
  width: 80%;
  margin-bottom: 8px;
  display: flex;
  
}
.fuwu1 span{
  padding-right: 6px;
}
.star {
  flex: 1;
  width: 20px;
  height: 24px;
}
.time{
  margin-left:12px ;

}
.content-item{
  widows: 100%;
  height: 20px;
  background-color: grey;
}
</style>