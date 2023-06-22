import React from "react";
import LimitedCarousel from "./limitedCarosel";

const LimitedLeftSide = () => {
  return (
    <div>
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="martfury-container">
          <div className="row">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                 
                  <div
                    className="mf-products-tabs mf-products-tabs-carousel woocommerce  header-style-1"
                    id="products-tabs645c8202e6bf8"
                  >
                    <div>
                      {/* <div className="mf-vc-loading">
                                  <div className="mf-vc-loading--wrapper" />
                                </div> */}
                      <div
                        style={{
                          // backgroundColor: "green",
                          width: "100%",
                        }}
                      >
                        <LimitedCarousel />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedLeftSide;
