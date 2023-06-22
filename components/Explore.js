import React from "react";
import { Box } from "@mui/material";
import Moblie11 from "./Mobile";
import Moblie21 from "./Mobile2";
import Moblie31 from "./moblie3";
import HorizontalCarousel1 from "@/components/MainCruosel";

const Explore1 = ({Catagrie, data}) => {
  return (
    <div>
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="martfury-container">
          <div className="row">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="martfury-empty-space ">
                    <div className="mf_empty_space_lg" style={{ height: 52 }} />
                    <div className="mf_empty_space_md" style={{ height: 52 }} />
                    <div className="mf_empty_space_xs" style={{ height: 52 }} />
                  </div>
                  <div
                    className="mf-products-tabs mf-products-tabs-carousel woocommerce  header-style-1"
                    id="products-tabs645c8202e6bf8"
                  >
                    <div className="tabs-header">
                      <h2 className="tabs-cat__heading">
                        <span className="cat-title">{Catagrie}</span>
                      </h2>{" "}
                      <div className="tabs-header-nav">
                        {" "}
                        <ul className="tabs-nav">
                          {" "}
                          <li>
                            <a href="#" data-href="recent" className="active">
                              New Arrivals
                            </a>
                          </li>{" "}
                          <li>
                            <a href="#" data-href="best_selling" className="">
                              Best Seller
                            </a>
                          </li>{" "}
                          <li>
                            <a href="#" data-href="top_rated" className="">
                              Most Popular
                            </a>
                          </li>{" "}
                        </ul>{" "}
                      </div>
                    </div>
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
                        <Box sx={{display: {sm: "none", xs: "block"}}}>
                        <Moblie11 DataC={data}/>
                        </Box>
                        <Box sx={{display: {md: "none", sm: "block", xs: "none"}}}>
                        <Moblie21 DataC={data}/>
                        </Box>
                        <Box sx={{display: {lg: "none",md: "block", sm: "none", xs:"none"}}}>
                        <Moblie31 DataC={data}/>
                        </Box>
                        <Box sx={{display: {lg: "block", xs: "none"}}}>
                        <HorizontalCarousel1 DataC={data} />
                        </Box>
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

export default Explore1;
