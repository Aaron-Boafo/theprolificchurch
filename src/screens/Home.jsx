import Citation from "../components/Home/Citation";
import Feature from "../components/Home/feature";
import Footer from "../components/Home/footer";
import GroupPic from "../components/Home/group";
import Header from "../components/Home/header";
import Hero from "../components/Home/hero";
import Schedule from "../components/Home/schedule";
import { useState } from "react";
import ThemeAlert from "../components/ThemeAlert";

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleRegisterClick = () => {
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div class="bg-white relative font-display text-zinc-900 min-h-screen">
      {showAlert && (
        <ThemeAlert
          targetDate="2025-12-23T08:00:00"
          programName="Hagiazo 2025"
          handleClose={handleAlertClose}
        />
      )}

      <div class="relative flex w-full flex-col  overflow-x-hidden">
        <Header onRegisterClick={handleRegisterClick} />

        <main class="flex-grow">
          <Hero onRegisterClick={handleRegisterClick} />
          <Feature />
          <GroupPic />
          <Schedule />
          <Citation onRegisterClick={handleRegisterClick} />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Home;
