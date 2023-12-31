import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import AboutMeSection from "./components/AboutMeSection";
import FilmsSection from "./components/FilmsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import ExperienceSection from "./components/ExperienceSection";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header/>
          <LandingSection />
          <AboutMeSection/>
          <ExperienceSection/>
          <FilmsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
