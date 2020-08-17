<template>
<div class="header">
<div class="content-wrapper">
    <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
    </div>
    <div class="content">

        <div class="title">
            <span class="brand"></span>
             <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
           {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
            <span class="icon"></span>
            <span class="text">{{seller.supports[0].description}}</span>
        </div>

    <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="tubiao"> > </i>

    </div>
    
    
    </div>
</div>
<div class="bulletin-wrapper">
    <div class="bulletin-title"></div>
    <div class="bulletin-text">{{seller.bulletin}}</div>
    <i class="bulletin-jiantou">></i>
</div>
</div>
</template>

<script>
export default {
    
props: {
    seller: {
        type:Object
    }

}
};
</script>

<style>
.header{
    background: #999;
    color: #fff;
    
}
.content-wrapper{
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;
}
.avatar{
    display: inline-block; 
    vertical-align: top;
}
.avatar img{
border-radius: 2px;
}
.content{
    display: inline-block; 
    font-size: 14px;
    margin-left: 16px;
}
.title{
    margin: 2px 0 8px 0;
}
.brand{
    display: inline-block;
    width: 30px;
    height:18px;
    vertical-align: top;
}
.name{
   font-size: 16px;
   color: rgba(255, 255, 255);
   line-height: 18px;
   font-weight: bold;
   margin-left: 6px;
}
.description{
   font-size: 12px;
   color: rgba(255, 255, 255);
   line-height: 12px;
   font-weight: 200;
}
.text{
 font-size: 10px;
   color: rgba(255, 255, 255);
   line-height: 12px;
   font-weight: 200;
}
.support-count{
    position: absolute;
    right: 12px;
    bottom: 18px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
}
.count{
    font-size: 10px;

}
.tubiao{
font-size: 10px;
}
.bulletin-wrapper{
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px ;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: rgba(7, 17, 27, 0.2);
}
 /* .bulletin-title{
    display: inline-block;
    width: 22px;
    height: 12px;
   
}  */
.bulletin-text{
    font-size: 10px;
}
</style>