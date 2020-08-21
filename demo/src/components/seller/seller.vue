<template>
  <div class="seller">
    <!-- 上 -->
    <div class="seller-title">
      <div class="title-name">
        <div class="name">
          <div class="name1">粥品香坊（大运村）</div>
          <div class="stars">
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
            <span
              style="font-size:10px;color:rgb(77,85,93);line-height:18px;margin-left:8px"
              >(661)</span
            >
            <div class="xiaoliang">
              月销690单
            </div>
          </div>
        </div>
        <div class="shoucang">
          <img src="../../../src/assets/hongxin.png" />
          <p style="font-size:12px;color:rgb(77,85,93);line-height:10px;">
            已收藏
          </p>
        </div>
      </div>
    </div>
    <div class="title-box">
      <div class="box">
        起送价
        <div class="box-item">
          <span
            style="font-size:20px;font-weight:100;color:rgb(7,17,27);line-height:24px;"
            >20</span
          >元
        </div>
      </div>
      <div class="box">
        商家配送
        <div class="box-item">
          <span
            style="font-size:20px;font-weight:100;color:rgb(7,17,27);line-height:24px;"
            >4</span
          >元
        </div>
      </div>
      <div class="box">
        平均配送时间
        <div class="box-item">
          <span
            style="font-size:20px;font-weight:100;color:rgb(7,17,27);line-height:24px;"
            >39</span
          >分钟
        </div>
      </div>
    </div>
    <div class="title-item"></div>
    <!-- 中 -->
    <div class="seller-center">
      <div class="center1">公告与活动</div>
      <div class="center2">
        粥品香坊其烹饪粥料的秘方源于中国千年古法，在融合现代制作工艺；由世界烹饪大师屈浩先生领衔研发。坚守纯天然，0天假的良心品质神的消费者青睐，发展至今成为粥类引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
      </div>
      <div class="center3">
        <img src="../../../src/assets/decrease_1@2x.png" />
        在线支付满28减5，满59减10
      </div>
      <div class="center3">
        <img src="../../../src/assets/discount_1@2x.png" />
        单人精彩赛
      </div>
      <div class="center3">
        <img src="../../../src/assets/discount_1@2x.png" />
        清肺雪梨汤8折抢购
      </div>
      <div class="center3">
        <img src="../../../src/assets/special_1@2x.png" />
        特价饮品八折抢购
      </div>
      <div class="center3">
        <img src="../../../src/assets/special_1@2x.png" />
        单人特色套餐
      </div>
      <div class="center3">
        <img src="../../../src/assets/invoice_1@2x.png" />
        该商家支持开发票，请在下单时填写好发票开头
      </div>
      <div class="center3">
        <img src="../../../src/assets/guarantee_1@2x.png" />
        已加"外卖宝"计划，食品安全保障
      </div>
      <div class="center4"></div>
      <div class="center1">商家实景</div>
      <div class="center5">
        <div class="center5-item">
          <img src="../../../src/assets/09.png" />
        </div>
        <div class="center5-item">
          <img src="../../../src/assets/10.png" />
        </div>
        <div class="center5-item">
          <img src="../../../src/assets/11.png" />
        </div>
      </div>
      <div class="center4"></div>
      <div class="center6">商家信息</div>
      <div class="center3">该商家支持发票,请下单写好发票抬头</div>
      <div class="center3">品类:其他菜系,包子粥店</div>
      <div class="center3">
        北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340
      </div>
      <div class="center3">营业时间:10:00-20:30</div>
      <div></div>
    </div>
    <!-- 下 -->
    <div class="seller-shop">
      <div class="shopleft">
        <div class="shoplogo">
          <img src="../../../src/assets/gouwuche.png" />
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
export default {};
</script>

<style lang="scss" scoped>
.seller {
  left: 0;
  width: 375px;
  overflow: scroll;
  .seller-title {
    height: 100px;
    width: 100%;
    .title-name {
      height: 90px;
      width: 100%;
      display: flex;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .name {
        .name1 {
          margin-top: 18px;
          font-size: 14px;
          color: rgb(7, 17, 27);
          line-height: 14px;
          margin-left: 18px;
        }
        .stars {
          display: flex;
          width: 232px;
          margin-left: 18px;
          margin-top: 8px;
          margin-bottom: 18px;
          .star {
            flex: 1;
            width: 25px;
            height: 24px;
          }
          .xiaoliang {
            font-size: 10px;
            color: rgb(77, 85, 93);
            line-height: 18px;
            margin-left: 12px;
          }
        }
      }
      .shoucang {
        width: 90px;
        margin-right: 18px;
        margin-left: 59px;
        margin-top: 18px;
      }
    }
  }
  .title-box {
    display: flex;
    height: 90px;
    width: 100%;
    .box {
      flex: 1;
      margin-top: 18px;
      margin-bottom: 18px;
      text-align: center;
      font-size: 10px;
      color: #93999f;
      border-right: 2px solid rgba(7, 17, 27, 0.1);
      .box-item {
        margin-top: 4px;
      }
    }
  }
  .title-item {
    height: 20px;
    width: 100%;
    background-color: #f3f5f7;
  }
  .seller-center {
    .center1 {
      margin-top: 18px;
      margin-bottom: 8px;
      margin-left: 4px;
    }
    .center2 {
      font-size: 12px;
      font-weight: 200;
      color: #f01414;
      line-height: 24px;
      margin-left: 12px;
      margin-right: 12px;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      padding-bottom: 16px;
    }
    .center3 {
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      padding-top: 16px;
      padding-left: 12px;
      padding-bottom: 16px;
      font-size: 12px;
      font-weight: 200;
      color: rgb(7, 17, 27);
      line-height: 16px;
    }
    .center4 {
      height: 20px;
      width: 100%;
      background-color: #f3f5f7;
    }
    .center5 {
      display: flex;
      margin-left: 18px;
      margin-bottom: 18px;
      .center5-item {
        flex: 1;
        img {
          height: 90px;
          width: 120px;
        }
      }
    }
    .center6 {
      margin-top: 18px;
      margin-bottom: 8px;
      margin-left: 4px;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }
  }
  .seller-shop {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
    display: flex;
    .shopleft {
      flex: 1;
      background-color: #141d27;
      display: flex;
      .shoplogo {
        background-color: rgba(255, 255, 255, 0.4);
        position: relative;
        top: -10px;
        margin: 0 12px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        vertical-align: top;
        border-radius: 50%;
        img {
         width: 56px;
          height: 56px;
        }
      }
      .lala {
        padding-top: 12px;
        display: inline-block;
        font-size: 16px;
        color: #919396;
        font-weight: 700;
        line-height: 24px;
      }
    }
    .shopcenter {
      /* flex: 1; */
      background-color: #141d27;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
      width: 150px;
      span {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.4);
        font-weight: 700;
        line-height: 3;
        text-align: center;
      }
    }
    .shopright {
      background-color: rgb(77, 85, 93);
      text-align: center;
      width: 105px;
      span {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.4);
        font-weight: 700;
        line-height: 4;
      }
    }
  }
}
</style>
