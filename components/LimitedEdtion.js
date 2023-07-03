import React from "react";
import Explore from "./Explore";
import HorizontalCarousel from "./MainCruosel";
import LimitedLeftSide from "./LimitedLeftSide";

const LimitedEdtion = () => {
  return (
    <div className="martfury-container" style={{ display: { sm: "none"}}}>
      <div className="row">
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-9 vc_col-xs-12">
          <div className="vc_column-inner">
            <LimitedLeftSide />
          </div>
        </div>
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-12 vc_hidden-md vc_hidden-sm vc_col-xs-12 vc_hidden-xs">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div
                className="mf-banner-small  has-img  position-price-2"
                style={{}}
              >
                <div className="b-image" style={{border: "2px solid #fcca74"}}>
                  <img
                    // src="images/transparent.png"
                    src="images/Corrror.jpg"
                    alt=""
                    className="lazy "
                    width={260}
                    height={193}
                  />
                </div>
                <a className="link" href="#" />
                <div className="box-price">
                  <span className="s-price">
                    20%
                    <br />
                    OFF
                  </span>
                </div>
                <div className="banner-content" style={{}}>
                  <h2 className="box-title">
                    Carroten   
                    <br />
                    Tanning
                    <br />
                     Gel
                  </h2>{" "}
                  <p className="desc">
                    100% Pure
                    <br />
                    Hair
                  </p>
                </div>
              </div>
              <div className="martfury-empty-space ">
                <div className="mf_empty_space_lg" style={{ height: 30 }} />
                <div className="mf_empty_space_md" style={{ height: 30 }} />
                <div className="mf_empty_space_xs" style={{ height: 30 }} />
              </div>
              <div
                className="mf-banner-small  has-img  position-price-1"
                style={{}}
              >
                <div className="b-image" style={{border: "2px solid #fcca74"}}>
                  <img
                    // src="images/transparent.png"
                    src="images/Perfume.jpg"
                    alt=""
                    className="lazy "
                    width={230}
                    height={202}
                  />
                </div>
                <a className="link" href="#" />
                <div className="box-price">
                  <span className="s-price">
                    40%
                    <br />
                    OFF
                  </span>
                </div>
                <div className="banner-content" style={{}}>
                  <h2 className="box-title" style={{lineHeight: 1.2}}>
                    bioCorneum Plus 
                    <br />
                    (Size 20g)
                    <br />
                    SPF 30
                  </h2>{" "}
                  <p className="desc">
                  Advanced Scar
                    <br />
                    on the world
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedEdtion;
