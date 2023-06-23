import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="colophon" className="site-footer">
        <nav className="footer-layout footer-layout-1 footer-light">
          <div className="footer-newsletter">
            <div className="martfury-container">
              <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 col-newsletter-content">
                  <div className="newsletter-content">
                    <h3>Newsletter</h3>
                    Subcribe to get information about products and coupons
                  </div>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                  <div className="newsletter-form">
                    {/* Mailchimp for WordPress v4.8.12 - https://wordpress.org/plugins/mailchimp-for-wp/ */}
                    <form
                      id="mc4wp-form-2"
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
                        defaultValue={1683784195}
                      />
                      <input
                        type="hidden"
                        name="_mc4wp_form_id"
                        defaultValue={436}
                      />
                      <input
                        type="hidden"
                        name="_mc4wp_form_element_id"
                        defaultValue="mc4wp-form-2"
                      />
                      <div className="mc4wp-response" />
                    </form>
                    {/* / Mailchimp for WordPress Plugin */}
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="martfury-container">
            <div className="footer-content">
              <div className="footer-widgets columns-4" id="footer-widgets">
                <div className="footer-sidebar footer-1">
                  <div
                    id="custom_html-9"
                    className="widget_text widget widget_custom_html"
                  >
                    <h4 className="widget-title">Contact Us</h4>
                    <div className="textwidget custom-html-widget">
                      Call us 24/7
                      <h3
                        style={{ margin: "10px 0", fontWeight: 600 }}
                        className="primary-color"
                      >
                        +1-919-400-7170
                      </h3>
                      Emerald Cir, Durham, NC 27713,
                      <br /> North Carolina United States
                      <br />
                      contact@x4traders.com
                    </div>
                  </div>
                  <div
                    id="social-links-widget-1"
                    className="widget social-links-widget social-links"
                  >
                    <div className="social-links-list">
                      <Link
                        href="/"
                        className="share-facebook tooltip-enable share-social"
                        rel="nofollow"
                        title="Facebook"
                        data-toggle="tooltip"
                        data-placement="top"
                        target="_blank"
                      >
                        <i className="social social_facebook" />
                      </Link>
                      <Link
                        href="/"
                        className="share-twitter tooltip-enable share-social"
                        rel="nofollow"
                        title="Twitter"
                        data-toggle="tooltip"
                        data-placement="top"
                        target="_blank"
                      >
                        <i className="social social_twitter" />
                      </Link>
                      <Link
                        href="#"
                        className="share-googleplus tooltip-enable share-social"
                        rel="nofollow"
                        title="Google Plus"
                        data-toggle="tooltip"
                        data-placement="top"
                        target="_blank"
                      >
                        <i className="social social_googleplus" />
                      </Link>
                      <Link
                        href="#"
                        className="share-youtube tooltip-enable share-social"
                        rel="nofollow"
                        title="Youtube"
                        data-toggle="tooltip"
                        data-placement="top"
                        target="_blank"
                      >
                        <i className="social social_youtube" />
                      </Link>
                      <Link
                        href="#"
                        className="share-instagram tooltip-enable share-social"
                        rel="nofollow"
                        title="Instagram"
                        data-toggle="tooltip"
                        data-placement="top"
                        target="_blank"
                      >
                        <i className="social social_instagram" />
                      </Link>
                    </div>
                  </div>{" "}
                </div>
                <div className="footer-sidebar footer-2">
                  <div id="nav_menu-7" className="widget widget_nav_menu">
                    <h4 className="widget-title">Quick Links</h4>
                    <div className="menu-footer-link-4-container">
                      <ul id="menu-footer-link-4" className="menu">
                        <li
                          id="menu-item-2224"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2224"
                        >
                          <Link href="/">
                            Desktop PC
                          </Link>
                        </li>
                        <li
                          id="menu-item-2225"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2225"
                        >
                          <Link href="/">
                            Laptop
                          </Link>
                        </li>
                        <li
                          id="menu-item-2226"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2226"
                        >
                          <Link href="/">
                            Smartphones
                          </Link>
                        </li>
                        <li
                          id="menu-item-2227"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2227"
                        >
                          <Link href="/">
                            Tablet
                          </Link>
                        </li>
                        <li
                          id="menu-item-2228"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2228"
                        >
                          <Link href="/">
                            Game Controller
                          </Link>
                        </li>
                        <li
                          id="menu-item-2229"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2229"
                        >
                          <Link href="/">
                            Audio &amp; Video
                          </Link>
                        </li>
                        <li
                          id="menu-item-2230"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2230"
                        >
                          <Link href="/">
                            Wireless Speaker
                          </Link>
                        </li>
                        <li
                          id="menu-item-2231"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2231"
                        >
                          <Link href="/">
                            Drone
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                </div>
                <div className="footer-sidebar footer-3">
                  <div id="nav_menu-8" className="widget widget_nav_menu">
                    <h4 className="widget-title">Company</h4>
                    <div className="menu-footer-link-5-container">
                      <ul id="menu-footer-link-5" className="menu">
                        <li
                          id="menu-item-2232"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2232"
                        >
                          <Link href="/">
                            Hair Care
                          </Link>
                        </li>
                        <li
                          id="menu-item-2233"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2233"
                        >
                          <Link href="/">
                            Makeup
                          </Link>
                        </li>
                        <li
                          id="menu-item-2234"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2234"
                        >
                          <Link href="/">
                            Body Shower
                          </Link>
                        </li>
                        <li
                          id="menu-item-2235"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2235"
                        >
                          <Link href="/">
                            Skin Care
                          </Link>
                        </li>
                        <li
                          id="menu-item-2236"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2236"
                        >
                          <Link href="/">
                            Cologine
                          </Link>
                        </li>
                        <li
                          id="menu-item-2237"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2237"
                        >
                          <Link href="/">
                            Perfume
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                </div>
                <div className="footer-sidebar footer-4">
                  <div id="nav_menu-9" className="widget widget_nav_menu">
                    <h4 className="widget-title">Bussiness</h4>
                    <div className="menu-footer-link-6-container">
                      <ul id="menu-footer-link-6" className="menu">
                        <li
                          id="menu-item-2238"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2238"
                        >
                          <Link href="/">
                            Necklace
                          </Link>
                        </li>
                        <li
                          id="menu-item-2239"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2239"
                        >
                          <Link href="/">
                            Pendant
                          </Link>
                        </li>
                        <li
                          id="menu-item-2240"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2240"
                        >
                          <Link href="/">
                            Diamond Ring
                          </Link>
                        </li>
                        <li
                          id="menu-item-2241"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2241"
                        >
                          <Link href="/">
                            Sliver Earing
                          </Link>
                        </li>
                        <li
                          id="menu-item-2242"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2242"
                        >
                          <Link href="/">
                            Leather Watcher
                          </Link>
                        </li>
                        <li
                          id="menu-item-2243"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2243"
                        >
                         <Link href="/">
                            Rolex
                          </Link>
                        </li>
                        <li
                          id="menu-item-2244"
                          className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2244"
                        >
                          <Link href="/">
                            Gucci
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="footer-links" id="footer-links">
                <div id="nav_menu-4" className="widget widget_nav_menu">
                  <h4 className="widget-title">Health &amp; Beauty:</h4>
                  <div className="menu-footer-link-1-container">
                    <ul id="menu-footer-link-1" className="menu">
                      <li
                        id="menu-item-477"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-477"
                      >
                        <Link href="/">
                          Air Conditioners
                        </Link>
                      </li>
                      <li
                        id="menu-item-478"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-478"
                      >
                        <Link href="/">
                          Audios &amp; Theaters
                        </Link>
                      </li>
                      <li
                        id="menu-item-479"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-479"
                      >
                        <Link href="/">
                          Car Electronics
                        </Link>
                      </li>
                      <li
                        id="menu-item-480"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-480"
                      >
                        <Link href="/">
                          Office Electronics
                        </Link>
                      </li>
                      <li
                        id="menu-item-481"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-481"
                      >
                        <Link href="/">
                          TV Televisions
                        </Link>
                      </li>
                      <li
                        id="menu-item-482"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-482"
                      >
                        <Link href="/">
                          Washing Machines
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="nav_menu-5" className="widget widget_nav_menu">
                  <h4 className="widget-title">Jewelry &amp; Watches:</h4>
                  <div className="menu-footer-link-2-container">
                    <ul id="menu-footer-link-2" className="menu">
                      <li
                        id="menu-item-483"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-483"
                      >
                        <Link href="/">
                          Printers
                        </Link>
                      </li>
                      <li
                        id="menu-item-484"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-484"
                      >
                        <Link href="/">
                          Projectors
                        </Link>
                      </li>
                      <li
                        id="menu-item-485"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-485"
                      >
                        <Link href="/">
                          Scanners
                        </Link>
                      </li>
                      <li
                        id="menu-item-486"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-486"
                      >
                        <Link href="/">
                          Store &amp; Business
                        </Link>
                      </li>
                      <li
                        id="menu-item-487"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-487"
                      >
                        <Link href="/">
                          4K Ultra HD TVs
                        </Link>
                      </li>
                      <li
                        id="menu-item-488"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-488"
                      >
                        <Link href="/">
                          LED TVs
                        </Link>
                      </li>
                      <li
                        id="menu-item-489"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-489"
                      >
                        <Link href="/">
                          OLED TVs
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="nav_menu-6" className="widget widget_nav_menu">
                  <h4 className="widget-title">Computer &amp; Technologies:</h4>
                  <div className="menu-footer-link-3-container">
                    <ul id="menu-footer-link-3" className="menu">
                      <li
                        id="menu-item-2217"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2217"
                      >
                        <Link href="/">
                          Cookware
                        </Link>
                      </li>
                      <li
                        id="menu-item-2218"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2218"
                      >
                        <Link href="/">
                          Decoration
                        </Link>
                      </li>
                      <li
                        id="menu-item-2219"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2219"
                      >
                        <Link href="/">
                          Furniture
                        </Link>
                      </li>
                      <li
                        id="menu-item-2220"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2220"
                      >
                        <Link href="/">
                          Garden Tools
                        </Link>
                      </li>
                      <li
                        id="menu-item-2221"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2221"
                      >
                        <Link href="/">
                          Garden Equipments
                        </Link>
                      </li>
                      <li
                        id="menu-item-2222"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2222"
                      >
                        <Link href="/">
                          Powers And Hand Tools
                        </Link>
                      </li>
                      <li
                        id="menu-item-2223"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2223"
                      >
                        <Link href="/">
                          Utensil &amp; Gadget
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row footer-row">
                <div className="col-footer-copyright col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="footer-copyright">
                    © 2018 x4Traders.com . All Rights Reserved
                  </div>{" "}
                </div>
                <div className="col-footer-payments col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="footer-payments">
                    <div className="text">We Using Safe Payment For</div>{" "}
                    <ul className="payments">
                      {" "}
                      <li>
                        <img
                          className="attachment-full size-full"
                          src="images/p6.jpg"
                        />
                      </li>{" "}
                      <li>
                        <img
                          className="attachment-full size-full"
                          src="images/master.jpg"
                        />
                      </li>{" "}
                      <li>
                        <img
                          className="attachment-full size-full"
                          src="images/card-visa.jpg"
                        />
                      </li>{" "}
                      <li>
                        <img
                          className="attachment-full size-full"
                          src="images/acard.jpg"
                        />
                      </li>{" "}
                      <li>
                        <img className="attachment-full size-full" src="" />
                      </li>{" "}
                    </ul>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </nav>{" "}
      </footer>
    </div>
  );
};

export default Footer;
