import React from 'react';
import '../styles/Header5.css'
import ImgAsset from '../public'

export const Home = () => {
  return (
    <div className="Header5_Header5">
      <div className="background">
        <img className="cover" src={ImgAsset.Home4mobile_cover} />
        <div className="filter"></div>
        <div className="Rectangle1" />
        <img className="Vector1" src={ImgAsset.Header5_Vector1} />
      </div>
      <div className="container">
        <div className="row">
          <div className="colmd4">
            <div className="carditem">
              <div className="Icons">
                <div className="bxscar"></div>
                <div className="Plane">
                  <img className="Vector" src={ImgAsset.Header5_Vector} />
                  <span className="btntext">Plane</span>
                </div>
                <div className="Train">
                  <div className="bxstrain">
                    <img className="Vector_1" src={ImgAsset.Header5_Vector_1} />
                  </div>
                  <span className="btntext_1">Train</span>
                </div>
                <div className="Car">
                  <img className="Vector_2" src={ImgAsset.Header5_Vector_2} />
                  <span className="btntext_2">Car</span>
                </div>
                <div className="Boat">
                  <div className="icrounddirectionsboatfilled">
                    <img className="Vector_3" src={ImgAsset.Header5_Vector_3} />
                  </div>
                  <span className="btntext_3">Boat</span>
                </div>
              </div>
              <div className="cardcontent">
                <div className="formgroup">
                  <span className="formcontrol">From</span>
                  <div className="formcontrolinputstyle1">
                    <div className="inputformcontrol">
                      <span className="Email">City name</span>
                    </div>
                  </div>
                </div>
                <div className="formgroup_1">
                  <span className="formcontrol_1">To</span>
                  <div className="formcontrolinputstyle1_1">
                    <div className="inputformcontrol_1">
                      <span className="Email_1">City name</span>
                    </div>
                  </div>
                </div>
                <div className="formgroupcustomselect">
                  <span className="formcontrol_2">Length of stay</span>
                  <div className="customselect">
                    <div className="select">
                      <div className="option">
                        <span className="Dropdown">Number of days</span>
                      </div>
                      <div className="option_1">
                        <span className="ListEntry1">List Entry # 1</span>
                      </div>
                      <div className="option_2">
                        <span className="ListEntry2">List Entry # 2</span>
                      </div>
                      <div className="option_3">
                        <span className="ListEntry3">List Entry # 3</span>
                      </div>
                      <div className="option_4">
                        <span className="ListEntry4">List Entry # 4</span>
                      </div>
                      <div className="option_5">
                        <span className="ListEntry5">List Entry # 5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="formgroupcustomselect_1">
                  <span className="formcontrol_3">Costs of accommodation</span>
                  <div className="customselect_1">
                    <div className="select_1">
                      <div className="option_6">
                        <span className="Dropdown_1">Price</span>
                      </div>
                      <div className="option_7">
                        <span className="ListEntry1_1">List Entry # 1</span>
                      </div>
                      <div className="option_8">
                        <span className="ListEntry2_1">List Entry # 2</span>
                      </div>
                      <div className="option_9">
                        <span className="ListEntry3_1">List Entry # 3</span>
                      </div>
                      <div className="option_10">
                        <span className="ListEntry4_1">List Entry # 4</span>
                      </div>
                      <div className="option_11">
                        <span className="ListEntry5_1">List Entry # 5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttonbtnprimarycolor">
                <span className="btntext_4">Calculate</span>
              </div>
            </div>
          </div>
          <div className="colmd8">
            <span className="h1">
              Drive More <br />
              Customers <br />
              Through Digital
            </span>
            <span className="h4">
              We know how large objects will act, but things on a <br />
              small scale.
            </span>
            <div className="cta">
              <div className="buttonbtnprimarycolorbtnround">
                <span className="btntext_5">Get Quote Now</span>
              </div>
              <div className="buttonbtnprimarycolorbtnoutlinebtnround">
                <span className="btntext_6">Learn More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbarstyle1navbarlight"></div>
      <span className="GreenTravel">Green Travel</span>
    </div>
  );
};
