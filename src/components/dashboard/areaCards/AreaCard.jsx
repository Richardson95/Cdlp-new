import React, { useState } from "react";

const StackedCoinsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="coins-icon"
  >
    <path
      d="M12 4C7.58172 4 4 5.79086 4 8C4 10.2091 7.58172 12 12 12C16.4183 12 20 10.2091 20 8C20 5.79086 16.4183 4 12 4Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 12C4 14.2091 7.58172 16 12 16C16.4183 16 20 14.2091 20 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 16C4 18.2091 7.58172 20 12 20C16.4183 20 20 18.2091 20 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WalletDashboard = () => {
  const [showBalance, setShowBalance] = useState(true);

  const formatBalance = (amount) => {
    if (!showBalance) return "••••••••";
    const baseAmount = "₦350,000,000.";
    return (
      <span>
        {baseAmount}
        <sup className="text-xs">00</sup>
      </span>
    );
  };

  return (
    <div className="wallet-dashboard">
      <div className="wallet-dashboard__header">
        <h2 className="wallet-title">My Wallets</h2>
        <a href="#" className="see-all">
          See all <span>→</span>
        </a>
      </div>

      <div className="wallet-dashboard__grid">
        {/* Wallet Balance Card */}
        <div className="card card--wallet">
          <div className="card__header">
            <div className="card__header-left">
              <div className="card__header-icon">
                <svg
                  className="wallet-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
                </svg>
              </div>
              <div className="card__header-title">
                <span>Wallet Balance</span>
                <button onClick={() => setShowBalance(!showBalance)}>
                  {showBalance ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <a href="#" className="card__header-history">
              Transaction history
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>

          <div className="card__balance">
            {formatBalance()}
          </div>

          <div className="card__actions">
            <button className="button button--outline wallet">
              <span>+</span>
              Fund Wallet
            </button>
            <button className="button button--primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Send Funds
            </button>
          </div>
        </div>

        {/* Cashback Balance Card */}
        <div className="card card--cashback">
          <div className="card__header">
            <div className="card__header-left">
              <div className="card__header-icon">
                <StackedCoinsIcon />
              </div>
              <div className="card__header-title">
                <span>Cashback Balance</span>
                <button onClick={() => setShowBalance(!showBalance)}>
                  {showBalance ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <a href="#" className="card__header-history">
              Transaction history
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>

          <div className="card__balance">
            {formatBalance()}
          </div>

          <div className="card__actions">
            <button className="button button--outline cashback">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Withdraw Funds
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;