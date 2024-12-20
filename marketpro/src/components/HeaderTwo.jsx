"use client";
import React, { useEffect, useState } from "react";
import query from "jquery";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "select2/dist/css/select2.min.css";
const HeaderTwo = ({ category }) => {
  let pathname = usePathname();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScroll(window.pageYOffset > 150);
      };

      // Attach the scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Initialize Select2
      const selectElement = query(".js-example-basic-single");
      selectElement.select2();

      // Cleanup function
      return () => {
        // Remove the scroll event listener
        window.removeEventListener("scroll", handleScroll);

        // Destroy Select2 instance if it exists
        if (selectElement.data("select2")) {
          selectElement.select2("destroy");
        }
      };
    }
  }, []);

  // Set the default language
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Set the default currency
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  // Mobile menu support
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  // Search control support
  const [activeSearch, setActiveSearch] = useState(false);
  const handleSearchToggle = () => {
    setActiveSearch(!activeSearch);
  };

  // category control support
  const [activeCategory, setActiveCategory] = useState(false);
  const handleCategoryToggle = () => {
    setActiveCategory(!activeCategory);
  };
  const [activeIndexCat, setActiveIndexCat] = useState(null);
  const handleCatClick = (index) => {
    setActiveIndexCat(activeIndexCat === index ? null : index);
  };

  return (
    <>
      <div className='overlay' />
      <div
        className={`side-overlay ${(menuActive || activeCategory) && "show"}`}
      />
      {/* ==================== Search Box Start Here ==================== */}

      <form action='#' className={`search-box ${activeSearch && "active"}`}>
        <button
          onClick={handleSearchToggle}
          type='button'
          className='search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1'
        >
          <i className='ph ph-x' />
        </button>
        <div className='container'>
          <div className='position-relative'>
            <input
              type='text'
              className='form-control py-16 px-24 text-xl rounded-pill pe-64'
              placeholder='Search for a product or brand'
            />
            <button
              type='submit'
              className='w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
            >
              <i className='ph ph-magnifying-glass' />
            </button>
          </div>
        </div>
      </form>
      {/* ==================== Search Box End Here ==================== */}
      {/* ==================== Mobile Menu Start Here ==================== */}
      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${
          menuActive && "active"
        }`}
      >
        <button
          onClick={() => {
            handleMenuToggle();
            setActiveIndex(null);
          }}
          type='button'
          className='close-button'
        >
          <i className='ph ph-x' />{" "}
        </button>
        <div className='mobile-menu__inner'>
          <Link href='/' className='mobile-menu__logo'>
            <img src='assets/images/logo/logo.png' alt='Logo' />
          </Link>
          <div className='mobile-menu__menu'>
            {/* Nav Menu Start */}
            <ul className='nav-menu flex-align nav-menu--mobile'>
              <li
                onClick={() => handleMenuClick(0)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 0 ? "d-block" : ""
                }`}
              >
                <Link href='#' className='nav-menu__link'>
                  Home
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 0 ? "open" : ""
                  }`}
                >
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      {" "}
                      Home Grocery
                    </Link>
                  </li>
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/index-two'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      {" "}
                      Home Electronics
                    </Link>
                  </li>
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/index-three'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      {" "}
                      Home Fashion
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                onClick={() => handleMenuClick(1)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 1 ? "d-block" : ""
                }`}
              >
                <Link href='#' className='nav-menu__link'>
                  Shop
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 1 ? "open" : ""
                  }`}
                >
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/shop'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      {" "}
                      Shop
                    </Link>
                  </li>
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/product-details'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      {" "}
                      Shop Details
                    </Link>
                  </li>
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/product-details-two'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      {" "}
                      Shop Details Two
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                onClick={() => handleMenuClick(2)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 2 ? "d-block" : ""
                }`}
              >
                <span className='badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4'>
                  New
                </span>
                <Link href='#' className='nav-menu__link'>
                  Pages
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 2 ? "open" : ""
                  }`}
                >
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/cart'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      {" "}
                      Cart
                    </Link>
                  </li>
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/wishlist'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      Wishlist
                    </Link>
                  </li>
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/checkout'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      Checkout
                    </Link>
                  </li>
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/become-seller'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      Become Seller
                    </Link>
                  </li>
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/account'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      Account
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                onClick={() => handleMenuClick(3)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 3 ? "d-block" : ""
                }`}
              >
                <span className='badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4'>
                  New
                </span>
                <Link href='#' className='nav-menu__link'>
                  Vendors
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 3 ? "open" : ""
                  }`}
                >
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/vendor'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      Vendors
                    </Link>
                  </li>
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/vendor-details'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      Vendor Details
                    </Link>
                  </li>
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/vendor-two'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      Vendors Two
                    </Link>
                  </li>
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/vendor-two-details'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      Vendors Two Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                onClick={() => handleMenuClick(4)}
                className={`on-hover-item nav-menu__item has-submenu ${
                  activeIndex === 4 ? "d-block" : ""
                }`}
              >
                <Link href='#' className='nav-menu__link'>
                  Blog
                </Link>
                <ul
                  className={`on-hover-dropdown common-dropdown nav-submenu scroll-sm ${
                    activeIndex === 4 ? "open" : ""
                  }`}
                >
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/blog'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      {" "}
                      Blog
                    </Link>
                  </li>
                  <li className='common-dropdown__item nav-submenu__item'>
                    <Link
                      onClick={() => setActiveIndex(null)}
                      href='/blog-details'
                      className='common-dropdown__link nav-submenu__link hover-bg-neutral-100'
                    >
                      {" "}
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-menu__item'>
                <Link href='/contact' className='nav-menu__link'>
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* Nav Menu End */}
          </div>
        </div>
      </div>
      {/* ==================== Mobile Menu End Here ==================== */}
      {/* ======================= Middle Header Two Start ========================= */}
      <header className='header-middle style-two bg-color-neutral'>
        <div className='container container-lg'>
          <nav className='header-inner flex-between'>
            {/* Logo Start */}
            <div className='logo'>
              <Link href='/' className='link'>
                <img src='assets/images/logo/logo-two.png' alt='Logo' />
              </Link>
            </div>
            {/* Logo End  */}
            {/* form Category Start */}
            <div className='flex-align gap-16'>
              <div className='select-dropdown-for-home-two d-lg-none d-block'>
                {/* Dropdown Select Start */}
                <ul className='header-top__right style-two flex-align flex-wrap'>
                  <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
                    {/* Display the selected language */}
                    <Link
                      href='#'
                      className='selected-text text-heading text-sm py-8'
                    >
                      {selectedLanguage}
                    </Link>
                    <ul className='selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleLanguageChange("English")}
                        >
                          <img
                            src='assets/images/thumbs/flag1.png'
                            alt='English'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          English
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleLanguageChange("Japan")}
                        >
                          <img
                            src='assets/images/thumbs/flag2.png'
                            alt='Japan'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          Japan
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleLanguageChange("French")}
                        >
                          <img
                            src='assets/images/thumbs/flag3.png'
                            alt='French'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          French
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleLanguageChange("Germany")}
                        >
                          <img
                            src='assets/images/thumbs/flag4.png'
                            alt='Germany'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          Germany
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleLanguageChange("Bangladesh")}
                        >
                          <img
                            src='assets/images/thumbs/flag6.png'
                            alt='Bangladesh'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          Bangladesh
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleLanguageChange("South Korea")}
                        >
                          <img
                            src='assets/images/thumbs/flag5.png'
                            alt='South Korea'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          South Korea
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
                    {/* Display the selected currency */}
                    <Link
                      href='#'
                      className='selected-text text-heading text-sm py-8'
                    >
                      {selectedCurrency}
                    </Link>
                    <ul className='selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleCurrencyChange("USD")}
                        >
                          <img
                            src='assets/images/thumbs/flag1.png'
                            alt='USD'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          USD
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleCurrencyChange("Yen")}
                        >
                          <img
                            src='assets/images/thumbs/flag2.png'
                            alt='Yen'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          Yen
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleCurrencyChange("Franc")}
                        >
                          <img
                            src='assets/images/thumbs/flag3.png'
                            alt='Franc'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          Franc
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleCurrencyChange("EURO")}
                        >
                          <img
                            src='assets/images/thumbs/flag4.png'
                            alt='EURO'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          EURO
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleCurrencyChange("BDT")}
                        >
                          <img
                            src='assets/images/thumbs/flag6.png'
                            alt='BDT'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          BDT
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleCurrencyChange("WON")}
                        >
                          <img
                            src='assets/images/thumbs/flag5.png'
                            alt='WON'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          WON
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* Dropdown Select End */}
              </div>
              <form
                action='#'
                className='flex-align flex-wrap form-location-wrapper'
              >
                <div className='search-category style-two d-flex h-48 search-form d-sm-flex d-none'>
                  <select
                    defaultValue={1}
                    className='js-example-basic-single border border-gray-200 border-end-0 rounded-0 border-0'
                    name='state'
                  >
                    <option value={1}>All Categories</option>
                    <option value={1}>Grocery</option>
                    <option value={1}>Breakfast &amp; Dairy</option>
                    <option value={1}>Vegetables</option>
                    <option value={1}>Milks and Dairies</option>
                    <option value={1}>Pet Foods &amp; Toy</option>
                    <option value={1}>Breads &amp; Bakery</option>
                    <option value={1}>Fresh Seafood</option>
                    <option value={1}>Fronzen Foods</option>
                    <option value={1}>Noodles &amp; Rice</option>
                    <option value={1}>Ice Cream</option>
                  </select>
                  <div className='search-form__wrapper position-relative'>
                    <input
                      type='text'
                      className='search-form__input common-input py-13 ps-16 pe-18 rounded-0 border-0'
                      placeholder='Search for a product or brand'
                    />
                  </div>
                  <button
                    type='submit'
                    className='bg-main-two-600 flex-center text-xl text-white flex-shrink-0 w-48 hover-bg-main-two-700 d-lg-flex d-none'
                  >
                    <i className='ph ph-magnifying-glass' />
                  </button>
                </div>
              </form>
            </div>
            {/* form Category start */}
            {/* Header Middle Right start */}
            <div className='header-right flex-align d-lg-block d-none'>
              <div className='header-two-activities flex-align flex-wrap gap-32'>
                <button
                  type='button'
                  className='flex-align search-icon d-lg-none d-flex gap-4 item-hover-two'
                >
                  <span className='text-2xl text-white d-flex position-relative item-hover__text'>
                    <i className='ph ph-magnifying-glass' />
                  </span>
                </button>
                <Link
                  href='/account'
                  className='flex-align flex-column gap-8 item-hover-two'
                >
                  <span className='text-2xl text-white d-flex position-relative item-hover__text'>
                    <i className='ph ph-user' />
                  </span>
                  <span className='text-md text-white item-hover__text d-none d-lg-flex'>
                    Profile
                  </span>
                </Link>
                <Link
                  href='/wishlist'
                  className='flex-align flex-column gap-8 item-hover-two'
                >
                  <span className='text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text'>
                    <i className='ph ph-heart' />
                    <span className='w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4'>
                      2
                    </span>
                  </span>
                  <span className='text-md text-white item-hover__text d-none d-lg-flex'>
                    Wishlist
                  </span>
                </Link>
                <Link
                  href='/cart'
                  className='flex-align flex-column gap-8 item-hover-two'
                >
                  <span className='text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text'>
                    <i className='ph-fill ph-shuffle' />
                    <span className='w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4'>
                      2
                    </span>
                  </span>
                  <span className='text-md text-white item-hover__text d-none d-lg-flex'>
                    Compare
                  </span>
                </Link>
                <Link
                  href='/cart'
                  className='flex-align flex-column gap-8 item-hover-two'
                >
                  <span className='text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text'>
                    <i className='ph ph-shopping-cart-simple' />
                    <span className='w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4'>
                      2
                    </span>
                  </span>
                  <span className='text-md text-white item-hover__text d-none d-lg-flex'>
                    Cart
                  </span>
                </Link>
              </div>
            </div>
            {/* Header Middle Right End  */}
          </nav>
        </div>
      </header>
      {/* ======================= Middle Header Two End ========================= */}
      {/* ==================== Header Two Start Here ==================== */}
      <header
        className={`header bg-white border-bottom border-gray-100 ${
          scroll && "fixed-header"
        }`}
      >
        <div className='container container-lg'>
          <nav className='header-inner d-flex justify-content-between gap-8'>
            <div className='flex-align menu-category-wrapper'>
              {/* Category Dropdown Start */}
              <div
                className={`category-two ${
                  category === false ? "d-block" : "d-none"
                } `}
              >
                <button
                  onClick={handleCategoryToggle}
                  type='button'
                  className='category__button flex-align gap-8 fw-medium bg-main-two-600 p-16 text-white'
                >
                  <span className='icon text-2xl d-xs-flex d-none'>
                    <i className='ph ph-dots-nine' />
                  </span>
                  <span className='d-sm-flex d-none'>All</span> Categories
                  <span className='arrow-icon text-xl d-flex'>
                    <i className='ph ph-caret-down' />
                  </span>
                </button>
                <div
                  className={`responsive-dropdown cat common-dropdown d-lg-none d-block nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100 ${
                    activeCategory && "active"
                  }`}
                >
                  <button
                    onClick={() => {
                      handleCategoryToggle();
                      setActiveIndexCat(null);
                    }}
                    type='button'
                    className='close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex'
                  >
                    <i className='ph ph-x' />{" "}
                  </button>
                  <div className='logo px-16 d-lg-none d-block'>
                    <Link href='/' className='link'>
                      <img src='assets/images/logo/logo.png' alt='Logo' />
                    </Link>
                  </div>
                  <ul className='scroll-sm p-0 py-8 overflow-y-auto'>
                    <li
                      onClick={() => handleCatClick(0)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 0 ? "active" : ""
                      }`}
                    >
                      <Link
                        onClick={() => setActiveIndexCat(null)}
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span>Cell Phone</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 0 ? "open" : ""
                        }`}
                      >
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Cell Phone
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Samsung</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Iphone</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Vivo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Oppo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Itel</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(1)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 1 ? "active" : ""
                      }`}
                    >
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span>Wear</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 1 ? "open" : ""
                        }`}
                      >
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Wear
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Samsung</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Iphone</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Vivo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Oppo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Itel</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(2)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 2 ? "active" : ""
                      }`}
                    >
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span>Computer</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 2 ? "open" : ""
                        }`}
                      >
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Computer
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Samsung</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Iphone</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Vivo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Oppo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Itel</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(3)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 3 ? "active" : ""
                      }`}
                    >
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span>Headphone</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 3 ? "open" : ""
                        }`}
                      >
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Headphone
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Samsung</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Iphone</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Vivo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Oppo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Itel</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(4)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 4 ? "active" : ""
                      }`}
                    >
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span>Smart Screen</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 4 ? "open" : ""
                        }`}
                      >
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Smart Screen
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Samsung</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Iphone</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Vivo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Oppo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Itel</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(5)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 5 ? "active" : ""
                      }`}
                    >
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span>Smart Home</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 5 ? "open" : ""
                        }`}
                      >
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Smart Home
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Samsung</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Iphone</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Vivo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Oppo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Itel</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(6)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 6 ? "active" : ""
                      }`}
                    >
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span>Digital Accessories</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 6 ? "open" : ""
                        }`}
                      >
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Digital Accessories
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Samsung</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Iphone</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Vivo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Oppo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Itel</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(7)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 7 ? "active" : ""
                      }`}
                    >
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span> Value Added Services</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 7 ? "open" : ""
                        }`}
                      >
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          {" "}
                          Value Added Services
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Samsung</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Iphone</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Vivo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Oppo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Itel</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(8)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 8 ? "active" : ""
                      }`}
                    >
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span>Car Products</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 8 ? "open" : ""
                        }`}
                      >
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Car Products
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Samsung</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Iphone</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Vivo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Oppo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Itel</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(9)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 9 ? "active" : ""
                      }`}
                    >
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span>Ecological Products</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 9 ? "open" : ""
                        }`}
                      >
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Ecological Products
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Samsung</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Iphone</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Vivo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Oppo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Itel</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(10)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 10 ? "active" : ""
                      }`}
                    >
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span>Flat</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 10 ? "open" : ""
                        }`}
                      >
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Flat
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Samsung</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Iphone</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Vivo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Oppo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Itel</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(11)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 11 ? "active" : ""
                      }`}
                    >
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span>Commercial Terminal</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 11 ? "open" : ""
                        }`}
                      >
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Commercial Terminal
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Samsung</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Iphone</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Vivo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Oppo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Itel</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(12)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 12 ? "active" : ""
                      }`}
                    >
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span>Headphone</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 12 ? "open" : ""
                        }`}
                      >
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Headphone
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Samsung</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Iphone</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Vivo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Oppo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Itel</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li
                      onClick={() => handleCatClick(13)}
                      className={`has-submenus-submenu ${
                        activeIndexCat === 13 ? "active" : ""
                      }`}
                    >
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span>Smart Screen</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div
                        className={`submenus-submenu py-16 ${
                          activeIndexCat === 13 ? "open" : ""
                        }`}
                      >
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Smart Screen
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Samsung</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Iphone</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Vivo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Oppo</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Itel</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Realme</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`category main  on-hover-item bg-main-600 text-white ${
                  category === true ? "d-block" : "d-none"
                }`}
              >
                <button
                  type='button'
                  className='category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100 text-white'
                >
                  <span className='icon text-2xl d-xs-flex d-none'>
                    <i className='ph ph-dots-nine' />
                  </span>
                  <span className='d-sm-flex d-none'>All</span> Categories
                  <span className='arrow-icon text-xl d-flex'>
                    <i className='ph ph-caret-down' />
                  </span>
                </button>
                <div className='responsive-dropdown on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper'>
                  <button
                    type='button'
                    className='close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex'
                  >
                    <i className='ph ph-x' />{" "}
                  </button>
                  <div className='logo px-16 d-lg-none d-block'>
                    <Link href='/' className='link'>
                      <img src='assets/images/logo/logo.png' alt='Logo' />
                    </Link>
                  </div>
                  <ul className='scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto'>
                    <li className='has-submenus-submenu'>
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span className='text-xl d-flex'>
                          <i className='ph ph-carrot' />
                        </span>
                        <span>Vegetables &amp; Fruit</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div className='submenus-submenu py-16'>
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Vegetables &amp; Fruit
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Potato &amp; Tomato</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Cucumber &amp; Capsicum</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Leafy Vegetables</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Root Vegetables</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Beans &amp; Okra</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Cabbage &amp; Cauliflower</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Gourd &amp; Drumstick</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Specialty</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className='has-submenus-submenu'>
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span className='text-xl d-flex'>
                          <i className='ph ph-brandy' />
                        </span>
                        <span>Beverages</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div className='submenus-submenu py-16'>
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Beverages
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>Soda &amp; Cocktail Mix </Link>
                          </li>
                          <li>
                            <Link href='/shop'>
                              {" "}
                              Sports &amp; Energy Drinks
                            </Link>
                          </li>
                          <li>
                            <Link href='/shop'> Non Alcoholic Drinks</Link>
                          </li>
                          <li>
                            <Link href='/shop'> Packaged Water </Link>
                          </li>
                          <li>
                            <Link href='/shop'> Spring Water</Link>
                          </li>
                          <li>
                            <Link href='/shop'> Flavoured Water </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className='has-submenus-submenu'>
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span className='text-xl d-flex'>
                          <i className='ph ph-brandy' />
                        </span>
                        <span>Meats &amp; Seafood</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div className='submenus-submenu py-16'>
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Meats &amp; Seafood
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'> Fresh Meat </Link>
                          </li>
                          <li>
                            <Link href='/shop'> Frozen Meat</Link>
                          </li>
                          <li>
                            <Link href='/shop'> Marinated Meat</Link>
                          </li>
                          <li>
                            <Link href='/shop'> Fresh &amp; Frozen Meat</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className='has-submenus-submenu'>
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span className='text-xl d-flex'>
                          <i className='ph ph-brandy' />
                        </span>
                        <span>Breakfast &amp; Dairy</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div className='submenus-submenu py-16'>
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Breakfast &amp; Dairy
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'> Oats &amp; Porridge</Link>
                          </li>
                          <li>
                            <Link href='/shop'> Kids Cereal</Link>
                          </li>
                          <li>
                            <Link href='/shop'> Muesli</Link>
                          </li>
                          <li>
                            <Link href='/shop'> Flakes</Link>
                          </li>
                          <li>
                            <Link href='/shop'> Granola &amp; Cereal Bars</Link>
                          </li>
                          <li>
                            <Link href='/shop'> Instant Noodles</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className='has-submenus-submenu'>
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span className='text-xl d-flex'>
                          <i className='ph ph-brandy' />
                        </span>
                        <span>Frozen Foods</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div className='submenus-submenu py-16'>
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Frozen Foods
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'> Instant Noodles </Link>
                          </li>
                          <li>
                            <Link href='/shop'> Hakka Noodles</Link>
                          </li>
                          <li>
                            <Link href='/shop'> Cup Noodles</Link>
                          </li>
                          <li>
                            <Link href='/shop'> Vermicelli</Link>
                          </li>
                          <li>
                            <Link href='/shop'> Instant Pasta</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className='has-submenus-submenu'>
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span className='text-xl d-flex'>
                          <i className='ph ph-brandy' />
                        </span>
                        <span>Biscuits &amp; Snacks</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div className='submenus-submenu py-16'>
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Biscuits &amp; Snacks
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'> Salted Biscuits </Link>
                          </li>
                          <li>
                            <Link href='/shop'> Marie, Health, Digestive</Link>
                          </li>
                          <li>
                            <Link href='/shop'>
                              {" "}
                              Cream Biscuits &amp; Wafers{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href='/shop'>
                              {" "}
                              Glucose &amp; Milk biscuits
                            </Link>
                          </li>
                          <li>
                            <Link href='/shop'> Cookies</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className='has-submenus-submenu'>
                      <Link
                        href='#'
                        className='text-gray-500 text-15 py-12 px-16 flex-align gap-8 rounded-0'
                      >
                        <span className='text-xl d-flex'>
                          <i className='ph ph-brandy' />
                        </span>
                        <span>Grocery &amp; Staples</span>
                        <span className='icon text-md d-flex ms-auto'>
                          <i className='ph ph-caret-right' />
                        </span>
                      </Link>
                      <div className='submenus-submenu py-16'>
                        <h6 className='text-lg px-16 submenus-submenu__title'>
                          Grocery &amp; Staples
                        </h6>
                        <ul className='submenus-submenu__list max-h-300 overflow-y-auto scroll-sm'>
                          <li>
                            <Link href='/shop'>
                              {" "}
                              Lemon, Ginger &amp; Garlic{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href='/shop'> Indian &amp; Exotic Herbs</Link>
                          </li>
                          <li>
                            <Link href='/shop'> Orangic Vegetables</Link>
                          </li>
                          <li>
                            <Link href='/shop'>Orangic Fruits </Link>
                          </li>
                          <li>
                            <Link href='/shop'> Orangic Dry Fruits</Link>
                          </li>
                          <li>
                            <Link href='/shop'> Orangic Dals &amp; pulses</Link>
                          </li>
                          <li>
                            <Link href='/shop'>
                              {" "}
                              Orangic Millet &amp; Flours
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Category Dropdown End  */}
              {/* Menu Start  */}
              <div className='header-menu d-lg-block d-none'>
                {/* Nav Menu Start */}
                <ul className='nav-menu flex-align '>
                  <li className='on-hover-item nav-menu__item has-submenu'>
                    <Link href='#' className='nav-menu__link'>
                      Home
                    </Link>
                    <ul className='on-hover-dropdown common-dropdown nav-submenu scroll-sm'>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/" && "activePage"
                          } `}
                        >
                          {" "}
                          Home Grocery
                        </Link>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/index-two'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/index-two" && "activePage"
                          } `}
                        >
                          {" "}
                          Home Electronics
                        </Link>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/index-three'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/index-three" && "activePage"
                          } `}
                        >
                          {" "}
                          Home Fashion
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='on-hover-item nav-menu__item has-submenu'>
                    <Link href='#' className='nav-menu__link'>
                      Shop
                    </Link>
                    <ul className='on-hover-dropdown common-dropdown nav-submenu scroll-sm'>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/shop'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/shop" && "activePage"
                          } `}
                        >
                          Shop
                        </Link>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/product-details'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/product-details" && "activePage"
                          } `}
                        >
                          {" "}
                          Shop Details
                        </Link>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/product-details-two'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/product-details-two" && "activePage"
                          } `}
                        >
                          {" "}
                          Shop Details Two
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='on-hover-item nav-menu__item has-submenu'>
                    <span className='badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4'>
                      New
                    </span>
                    <Link href='#' className='nav-menu__link'>
                      Pages
                    </Link>
                    <ul className='on-hover-dropdown common-dropdown nav-submenu scroll-sm'>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/cart'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/cart" && "activePage"
                          } `}
                        >
                          Cart
                        </Link>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/wishlist'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/wishlist" && "activePage"
                          } `}
                        >
                          Wishlist
                        </Link>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/checkout'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/checkout" && "activePage"
                          } `}
                        >
                          Checkout
                        </Link>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/become-seller'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/become-seller" && "activePage"
                          } `}
                        >
                          Become Seller
                        </Link>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/account'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/account" && "activePage"
                          } `}
                        >
                          Account
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='on-hover-item nav-menu__item has-submenu'>
                    <span className='badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4'>
                      New
                    </span>
                    <Link href='#' className='nav-menu__link'>
                      Vendors
                    </Link>
                    <ul className='on-hover-dropdown common-dropdown nav-submenu scroll-sm'>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/vendor'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/vendor" && "activePage"
                          } `}
                        >
                          Vendor
                        </Link>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/vendor-details'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/vendor-details" && "activePage"
                          } `}
                        >
                          Vendor Details
                        </Link>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/vendor-two'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/vendor-two" && "activePage"
                          } `}
                        >
                          Vendor Two
                        </Link>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/vendor-two-details'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/vendor-two-details" && "activePage"
                          } `}
                        >
                          Vendor Two Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='on-hover-item nav-menu__item has-submenu'>
                    <Link href='#' className='nav-menu__link'>
                      Blog
                    </Link>
                    <ul className='on-hover-dropdown common-dropdown nav-submenu scroll-sm'>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/blog'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/blog" && "activePage"
                          } `}
                        >
                          Blog
                        </Link>
                      </li>
                      <li className='common-dropdown__item nav-submenu__item'>
                        <Link
                          href='/blog-details'
                          scroll={false}
                          className={`common-dropdown__link nav-submenu__link hover-bg-neutral-100 ${
                            pathname == "/blog-details" && "activePage"
                          } `}
                        >
                          {" "}
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-menu__item'>
                    <Link
                      href='/contact'
                      scroll={false}
                      className={`nav-menu__link ${
                        pathname == "/contact" && "activePage"
                      } `}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                {/* Nav Menu End */}
              </div>
              {/* Menu End  */}
            </div>
            {/* Header Right start */}
            <div className='header-right flex-align'>
              <div className='select-dropdown-for-home-two d-lg-block d-none'>
                {/* Dropdown Select Start */}
                <ul className='header-top__right style-two flex-align flex-wrap'>
                  <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
                    {/* Display the selected language */}
                    <Link
                      href='#'
                      className='selected-text text-heading text-sm py-8'
                    >
                      {selectedLanguage}
                    </Link>
                    <ul className='selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleLanguageChange("English")}
                        >
                          <img
                            src='assets/images/thumbs/flag1.png'
                            alt='English'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          English
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleLanguageChange("Japan")}
                        >
                          <img
                            src='assets/images/thumbs/flag2.png'
                            alt='Japan'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          Japan
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleLanguageChange("French")}
                        >
                          <img
                            src='assets/images/thumbs/flag3.png'
                            alt='French'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          French
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleLanguageChange("Germany")}
                        >
                          <img
                            src='assets/images/thumbs/flag4.png'
                            alt='Germany'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          Germany
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleLanguageChange("Bangladesh")}
                        >
                          <img
                            src='assets/images/thumbs/flag6.png'
                            alt='Bangladesh'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          Bangladesh
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleLanguageChange("South Korea")}
                        >
                          <img
                            src='assets/images/thumbs/flag5.png'
                            alt='South Korea'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          South Korea
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white'>
                    {/* Display the selected currency */}
                    <Link
                      href='#'
                      className='selected-text text-heading text-sm py-8'
                    >
                      {selectedCurrency}
                    </Link>
                    <ul className='selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8'>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleCurrencyChange("USD")}
                        >
                          <img
                            src='assets/images/thumbs/flag1.png'
                            alt='USD'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          USD
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleCurrencyChange("Yen")}
                        >
                          <img
                            src='assets/images/thumbs/flag2.png'
                            alt='Yen'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          Yen
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleCurrencyChange("Franc")}
                        >
                          <img
                            src='assets/images/thumbs/flag3.png'
                            alt='Franc'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          Franc
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleCurrencyChange("EURO")}
                        >
                          <img
                            src='assets/images/thumbs/flag4.png'
                            alt='EURO'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          EURO
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleCurrencyChange("BDT")}
                        >
                          <img
                            src='assets/images/thumbs/flag6.png'
                            alt='BDT'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          BDT
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='#'
                          className='hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0'
                          onClick={() => handleCurrencyChange("WON")}
                        >
                          <img
                            src='assets/images/thumbs/flag5.png'
                            alt='WON'
                            className='w-16 h-12 rounded-4 border border-gray-100'
                          />
                          WON
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* Dropdown Select End */}
              </div>
              <div className='me-8 d-lg-none d-block'>
                <div className='header-two-activities flex-align flex-wrap gap-32'>
                  <button
                    onClick={handleSearchToggle}
                    type='button'
                    className='flex-align search-icon d-lg-none d-flex gap-4 item-hover-two'
                  >
                    <span className='text-2xl text-white d-flex position-relative item-hover__text'>
                      <i className='ph ph-magnifying-glass' />
                    </span>
                  </button>
                  <Link
                    href='/account'
                    className='flex-align flex-column gap-8 item-hover-two'
                  >
                    <span className='text-2xl text-white d-flex position-relative item-hover__text'>
                      <i className='ph ph-user' />
                    </span>
                    <span className='text-md text-white item-hover__text d-none d-lg-flex'>
                      Profile
                    </span>
                  </Link>
                  <Link
                    href='/wishlist'
                    className='flex-align flex-column gap-8 item-hover-two'
                  >
                    <span className='text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text'>
                      <i className='ph ph-heart' />
                      <span className='w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4'>
                        2
                      </span>
                    </span>
                    <span className='text-md text-white item-hover__text d-none d-lg-flex'>
                      Wishlist
                    </span>
                  </Link>
                  <Link
                    href='/cart'
                    className='flex-align flex-column gap-8 item-hover-two'
                  >
                    <span className='text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text'>
                      <i className='ph-fill ph-shuffle' />
                      <span className='w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4'>
                        2
                      </span>
                    </span>
                    <span className='text-md text-white item-hover__text d-none d-lg-flex'>
                      Compare
                    </span>
                  </Link>
                  <Link
                    href='/cart'
                    className='flex-align flex-column gap-8 item-hover-two'
                  >
                    <span className='text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text'>
                      <i className='ph ph-shopping-cart-simple' />
                      <span className='w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4'>
                        2
                      </span>
                    </span>
                    <span className='text-md text-white item-hover__text d-none d-lg-flex'>
                      Cart
                    </span>
                  </Link>
                </div>
              </div>
              <button
                onClick={handleMenuToggle}
                type='button'
                className='toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex'
              >
                {" "}
                <i className='ph ph-list' />{" "}
              </button>
            </div>
            {/* Header Right End  */}
          </nav>
        </div>
      </header>
      {/* ==================== Header End Here ==================== */}
    </>
  );
};

export default HeaderTwo;
