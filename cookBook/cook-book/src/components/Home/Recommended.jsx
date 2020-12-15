import React, { Component } from 'react';
import '../../assets/styles/Recommended.scss'
import Card from '../../components/Home/Card'
import free01 from '../../assets/images/Home/free01.jpg'
import free02 from '../../assets/images/Home/free02.jpg'
import free03 from '../../assets/images/Home/free03.jpg'
import free04 from '../../assets/images/Home/free04.jpg'
import free05 from '../../assets/images/Home/free05.jpg'
import sale01 from '../../assets/images/Home/sale01.png'
import sale02 from '../../assets/images/Home/sale02.png'
class Recommended extends Component {
  render() {
    return (
      <div>
        <div className="recomm-content-item-wrapper">
          <Card>
            <div className="recomm-content-item__card-wrapper">
              <h3 className="product-title travel-title">
                超值自由行
                </h3>
              <div className="recomm-content-item__img-list-wrapper fixFloat">
                <div className="recomm-content-item__img-list-content recomm-content-item__travel-image-wrapper">
                  <img src={free01} alt=""/>
                  <div className="recomm-content-item__img-list-mask"></div>
                  <div className="recomm-content-item__text-content-wrapper">
                    <span className="recomm-content-item__text-content-left-top">3天2晚</span>
                    <div className="recomm-content-item__text-content-bottom recomm-content-item__travel-text-content-bottom fixFloat">
                      <div>
                        <div className="travel-city">北京-鄂尔多斯</div>
                        <div className="travel-amount">¥836<span>起</span></div>
                      </div>
                      {/* <div>
                      <div className="travel-amount">¥836<span>起</span></div>
                      <div className="travel-city">-</div>
                    </div> */}
                    </div>
                  </div>
                </div>
                <div className="recomm-content-item__img-list-content recomm-content-item__travel-image-wrapper">
                  <img src={free02} alt=""/>
                  <div className="recomm-content-item__img-list-mask"></div>
                  <div className="recomm-content-item__text-content-wrapper">
                    <span className="recomm-content-item__text-content-left-top">5天4晚</span>
                    <div className="recomm-content-item__text-content-bottom recomm-content-item__travel-text-content-bottom fixFloat">
                      <div>
                        <div className="travel-amount">¥1216<span>起</span></div>
                        <div className="travel-city">北京-上海</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="recomm-content-item__img-list-content recomm-content-item__travel-image-wrapper">
                  <img src={free03} alt=""/>
                  <div className="recomm-content-item__img-list-mask"></div>
                  <div className="recomm-content-item__text-content-wrapper">
                    <span className="recomm-content-item__text-content-left-top">3天2晚</span>
                    <div className="recomm-content-item__text-content-bottom recomm-content-item__travel-text-content-bottom fixFloat">
                      <div>
                        <div className="travel-amount">¥--<span>起</span></div>
                        <div className="travel-city">北京-安顺</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="recomm-content-item__img-list-content recomm-content-item__travel-image-wrapper">
                  <img src={free04} alt=""/>
                  <div className="recomm-content-item__img-list-mask"></div>
                  <div className="recomm-content-item__text-content-wrapper">
                    <span className="recomm-content-item__text-content-left-top">5天4晚</span>
                    <div className="recomm-content-item__text-content-bottom recomm-content-item__travel-text-content-bottom fixFloat">
                      <div>
                        <div className="travel-amount">¥--<span>起</span></div>
                        <div className="travel-city">安顺-北京</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="recomm-content-item__img-list-content recomm-content-item__travel-image-wrapper">
                  <img src={free05} alt=""/>
                  <div className="recomm-content-item__img-list-mask"></div>
                  <div className="recomm-content-item__text-content-wrapper">
                    <span className="recomm-content-item__text-content-left-top">5天4晚</span>
                    <div className="recomm-content-item__text-content-bottom recomm-content-item__travel-text-content-bottom fixFloat">
                      <div>
                        <div className="travel-amount">¥--<span>起</span></div>
                        <div className="travel-city">阿尔山-上海</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Card>
        </div>

        <div className="recomm-content-item-wrapper">
          <Card>
          <div className="recomm-content-item__card-wrapper fixFloat">
            <h3 className="product-title ticket-title">
              特价机票
            </h3>
            <div className="recomm-content-item__img-list-wrapper fixFloat">
              <div  className="recomm-content-item__img-list-content recomm-content-item__ticket-image-wrapper">
                <img src={sale01}  alt=""/>
                <div className="recomm-content-item__img-list-mask"></div>
                <div className="recomm-content-item__text-content-wrapper">
                  <span className="recomm-content-item__text-content-left-top">12-05</span>
                  <div className="recomm-content-item__text-content-bottom recomm-content-item__ticket-text-content-bottom">
                    <span className="ticket-city">北京大兴-上海虹桥</span>
                    <span className="ticket-amount">¥308起</span>
                  </div>
                </div>
              </div>
              <div  className="recomm-content-item__img-list-content recomm-content-item__ticket-image-wrapper">
                <img src={sale02}  alt=""/>
                <div className="recomm-content-item__img-list-mask"></div>
                <div className="recomm-content-item__text-content-wrapper">
                  <span className="recomm-content-item__text-content-left-top">12-17</span>
                  <div className="recomm-content-item__text-content-bottom recomm-content-item__ticket-text-content-bottom">
                    <span className="ticket-city">北京大兴-成都</span>
                    <span className="ticket-amount">¥508起</span>
                  </div>
                </div>
              </div>
              <div  className="recomm-content-item__img-list-content recomm-content-item__ticket-image-wrapper">
                <img src={free04}  alt=""/>
                <div className="recomm-content-item__img-list-mask"></div>
                <div className="recomm-content-item__text-content-wrapper">
                  <span className="recomm-content-item__text-content-left-top">12-08</span>
                  <div className="recomm-content-item__text-content-bottom recomm-content-item__ticket-text-content-bottom">
                    <span className="ticket-city">上海虹桥-北京大兴</span>
                    <span className="ticket-amount">¥308起</span>
                  </div>
                </div>
              </div>
              <div  className="recomm-content-item__img-list-content recomm-content-item__ticket-image-wrapper">
                <img src={free04}  alt=""/>
                <div className="recomm-content-item__img-list-mask"></div>
                <div className="recomm-content-item__text-content-wrapper">
                  <span className="recomm-content-item__text-content-left-top">12-08</span>
                  <div className="recomm-content-item__text-content-bottom recomm-content-item__ticket-text-content-bottom">
                    <span className="ticket-city">上海虹桥-北京大兴</span>
                    <span className="ticket-amount">¥308起</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Card>
        </div>





      </div>
    );
  }
}

export default Recommended;