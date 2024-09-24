import { Box, Button, IconButton, Rating, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Electronics } from "./Data/ConsumerElectronicsdata";
import Link, { Link as NextLink } from "next/link";
import { Context } from "@/pages/_app";
import { Close } from "@mui/icons-material";
import { Kitchen } from "./Data/KitchenData";
import { PetSuppliesData } from "./Data/PetSuppiesData";
import { Beauty } from "./Data/Beauty&PersonalCare";
import { ClothingShoes } from "./Data/ClothingShoes&Jewelry";
import { GroceryFood } from "./Data/Grocery&GourmetFood";

const header = ({
  favCount,
  shopCount,
  scrole,
  scrole1,
  scrole2,
  scrole3,
  scrole4,
}) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsFixed(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { dataCard, removeCardData, CardData } = useContext(Context);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredElectronics, setFilteredElectronics] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredElectronics([]);
    } else {
      const filteredItems = PetSuppliesData.filter((item) =>
        item.Type.toLowerCase().includes(query.toLowerCase())
      );
      const filteredItems2 = Kitchen.filter((item) =>
        item.Type.toLowerCase().includes(query.toLowerCase())
      );
      const filteredItems3 = Beauty.filter((item) =>
        item.Type.toLowerCase().includes(query.toLowerCase())
      );
      const filteredItems4 = ClothingShoes.filter((item) =>
        item.Type.toLowerCase().includes(query.toLowerCase())
      );
      const filteredItems5 = Electronics.filter((item) =>
        item.Type.toLowerCase().includes(query.toLowerCase())
      );
      const filteredItems6 = GroceryFood.filter((item) =>
        item.Type.toLowerCase().includes(query.toLowerCase())
      );
      const combinedItems = [
        ...filteredItems,
        ...filteredItems2,
        ...filteredItems3,
        ...filteredItems4,
        ...filteredItems5,
        ...filteredItems6,
      ];
      setFilteredElectronics(combinedItems);
    }
  };
  return (
    <div>
      <header
        id="site-header"
        className="site-header header-department-bot header-dark"
        // style={{ backgroundColor: "gray" }}
      >
        <div className="header-main-wapper">
          <div className="header-main">
            <div className="martfury-container">
              <div className="row header-row">
                <div className="header-logo col-md-3 col-sm-3">
                  <div className="d-logo">
                    <div className="logo" style={{ width: 210, height: 170 }}>
                      <a href="/">
                        <img
                          alt="x4Traders"
                          src="images/Home & kitchen/Photoroom.png"
                        />
                      </a>
                    </div>
                    <h1 className="site-title">
                      <a href="/" rel="home">
                        SNM Traders
                      </a>
                    </h1>{" "}
                    <h2 className="site-description">Online Shopping Mart</h2>
                  </div>
                  <div
                    className="d-department hidden-xs hidden-sm"
                    style={{ backgroundColor: "black" }}
                  >
                    <div className="products-cats-menu mf-closed">
                      <div className="cats-menu-title">
                        <i className="icon-menu">
                          <span className="s-space">&nbsp;</span>
                        </i>
                        <span className="text">Shop By Department</span>
                      </div>
                      <div className="toggle-product-cats nav">
                        <ul id="menu-shop-by-department" className="menu">
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-409 dropdown is-mega-menu has-width has-background">
                            <i className="icon-laundry" /> Consumer Electrics
                            <ul
                              style={{
                                backgroundImage: "url(images/m2_5Vp1Ja5YM.jpg)",
                                backgroundPosition: "right bottom",
                                backgroundRepeat: "no-repeat",
                                backgroundAttachment: "scroll",
                                width: 530,
                              }}
                              className="dropdown-submenu"
                            >
                              <li></li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-411">
                            <a
                              href="https://x4traders.com/product-category/garden-kitchen/"
                              className=" has-icon"
                            >
                              <i className="icon-lampshade" /> Home, Garden
                              &amp; Kitchen
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-412">
                            <a
                              href="https://x4traders.com/product-category/health-beauty/"
                              className=" has-icon"
                            >
                              <i className="icon-heart-pulse" /> Health &amp;
                              Beauty
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-413">
                            <a
                              href="https://x4traders.com/product-category/jewelry-watches/"
                              className=" has-icon"
                            >
                              <i className="icon-diamond2" /> Jewelry &amp;
                              Watches
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-414 dropdown is-mega-menu has-width has-background">
                            <a
                              href="https://x4traders.com/product-category/computers-technologies/"
                              className="dropdown-toggle has-icon"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="icon-desktop" /> Computers &amp;
                              Technologies
                            </a>
                            <ul
                              style={{
                                backgroundImage: "url(images/m3_7JjDEr3pW.jpg)",
                                backgroundPosition: "right bottom",
                                backgroundRepeat: "no-repeat",
                                backgroundAttachment: "scroll",
                                width: 530,
                              }}
                              className="dropdown-submenu"
                            >
                              <li></li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-415">
                            <a
                              href="https://x4traders.com/product-category/babies-moms/"
                              className=" has-icon"
                            >
                              <i className="icon-baby-bottle" /> Babies &amp;
                              Moms
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-416">
                            <a
                              href="https://x4traders.com/product-category/sport-outdoor/"
                              className=" has-icon"
                            >
                              <i className="icon-baseball" /> Sport &amp;
                              Outdoor
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-417 dropdown is-mega-menu has-width has-background">
                            <a
                              href="https://x4traders.com/product-category/phones-accessories/"
                              className="dropdown-toggle has-icon"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="icon-smartphone" /> Phones &amp;
                              Accessories
                            </a>
                            <ul
                              style={{
                                backgroundImage: "url(images/m4_FN0TyxxYq.jpg)",
                                backgroundPosition: "right bottom",
                                backgroundRepeat: "no-repeat",
                                backgroundAttachment: "scroll",
                                width: 540,
                              }}
                              className="dropdown-submenu"
                            >
                              <li>
                                <div className="mega-menu-content">
                                  <div className="row">
                                    <div className="mr-col col-md-6">
                                      <div className="menu-item-mega">
                                        <a
                                          href="#"
                                          className="dropdown-toggle"
                                          role="button"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          Smart Phones
                                        </a>
                                        <div className="mega-menu-submenu">
                                          <ul className="sub-menu check">
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2189">
                                              <a href="https://x4traders.com/product-category/computers-technologies/smartphones/">
                                                iOS Phones
                                              </a>
                                            </li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2190">
                                              <a href="https://x4traders.com/product-category/computers-technologies/desktop-pc/">
                                                Android Phones
                                              </a>
                                            </li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2191">
                                              <a href="https://x4traders.com/product-category/computers-technologies/laptop/">
                                                Window Phones
                                              </a>
                                            </li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2192">
                                              <a href="https://x4traders.com/product-category/phones-accessories/">
                                                Other Smartphones
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mr-col col-md-6">
                                      <div className="menu-item-mega">
                                        <a href="#">Galaxy Note 4</a>
                                        <div className="mega-content">
                                          <a href="#">
                                            <img
                                              src="images/m-layer3_L9iPiBR7m2Z.jpg"
                                              alt="Galaxy Note 4"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mr-col col-md-6">
                                      <div className="menu-item-mega">
                                        <a href="#" className=" hide-text">
                                          Line
                                        </a>
                                        <div className="mega-content">
                                          <div
                                            style={{
                                              height: 20,
                                              marginTop: 15,
                                              borderTop: "1px solid #d9d9d9",
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mr-col col-md-6">
                                      <div className="menu-item-mega">
                                        <a href="#" className=" hide-text">
                                          Line 2
                                        </a>
                                        <div className="mega-content">
                                          <div style={{ height: 40 }} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mr-col col-md-6">
                                      <div className="menu-item-mega">
                                        <a
                                          href="#"
                                          className="dropdown-toggle"
                                          role="button"
                                          data-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          Accessories
                                        </a>
                                        <div className="mega-menu-submenu">
                                          <ul className="sub-menu check">
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2193">
                                              <a href="https://x4traders.com/product-category/consumer-electrics/audios-theaters/headphone/">
                                                Headphones
                                              </a>
                                            </li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2194">
                                              <a href="https://x4traders.com/product-category/consumer-electrics/audios-theaters/home-theater-system/">
                                                Cases
                                              </a>
                                            </li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2195">
                                              <a href="https://x4traders.com/product-category/consumer-electrics/audios-theaters/speakers/">
                                                Lighting Cables
                                              </a>
                                            </li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2196">
                                              <a href="https://x4traders.com/product-category/consumer-electrics/audios-theaters/wireless-audio/">
                                                Memory Cards
                                              </a>
                                            </li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2197">
                                              <a href="https://x4traders.com/product-category/consumer-electrics/car-electronics/">
                                                Others
                                              </a>
                                            </li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2198">
                                              <a href="https://x4traders.com/product-category/consumer-electrics/car-electronics/audio-video/">
                                                Ear-Phones
                                              </a>
                                            </li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2199">
                                              <a href="https://x4traders.com/product-category/consumer-electrics/car-electronics/car-security/">
                                                Phone Components
                                              </a>
                                            </li>
                                            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2200">
                                              <a href="https://x4traders.com/product-category/consumer-electrics/car-electronics/radar-detector/">
                                                Accessories
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-418">
                            <a
                              href="https://x4traders.com/product-category/books-office/"
                              className=" has-icon"
                            >
                              <i className="icon-book2" /> Books &amp; Office
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-419">
                            <a
                              href="https://x4traders.com/product-category/cars-motocycles/"
                              className=" has-icon"
                            >
                              <i className="icon-car-siren" /> Cars &amp;
                              Motocycles
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2347">
                            <a href="#" className=" has-icon">
                              <i className="icon-wrench" /> Home Improments
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2348">
                            <a href="#" className=" has-icon">
                              <i className="icon-tag" /> Vouchers &amp; Services
                            </a>
                          </li>
                        </ul>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-extras col-md-9 col-sm-9">
                  <div className="product-extra-search">
                    <form
                      className="products-search"
                      method="get"
                      action="https://x4traders.com/"
                    >
                      <div className="psearch-content">
                        <div className="product-cat"></div>

                        <div
                          className="search-wrapper"
                          style={{
                            borderLeft: "1px solid black",
                            borderRadius: "8px",
                          }}
                        >
                          <input
                            type="text"
                            name="s"
                            className="search-field"
                            autoComplete="off"
                            placeholder="I'm shopping for..."
                            value={searchQuery}
                            onChange={handleSearch}
                          />
                          <input
                            type="hidden"
                            name="post_type"
                            defaultValue="product"
                          />
                          <div className="search-results woocommerce" />
                        </div>
                        <Button
                          sx={{
                            width: 100,
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: 1,
                            fontSize: 11,
                            fontWeight: "bold",
                            ":hover": {
                              backgroundColor: "black",
                              color: "white",
                            },
                          }}
                        >
                          Search
                        </Button>
                      </div>
                    </form>
                  </div>{" "}
                  <ul className="extras-menu">
                    <li className="extra-menu-item menu-item-wishlist menu-item-yith">
                      <Link
                        className="yith-contents"
                        id="icon-wishlist-contents"
                        href="/FaveroteItems"
                      >
                        <i className="icon-heart extra-icon" rel="tooltip" />
                        <span className="mini-item-counter mini-item-counter--wishlist mf-background-primary">
                          {favCount}
                        </span>
                      </Link>
                    </li>
                    <li className="extra-menu-item menu-item-cart mini-cart woocommerce">
                      <Link
                        className="cart-contents"
                        id="icon-cart-contents"
                        href="/Card"
                      >
                        <i className="icon-bag2 extra-icon" />
                        <span className="mini-item-counter mf-background-primary">
                          {shopCount}
                        </span>
                      </Link>
                      <div className="mini-cart-content">
                        <span className="tl-arrow-menu" />
                        <div className="widget_shopping_cart_content">
                          {dataCard.length === 0 && CardData.length === 0 ? (
                            <Typography
                              sx={{
                                color: "#c4c4c4",
                                paddingY: 2,
                                fontSize: 18,
                              }}
                            >
                              No Product Found
                            </Typography>
                          ) : (
                            <>
                              {dataCard.map((item) => (
                                <Box
                                  key={item.id}
                                  sx={{
                                    display: "flex",
                                    borderBottom: "1px solid #c4c4c4",
                                    height: 76,
                                    paddingY: 1,
                                  }}
                                >
                                  <img
                                    width={60}
                                    height={60}
                                    src={item.Image}
                                    alt="image of product"
                                  />
                                  <Box sx={{ marginLeft: 1 }}>
                                    <Typography
                                      sx={{ color: "#0066cc", fontSize: 14 }}
                                    >
                                      {item.Type}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }}>
                                      1 x ${item.Price}
                                    </Typography>
                                  </Box>
                                  <IconButton
                                    onClick={() => removeCardData(item)}
                                    sx={{
                                      marginTop: 3,
                                      margin: 0,
                                      padding: 0.5,
                                      marginLeft: 6,
                                    }}
                                  >
                                    <Close sx={{ fontSize: 20 }} />
                                  </IconButton>
                                </Box>
                              ))}
                              {CardData.map((item) => (
                                <Box
                                  key={item.id}
                                  sx={{
                                    display: "flex",
                                    borderBottom: "1px solid #c4c4c4",
                                    height: 76,
                                    paddingY: 1,
                                  }}
                                >
                                  <img
                                    width={60}
                                    height={60}
                                    src={item.Image}
                                    alt="image of product"
                                  />
                                  <Box sx={{ marginLeft: 1 }}>
                                    <Typography
                                      sx={{ color: "#0066cc", fontSize: 14 }}
                                    >
                                      {item.Type}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }}>
                                      1 x ${item.Price}
                                    </Typography>
                                  </Box>
                                  <IconButton
                                    onClick={() => removeCardData(item)}
                                    sx={{
                                      marginTop: 3,
                                      margin: 0,
                                      padding: 0.5,
                                      marginLeft: 6,
                                    }}
                                  >
                                    <Close sx={{ fontSize: 20 }} />
                                  </IconButton>
                                </Box>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                    </li>
                    <li className="extra-menu-item menu-item-account">
                      <Link href="/MyAccount">
                        <i className="extra-icon icon-user" />
                        <span className="login-text">Log in</span>
                      </Link>
                    </li>{" "}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="main-menu hidden-xs hidden-sm"
          style={{ backgroundColor: "#424242", color: "white" }}
        >
          <div className="martfury-container">
            <div className="row header-row">
              <div className="col-md-3 col-sm-3 i-product-cats mr-extra-department">
                <div className="products-cats-menu mf-closed">
                  <div className="cats-menu-title">
                    <i className="icon-menu" style={{ color: "white" }}>
                      <span className="s-space" style={{ color: "white" }}>
                        &nbsp;
                      </span>
                    </i>
                    <span className="text" style={{ color: "white" }}>
                      Shop By Department
                    </span>
                  </div>
                  <div className="toggle-product-cats nav">
                    <ul id="menu-shop-by-department" className="menu">
                      <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-410">
                        <span className=" has-icon">
                          <button
                            onClick={scrole}
                            color="black"
                            style={{
                              backgroundColor: "white",
                              border: "none",
                              color: "#666",
                            }}
                          >
                            Home & Kitchen
                          </button>
                        </span>
                      </li>
                      <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-411">
                        <span className=" has-icon">
                          <button
                            onClick={scrole1}
                            color="black"
                            style={{
                              backgroundColor: "white",
                              border: "none",
                              marginTop: 10,
                              color: "#666",
                            }}
                          >
                            Pet Supplies
                          </button>
                        </span>
                      </li>
                      <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-412">
                        <span className=" has-icon">
                          <button
                            onClick={scrole2}
                            color="black"
                            style={{
                              backgroundColor: "white",
                              border: "none",
                              marginTop: 10,
                              color: "#666",
                            }}
                          >
                            Beauty & Personal Care
                          </button>
                        </span>
                      </li>
                      <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-413">
                        <button
                          onClick={scrole3}
                          color="black"
                          style={{
                            backgroundColor: "white",
                            border: "none",
                            marginTop: 10,
                            color: "#666",
                          }}
                        >
                          Clothing, Shoes & Jewelry
                        </button>
                      </li>
                      <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-413">
                        <button
                          onClick={scrole4}
                          color="black"
                          style={{
                            backgroundColor: "white",
                            border: "none",
                            marginTop: 10,
                            color: "#666",
                          }}
                        >
                          Grocery & Gourmet Food
                        </button>
                      </li>
                    </ul>{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-9 col-sm-9 col-nav-menu mr-header-menu">
                <div className="col-header-menu">
                  <div
                    // style={{ marginTop: "50px" }}
                    className="primary-nav nav"
                  >
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2537 current_page_item menu-item-4580 active">
                        <Link href="/" style={{ color: "white" }}>
                          Home
                        </Link>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-186 dropdown is-mega-menu has-width">
                        <Link
                          href="/"
                          className="dropdown-toggle"
                          role="button"
                          style={{ color: "white" }}
                        >
                          Shop
                        </Link>
                        <ul style={{ width: 750 }} className="dropdown-submenu">
                          <li>
                            <div className="mega-menu-content">
                              <div className="row">
                                <div className="mr-col col-md-6">
                                  <div className="menu-item-mega">
                                    <Link
                                      href="/"
                                      className="dropdown-toggle"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      Woo Pages
                                    </Link>
                                    <div className="mega-menu-submenu">
                                      <ul className="sub-menu check">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-181">
                                          <Link href="/Card">
                                            Shopping Cart
                                          </Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-182">
                                          <Link href="/CheckOutPage">
                                            Checkout
                                          </Link>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4576">
                                          <Link href="/FaveroteItems">
                                            Wishlist
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-187 dropdown hasmenu">
                        <Link
                          href="#"
                          className="dropdown-toggle"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          style={{ color: "white" }}
                        >
                          Pages
                        </Link>
                        <ul className="dropdown-submenu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-179">
                            <Link href="/About">About Us</Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1984">
                            <Link href="/Contact">Contact</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>{" "}
                  </div>
                  <div className="header-bar topbar">
                    <div
                      id="custom_html-2"
                      className="widget_text widget widget_custom_html"
                    >
                      <div className="textwidget custom-html-widget">
                        {" "}
                        <Link href="/" style={{ color: "white" }}>
                          Sell On SNM Traders
                        </Link>
                      </div>
                    </div>
                    <div
                      id="custom_html-4"
                      className="widget_text widget widget_custom_html"
                    >
                      <div className="textwidget custom-html-widget">
                        <div className="mf-currency-widget">
                          <div className="widget-currency">
                            <span
                              className="current"
                              style={{ color: "white" }}
                            >
                              US Dollar
                            </span>
                            <ul>
                              <li className="actived">
                                <Link
                                  href="/"
                                  className="woocs_flag_view_item woocs_flag_view_item_current"
                                  data-currency="USD"
                                  style={{ color: "white" }}
                                >
                                  US Dollar
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="woocs_flag_view_item"
                                  data-currency="EUR"
                                >
                                  European Euro
                                </Link>
                              </li>
                            </ul>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="custom_html-5"
                      className="widget_text widget widget_custom_html"
                    ></div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu hidden-lg hidden-md">
          <div className="container">
            <div className="mobile-menu-row">
              {/* <a className="mf-toggle-menu" id="mf-toggle-menu" href="#">
                <i className="icon-menu" />
              </a> */}
              <div className="product-extra-search">
                <form className="products-search" method="get">
                  <div className="psearch-content">
                    <div className="product-cat">
                      <div className="product-cat-label no-cats">All</div>{" "}
                    </div>
                    <div
                      className={`search-wrapper ${isFixed ? "fixed" : ""}`}
                      style={
                        isFixed
                          ? {
                              position: "fixed",
                              top: 0,
                              backgroundColor: "white",
                              padding: 2,
                              margin: 0,
                              height: 60,
                              zIndex: 4,
                              width: "95%",
                            }
                          : {}
                      }
                    >
                      <input
                        type="text"
                        name="s"
                        className="search-field"
                        autoComplete="off"
                        placeholder="I'm shopping for..."
                        value={searchQuery}
                        onChange={handleSearch}
                        style={{ marginTop: 10 }}
                      />
                      <input
                        type="hidden"
                        name="post_type"
                        defaultValue="product"
                      />
                      <div className="search-results woocommerce" />
                      <button
                        type="submit"
                        className="search-submit mf-background-primary"
                        style={{ marginTop: 10, marginRight: 8 }}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>{" "}
            </div>
          </div>
        </div>
      </header>
      <div>
        {filteredElectronics.length > 0 ? (
          <Box
            sx={
              isFixed
                ? {
                    position: "fixed",
                    top: 55,
                    width: 360,
                    zIndex: 1,
                    padding: 1,
                    backgroundColor: "white",
                    boxShadow: 1,
                    height: 200,
                    overflow: "auto",
                  }
                : {
                    width: "47.2%",
                    position: "absolute",
                    top: { xl: 142, lg: 132, md: 194, sm: 266, xs: 266 },
                    left: { xl: 422, lg: 365, md: 285, sm: 150, xs: 95 },
                    zIndex: 1,
                    padding: 1,
                    backgroundColor: "white",
                    boxShadow: 1,
                  }
            }
          >
            {filteredElectronics.map((item) => (
              <Box
                key={item.Type}
                sx={{
                  display: "flex",
                  backgroundColor: "white",
                  width: "100%",
                  height: 100,
                }}
              >
                <img
                  height={80}
                  width={100}
                  src={item.Image}
                  alt="image of product"
                />
                <Box sx={{ padding: 1 }}>
                  <Typography
                    sx={{
                      fontSize: { md: 16, sm: 13 },
                      ":hover": { color: "#fcb900" },
                    }}
                  >
                    {item.Type}
                  </Typography>
                  <Rating
                    sx={{ fontSize: { md: 20, sm: 13 } }}
                    name="read-only"
                    value={item.StarRate}
                    readOnly
                  />
                  <Typography sx={{ fontSize: { md: 16, sm: 13 } }}>
                    ${item.Price}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          searchQuery.trim() !== "" && (
            <Typography
              sx={{
                width: "45.41%",
                position: "absolute",
                top: { lg: 131, md: 265, xs: 267 },
                left: { xl: 422, lg: 365, md: 285, xs: 95 },
                zIndex: 1,
                padding: 2,
                backgroundColor: "white",
                fontSize: 16,
                boxShadow: 1,
              }}
            >
              No Product Found
            </Typography>
          )
        )}
      </div>
    </div>
  );
};

export default header;
