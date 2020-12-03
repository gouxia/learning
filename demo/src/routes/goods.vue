<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuwrapper">
      <ul class="caidan">
        <!-- :class="{'current':currentIndex===$index}"   表示当我们在遍历右侧食品区的时候，
        索引值等于左侧菜单项的索引值时，左侧菜单项的当前索引值项显示为高亮状态 -->
        <li
          v-for="(item, index) in goods"
          :key="item.name"
          :class="['caidan1', { 'caidan1-current': currentIndex === index }]"
          @click="selectMenu(index)"
        >
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodswrapper">
      <div>
        <div
          v-for="goodItem in goods"
          :key="goodItem.name"
          class="foods-list foods-list-hook"
        >
          <div class="foods-title">
            <span>{{ goodItem.name }}</span>
          </div>
          <div
            class="foods-item"
            v-for="foodItem in goodItem.foods"
            :key="foodItem.name"
          >
          <GoodItem :foodItem="foodItem"></GoodItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
//import store from "../store";
import mockData from "../mock.json";
import GoodItem  from "../components/GoodItem";
//import ShopCart from "../components/ShopCart"
export default {
  components: {
    GoodItem,
    //ShopCart
    
  },
  data() {
    return {
      goods: mockData.goods,
      //每个数组的高度：每个菜单项是一个数组，
      listHight: [],
      //定义一个变量用来记录y轴的高度变化
      scrollY: 0,
      index: "",
      // currentIndex: 0
    };
  },
  //计算属性
  computed: {
    //表示左侧菜单项当前的索引值，就是当前处于哪个食物分类
    currentIndex() {
      //i代表索引值，也就是菜单项的其中一项
      for (let i = 0; i < this.listHight.length; i++) {
        //当前索引值的高度
        let height1 = this.listHight[i];
        //下一个索引值的高度
        let height2 = this.listHight[i + 1];
        //判断当前scrollY在哪个菜单项区间,如果遍历到菜单项的最后一项，也就是数组的最后一个索引i，返回的为i+1，这样是不对的，所以要加个与的判断
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      //如果什么都没有返回0
      return 0;
    },
  },
  
  methods: {
    //步骤一：
    //计算每个菜单项所含菜品的高度，方便左侧菜单项和右侧食物区发生联动的效果
    _calculateHeight() {
      let foodsList = this.$refs.foodswrapper.getElementsByClassName(
        "foods-list-hook"
      );
      let height = 0;
      //把当前的位置高度push进data中刚刚定义的listHight: []数组里去
      this.listHight.push(height);
      for (let i = 0; i < foodsList.length; i++) {
        let item = foodsList[i];
        height += item.clientHeight;
        this.listHight.push(height);
      }
    },
    //better-scroll的方法
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuwrapper, {
        //作用：better-scroll 默认会阻止浏览器的原生 click 事件。
        //当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true。
        click: true,
        //probeType: 3, // listening scroll hook
      });
      this.foodsScroll = new BScroll(this.$refs.foodswrapper, {
        click: true,
        //这个属性的用处是希望在滚动时能实时的检测滚动的位置
        probeType: 3,
      });
      //为foodsScroll 添加监听事件on
      this.foodsScroll.on("scroll", (pos) => {
        //pos.y滚动时是一个负值，利用Math.abs将其转换为正值
        //这样在滚动时就能实时的知道y轴滚动的高度
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    //当点击时，进入食品的详情页
    // toCheckDetail(goodDetail) {
    //   //saveGoodDetail，提交修改的食品详情信息
    //   store.commit("saveGoodDetail", {
    //     goodDetail,
    //   });
    //   this.$router.push({
    //     path: "/goodDetail",
    //   });
    // },
    selectMenu(index) {
      let foodsList = this.$refs.foodswrapper.getElementsByClassName(
        "foods-list-hook"
      );
      let el = foodsList[index];
      this.foodsScroll.scrollToElement(el, 300);
    },
  },
  mounted() {
    //设置滑动的反应时间
    setTimeout(() => {
      //调用滑动
      this._initScroll();
      //调用计算的高度，每个菜单项所含菜品的高度
      this._calculateHeight();
    }, 50);
  },
};
</script>

<style lang="scss" scoped>
.goods {
  display: flex;
  position: absolute;
  width: 100%;
  top: 180px;
  bottom: 50px;
  /* 超出部分隐藏 */
  overflow: hidden;
  left: 0px;
  .menu-wrapper {
    /* 第一个参数是等分，第二个参数是根据内容的缩放情况，第三个参数是占位大小 */
    // flex: 0 0 90px;
    width: 80px;
    //height: 200PX;
    //overflow: hidden;
    background:#f3f6f6;
   
    text-align: center;
    .caidan {
      .caidan1 {
        height: 56px;
        width: 80px;
        border-bottom: 1px solid gainsboro;
        line-height: 14px;
        display: table;
        &-current {
          //position: relative;
          margin-top: -1px;
          background: #ffffff;
          font-weight: bold;
          //z-index: 10;
        }
        span {
          font-size: 12px;
          font-weight: 200;
          line-height: 14px;
          color: rgb(77, 85, 93);
          display: table-cell;
          vertical-align: middle;
          padding-left: 12px;
          //border-none();
        }
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    //overflow: scroll;
    .foods-title {
      height: 30px;
      background: #f3f5f7;
      color: rgb(77, 85, 93);
      border-left: 3px solid gray;
      padding-left: 20px;
      line-height: 2;
    }
    .foods-item {
      display: flex;
      width: 97%;
      height: 100px;
      border-bottom: 1px solid #f3f5f7;
      padding-right: 10px;
      box-sizing: border-box;
      .left {
        width: 60px;
        height: 60px;
        margin-right: 10px;
        img {
          width: 100%;
          margin-top: 18px;
          margin-left: 18px;
        }
      }
      .right {
        height: 60px;
        width: 210px;
        margin-top: 18px;
        margin-left: 20px;
        .foods-jiage {
          display: flex;
          height: 20px;
          color: red;
          font-weight: normal;
          font-size: 14px;
          line-height: 24px;
          // width: 40%;
          justify-content: space-between;
          .price-info-wrapper {
            display: flex;
            .current-price {
              color: red;
              font-weight: normal;
              font-size: 14px;
              line-height: 24px;
            }
            .old-price {
              text-decoration: line-through;
              color: rgb(147, 153, 159);
              line-height: 24px;
              font-size: 10px;
              font-weight: normal;
            }
          }
          .cartcontrol-wrapper {
            // background-color: gray;
            height: 20px;
            width: 60px;
          }
        }

        .foods-name span {
          font-size: 14px;
          color: rgb(16, 27, 37);
          line-height: 14px;
        }
        .foods-xiaoliang span {
          font-size: 10px;
          color: rgb(147, 153, 159);
          line-height: 10px;
        }
        .foods-description span {
          font-size: 10px;
          color: rgb(147, 153, 159);
          line-height: 10px;
        }
      }
    }
  }
  .shop {
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
        font-size: 16px;
        color: #919396;
        font-weight: 700;
        line-height: 24px;
      }
    }
    .shopcenter {
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
