import React from "react";

const Downlond = () => {
  return (
    <div>
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="martfury-container">
          <div className="row">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="martfury-empty-space ">
                    <div className="mf_empty_space_lg" style={{ height: 70 }} />
                    <div className="mf_empty_space_md" style={{ height: 70 }} />
                    <div className="mf_empty_space_xs" style={{ height: 70 }} />
                  </div>
                  <div
                    className="martfury-newletter "
                    style={{ backgroundColor: "#f8f8f8" }}
                  >
                    <div className="container">
                      <div className="row newsletter-row">
                        <div className="form-image col-md-6 hidden-sm hidden-xs text-center">
                          <img
                            src="https://x4traders.com/wp-content/uploads/2022/12/b355.png"
                            // data-original="https://x4traders.com/wp-content/uploads/2022/12/b355.png"
                            alt=""
                            className="lazy "
                            width={487}
                            height={379}
                          />
                        </div>
                        <div className="form-area col-md-6 col-xs-12 col-sm-12">
                          <h3 className="form-title">
                            Download x4Traders App Now!
                          </h3>
                          <div className="form-desc">
                            Shopping fastly and easily more with our app. Get a
                            link to
                            <br />
                            download the app on your phone.
                          </div>
                          {/* Mailchimp for WordPress v4.8.12 - https://wordpress.org/plugins/mailchimp-for-wp/ */}
                          <form
                            id="mc4wp-form-1"
                            className="mc4wp-form mc4wp-form-436"
                            method="post"
                            data-id={436}
                            data-name="Newsletter"
                          >
                            <div className="mc4wp-form-fields">
                              <input
                                type="email"
                                name="EMAIL"
                                placeholder="Email Address"
                                required=""
                              />
                              <input type="submit" defaultValue="Subscribe" />
                            </div>
                            <label style={{ display: "none !important" }}>
                              Leave this field empty if you're human:{" "}
                              <input
                                type="text"
                                name="_mc4wp_honeypot"
                                defaultValue=""
                                tabIndex={-1}
                                autoComplete="off"
                              />
                            </label>
                            <input
                              type="hidden"
                              name="_mc4wp_timestamp"
                              defaultValue={1683804222}
                            />
                            <input
                              type="hidden"
                              name="_mc4wp_form_id"
                              defaultValue={436}
                            />
                            <input
                              type="hidden"
                              name="_mc4wp_form_element_id"
                              defaultValue="mc4wp-form-1"
                            />
                            <div className="mc4wp-response" />
                          </form>
                          {/* / Mailchimp for WordPress Plugin */}
                          <div className="btn-area">
                            <a
                              className="link"
                              href="https://play.google.com/store"
                            >
                              <img
                                src="https://x4traders.com/wp-content/uploads/2018/08/t1.png"
                                // data-original="https://x4traders.com/wp-content/uploads/2018/08/t1.png"
                                alt=""
                                className="lazy "
                                width={127}
                                height={43}
                              />
                            </a>
                            <a
                              className="link"
                              href="https://www.appstore.com/"
                            >
                              <img
                                src="https://x4traders.com/wp-content/uploads/2018/08/t2.png"
                                // data-original="https://x4traders.com/wp-content/uploads/2018/08/t2.png"
                                alt=""
                                className="lazy "
                                width={128}
                                height={43}
                              />
                            </a>
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
      </div>
    </div>
  );
};

export default Downlond;
