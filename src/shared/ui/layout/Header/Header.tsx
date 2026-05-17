import React from "react";
import { Logo } from '@shared/ui';
import { NAV_ITEMS } from "@shared/config/navigation";
import { IoMdMoon, IoIosSunny, IoMdMenu, IoMdClose } from "react-icons/io";
import { useHeader } from "./useHeader";
import "./header.css";

export const Header = (): React.JSX.Element => {
  const { isDark, isMenuOpen, toggleTheme, toggleMenu, scrollToSection } = useHeader();

  return (
    <header id="HeaderPage">
      <nav className={`header-nav-wrapper ${!isDark ? "WhiteNav" : 'DarkNav'} fixed w-full z-20 top-0 inset-s-0 items-center`}>
        <div className={`content-header ${isMenuOpen && (isDark ? 'header-mobile-dark' : 'header-mobile-light')} max-w-7xl flex flex-wrap items-center justify-between mx-auto`}>
         
          {/* Logo */}
          <a href="/" className="flex items-center LogoIcon" aria-label="Home">
            <Logo width={160} height={40} color="var(--text-app)" />
          </a>

          {/* Action area: Switch + Button of Mobile Menu */}
          <div className="flex md:order-2 space-x-3 items-center md:space-x-0 rtl:space-x-reverse">
            <div className="theme-switch">
              <input
                type="checkbox"
                id="toggle"
                className="theme-switch-checkbox"
                checked={isDark}
                onChange={toggleTheme}
              />
              <label htmlFor="toggle" className="theme-switch-label"></label>
              <span className="moonIcon">
                <IoMdMoon className="iconSwitch Moon" />
              </span>
              <span className="sunIcon">
                <IoIosSunny className="iconSwitch Sun" />
              </span>
            </div>

            <button
              onClick={toggleMenu}
              type="button"
              className={`${isDark ? "btnMenuMobileDark" : "btnOMenuMobile"} inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 md:hidden`}
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </button>
          </div>

          {/* MENU */}
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "block" : "hidden"}`} id="navbar-sticky">
            <ul className="navbar-nav flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    href={item.path}
                    data-scroll-nav={item.id}
                    onClick={(e) => scrollToSection(item.id, e)}
                    className={`ltr-05 py-2 px-3 nav__items text-gray-900 rounded ${isMenuOpen ? (isDark ? "hover:bg-gray-700" : "hover:bg-gray-100") : ""} md:p-0 ${isDark ? "text-white" : ''}`}
                  >
                    <span className="rolling-text">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};