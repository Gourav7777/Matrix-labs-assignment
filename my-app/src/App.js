import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import TokenAddress from "./Components/TokenAddress";
import Footer from "./Components/Footer";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("token");
  return (
    <>
      <Flex
        flexDirection={{ base: "column", md: "row" }} // Display components vertically on small screens, horizontally on medium and larger screens
        height="88vh"
        overflowY="auto"
      >
        <Sidebar setActiveSection={setActiveSection} />
        <TokenAddress activeSection={activeSection} />
      </Flex>
      <Footer />
    </>
  );
}

export default App;
