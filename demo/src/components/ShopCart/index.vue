<template>
  <div class="ratings-gouwu">
    <div class="gouwuleft">
      <div class="gouwulogo">
        <img src="../../assets/gouwuche.png" />
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
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.ratings-gouwu {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;
  display: flex;
  .gouwuleft {
    /* flex:1; */
    background-color: #141d27;
    width: 30%;
    display: flex;
    .gouwulogo {
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
  .gouwucenter {
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
  .gouwuright {
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
</style>
