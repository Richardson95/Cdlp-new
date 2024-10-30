import { MdOutlineMenu } from "react-icons/md";
import "./AreaTop.scss";
import { useContext } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";

const AreaTop = () => {
  const { openSidebar } = useContext(SidebarContext);

  return (
    <div className="top-area-container">
      <div className="top-bar">
        <MdOutlineMenu className="hamburger-icon" onClick={openSidebar} />
        <div className="top-bar-right">
          <div className="top-sections">
            <div className="whatsapp-connect">
              <FaWhatsapp className="whatsapp-icon" />
              <span>Connect on whatsapp</span>
              <IoIosArrowDown className="dropdown-icon" />
            </div>
            <div className="separator"></div>
            <div className="notification-wrapper">
              <IoNotificationsOutline className="notification-icon" />
            </div>
            <div className="profile-wrapper">
              <div className="profile-avatar">
                <span>P</span>
              </div>
              <IoIosArrowDown className="dropdown-icon" />
            </div>
          </div>
        </div>
      </div>
      <section className="content-area-top">
        <div className="area-top-l">
          <h2 className="area-top-title">Hello Peace</h2>
          <span className="wave-emoji">👋🏽</span>
        </div>
        <div className="area-top-r">
          <div className="register-link">
            <span>http://superjara.com/v/register/</span>
            <IoCopyOutline className="copy-icon" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaTop;
