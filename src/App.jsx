import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/layout";
import DirectContractForm from "./pages/DirectContractForm/DirectContractForm";
import ViewJobs from "./pages/ViewJobs/ViewJobs";
import SingleJobDetails from "./pages/SingleJobDetails/SingleJobDetails";
import JobDeepView from "./pages/JobDeepView/JobDeepView";
import ReleasePayment from "./pages/ReleasePayment/ReleasePayment";
import JobUpdate from "./pages/JobUpdate/JobUpdate";
import AddUpdate from "./pages/AddUpdate/AddUpdate";
import MenuItem from "./components/MenuItem";

// Importing custom hooks and utility functions to modularize the logic for better separation of concerns
import { useWalletConnection } from "./functions/useWalletConnection"; // Manages wallet connection logic
import { useDropdown } from "./functions/useDropdown"; // Manages dropdown visibility and toggling
import { useHoverEffect } from "./functions/useHoverEffect"; // Manages hover states for radial buttons
import { useMobileDetection } from "./functions/useMobileDetection"; // Detects if the user is on a mobile device
import { formatWalletAddress } from "./functions/formatWalletAddress"; // Utility function to format wallet address
import { useButtonHover } from "./functions/useButtonHover"; // Custom hook for handling button hover events
import Work from "./pages/Work/Work";
import Notification from "./pages/Notification/Notification";
import Governance from "./pages/Governance/Governance";
import BrowseJobs from "./pages/BrowseJobs/BrowseJobs";
import BrowseTalent from "./pages/BrowseTalent/BrowseTalent";
import PostJob from "./pages/PostJob/PostJob";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";
import ProjectComplete from "./pages/ProjectComplete/ProjectComplete";
import ViewWork from "./pages/ViewWork/ViewWork";
import RaiseDispute from "./pages/RaiseDispute/RaiseDispute";

function MainPage() {
  // Using the useWalletConnection hook to handle wallet-related state and logic
  const { walletAddress, connectWallet, disconnectWallet } =
    useWalletConnection();

  // Using the useDropdown hook to manage dropdown visibility state
  const { dropdownVisible, toggleDropdown } = useDropdown();

  // Using the useHoverEffect hook to manage the button hover effects
  const {
    hovering,
    setHovering,
    buttonsVisible,
    setButtonsVisible,
    buttonFlex,
  } = useHoverEffect();

  // Detects if the user is on a mobile device
  const isMobile = useMobileDetection();

  // State to track if the core element is being hovered over
  const [coreHovered, setCoreHovered] = useState(false);

  // Hook from react-router-dom to handle navigation between pages
  const navigate = useNavigate();

  // Initializing hover effect logic for buttons using a custom hook
  useButtonHover();

  // Function to handle navigation to the whitepaper when selected in the dropdown menu
  const handleNavigation = () => {
    window.open(
      "https://drive.google.com/file/d/1tdpuAM3UqiiP_TKJMa5bFtxOG4bU_6ts/view",
      "_blank",
    );
  };

  return (
    <main className="container-home">
      {/* Conditional rendering of the mobile warning if the user is on a mobile device */}
      {isMobile && (
        <div
          className="mobile-warning"
          style={{
            height: "1000px",
            width: "100%",
            fontFamily: "Satoshi",
            fontSize: "25px",
          }}
        >
          {/* Header section for the mobile warning */}
          <div
            style={{
              height: "64px",
              width: "100%",
              borderBottom: "2px solid whitesmoke",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{ height: "25px", width: "180px" }}
              src="/Logo.jpg"
              alt="Openwork Logo"
              id="logo-home"
            />
          </div>
          <div id="warning-body">
            <img
              style={{ height: "80px", width: "80px" }}
              src="/screen.svg"
              alt="Openwork Logo"
              id="logo-home"
            />
            <h1 id="mobile-heading">Desktop Only Feature</h1>
            <p id="mobile-sub">
              This feature is currently not supported on mobile devices
            </p>
          </div>
        </div>
      )}

      {/* Radial menu section */}
      <div className="theCircle-home">
        <img src="/RadiantGlow.png" alt="Radiant Glow" id="radiantGlow-home" />

        {/* Core element with hover effects */}
        <div
          id="core-home"
          onMouseEnter={() => {
            setButtonsVisible(true);
            setCoreHovered(true);
          }}
          onMouseLeave={() => {
            setButtonsVisible(false);
            setCoreHovered(false);
          }}
        >
          <img src="/core.svg" alt="The Core" className="core-image" />
          <img
            src="/core-hovered2.svg"
            alt="The Core Hovered"
            className="core-image core-hovered-image"
          />
        </div>

        {/* Left button with hover functionality */}
        <MenuItem
          to="/work"
          id="buttonLeft-home"
          buttonsVisible={buttonsVisible}
          buttonFlex={buttonFlex}
          onMouseEnter={() => setButtonsVisible(true)} // Show buttons on hover
          onMouseLeave={() => setButtonsVisible(false)} // Hide buttons on hover out
          imgSrc="/radial-button.svg"
          iconSrc="/work.svg"
          text="Work"
        />


        {/* Right button with hover functionality */}
        <MenuItem
          to="/governance"
          id="buttonRight-home"
          buttonsVisible={buttonsVisible}
          buttonFlex={buttonFlex}
          onMouseEnter={() => setButtonsVisible(true)}
          onMouseLeave={() => setButtonsVisible(false)}
          imgSrc='/radial-button.svg'
          iconSrc='/governance.svg'
          text='Governance' 
        />

        {/* Hover text prompting user to hover over the radial menu */}
        <div
          id="hoverText-home"
          style={{ display: buttonFlex ? "none" : "flex" }}
        >
          Hover to get started
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<MainPage />} />
          <Route path="/notifications" element={<Notification/>} />
          <Route path="connect-wallet" element={<ConnectWallet/>} />
          <Route path="/work" element={<Work />} />
          <Route path="/governance" element={<Governance/>}/>
          <Route path="/browse-jobs" element={<BrowseJobs/>}/>
          <Route path="/browse-talent" element={<BrowseTalent/>}/>
          <Route path="/direct-contract" element={<DirectContractForm />} />
          <Route path="/post-job" element={<PostJob/>}/>
          <Route path="/view-jobs" element={<ViewJobs />} />
          <Route path="view-work/:jobId" element={<ViewWork/>}/>
          <Route path="/job-details/:jobId" element={<SingleJobDetails />} />
          <Route path="/job-deep-view/:jobId" element={<JobDeepView />} />
          <Route path="/release-payment/:jobId" element={<ReleasePayment />} />{" "}
          <Route path="/project-complete" element = {<ProjectComplete/>}/>
          <Route path="/job-update/:jobId" element={<JobUpdate />} />
          <Route path="/add-update/:jobId" element={<AddUpdate />} />
          <Route path="/raise-dispute/:jobId" element={<RaiseDispute/>}/>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
