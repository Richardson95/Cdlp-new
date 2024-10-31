import { MdOutlineMenu } from "react-icons/md";
import "./AreaTop.scss";
import { useContext, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";

const AreaTop = () => {
  const { openSidebar } = useContext(SidebarContext);
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);

  const phoneContacts = [
    { id: 1, number: '+1 234 567 8900' },
    { id: 2, number: '+1 987 654 3210' }
  ];

  return (
    <div className="top-area-container">
      <div className="top-bar">
        <MdOutlineMenu className="hamburger-icon" onClick={openSidebar} />
        <div className="top-bar-right">
          <div className="top-sections">
            <div className="whatsapp-dropdown-container">
              <div 
                className="whatsapp-connect"
                onMouseEnter={() => setIsWhatsappOpen(true)}
                onMouseLeave={() => setIsWhatsappOpen(false)}
              >
                <FaWhatsapp className="whatsapp-icon" />
                <span>Connect on whatsapp</span>
                <IoIosArrowDown className={`dropdown-icon ${isWhatsappOpen ? 'rotate' : ''}`} />
              </div>
              {isWhatsappOpen && (
                <div 
                  className="whatsapp-dropdown"
                  onMouseEnter={() => setIsWhatsappOpen(true)}
                  onMouseLeave={() => setIsWhatsappOpen(false)}
                >
                  {phoneContacts.map(contact => (
                    <a
                      key={contact.id}
                      href={`https://wa.me/${contact.number.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-dropdown-item"
                    >
                      <FaWhatsapp className="whatsapp-item-icon" />
                      <span>{contact.number}</span>
                    </a>
                  ))}
                </div>
              )}
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