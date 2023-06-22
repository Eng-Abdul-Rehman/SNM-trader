import { Box, useMediaQuery } from "@mui/material";
import React from "react";

const Discount = () => {
  return (
    <div>
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="martfury-container">
          <div className="row">
            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-6 vc_col-xs-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div
                    className="mf-banner-medium  layout-5 has-img "
                    style={{}}
                  >
                    <a className="link-all" href="#" />
                    <div className="banner-content" style={{}}>
                      <div className="s-content">
                        <h2 className="title">
                          <strong>Prada PR 17WS</strong> Black
                          <br />
                          Grey Lens
                        </h2>{" "}
                        <div className="desc">
                          Discount
                          <br />
                          <strong className="price">$359.99</strong>
                          <span className="sale">$400.04</span>
                        </div>
                      </div>
                      <div className="link-box">
                        <a className="link" href="#">
                          Shop Now
                        </a>
                      </div>
                    </div>
                    <div className="banner-image" style={{ alignItems: "end", height: 287, display: "flex", justifyContent: "end", border: "2px solid #e0e0e0"}}>
                      <img
                        // src="images/transparent.png"
                        src="/images/blackGlases.jpg"
                        alt=""
                        className="lazy "
                        width={"50%"}
                        height={"60%"}
                      />
                    </div>
                  </div>
                  <div className="martfury-empty-space ">
                    <div className="mf_empty_space_lg" style={{ height: 30 }} />
                    <div className="mf_empty_space_md" style={{ height: 30 }} />
                    <div className="mf_empty_space_xs" style={{ height: 30 }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-6 vc_col-xs-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div
                    className="mf-banner-medium  layout-5 has-img "
                    style={{}}
                  >
                    <a className="link-all" href="#" />
                    <div className="banner-content" style={{}}>
                      <div className="s-content">
                        <h2 className="title">
                          Dog Camera
                          <br />
                          Furdo 360°
                          <br />
                          [new]
                        </h2>{" "}
                        <div className="desc">
                          <strong style={{ fontSize: 12 }}>SALE UP</strong>
                          <br />
                          <span className="price">40% OFF</span>
                        </div>
                      </div>
                      <div className="link-box">
                        <a className="link" href="#">
                          Shop Now
                        </a>
                      </div>
                    </div>
                    <Box className="banner-image" sx={{ alignItems: "end", height: {md:287, xs: 287}, display: "flex", justifyContent: "end", border: "2px solid #e0e0e0"}}>
                      <img
                        // src="images/transparent.png"
                        src="/images/Pet Supplies/Furbo.jpg"
                        alt=""
                        className="lazy "
                        width={"60%"}
                        height={"80%"}
                      />
                    </Box>
                  </div>
                  <div className="martfury-empty-space ">
                    <div className="mf_empty_space_lg" style={{ height: 30 }} />
                    <div className="mf_empty_space_md" style={{ height: 30 }} />
                    <div className="mf_empty_space_xs" style={{ height: 30 }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-6 vc_col-xs-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div
                    className="mf-banner-medium  layout-5 has-img "
                    style={{}}
                  >
                    <a className="link-all" href="#" />
                    <div className="banner-content" style={{}}>
                      <div className="s-content">
                        <h2 className="title">
                          <strong>FitFlop I88A15-060</strong>
                          <br />
                          Leather Toepost
                          <br />
                          Blue US08
                        </h2>{" "}
                        <div className="desc">
                          <strong style={{ fontSize: 12 }}>PRICE JUST</strong>
                          <br />
                          <strong className="price">$121.78</strong>
                        </div>
                      </div>
                      <div className="link-box">
                        <a className="link" href="#">
                          Shop Now
                        </a>
                      </div>
                    </div>
                    <div className="banner-image" style={{ alignItems: "end", height: 287, display: "flex", justifyContent: "end", border: "2px solid #e0e0e0"}}>
                      <img
                        // src="images/transparent.png"
                        src="/images/chaple.jpg"
                        alt=""
                        className="lazy "
                        width={"65%"}
                        height={"60%"}
                      />
                    </div>
                  </div>
                  <div className="martfury-empty-space ">
                    <div className="mf_empty_space_lg" style={{ height: 30 }} />
                    <div className="mf_empty_space_md" style={{ height: 30 }} />
                    <div className="mf_empty_space_xs" style={{ height: 30 }} />
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

export default Discount;
