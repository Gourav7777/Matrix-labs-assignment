import React from "react";
import vector from "../Assets/Vector.png";
import fluent from "../Assets/fluent.png";
import ic from "../Assets/ic.png";
import facebook from "../Assets/facebook.png";
import linkedin from "../Assets/linkedin.png";
import twitter from "../Assets/twitter.png";
import {
  Box,
  Flex,
  Image,
  Text,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("token"); // 'token' for default active section

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const [isLargerThanMedium] = useMediaQuery("(min-width: 48em)");

  return (
    <>
      {isLargerThanMedium && (
        <Box
          border="1px solid black"
          height="90vh"
          flexShrink="0"
          borderRadius="0px 32px 32px 0px"
          background="#292929"
          textAlign="center"
          position="fixed"
          left="0"
          top="0"
          width="18%"
        >
          <div
            style={{
              marginRight: "50px",
            }}
          >
            <Flex
              color="rgba(255, 255, 255, 0.70)"
              fontFamily="Pacifico"
              fontSize="24px"
              fontStyle="normal"
              fontWeight="400"
              gap="4"
              lineHeight="normal"
              alignItems="center"
              justifyContent="center"
              flexDirection="row"
              height="100%"
              marginTop="5"
              marginBottom="3"
              width="100%"
            >
              <img src={vector} alt="" style={{}} />
              <Text>NFTify</Text>
            </Flex>

            <Flex
              color="var(--cultured-grey, #F7F9F9)"
              fontFamily="Work Sans"
              fontSize="20px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="28px"
              alignItems="center"
              gap="4"
              justifyContent="center"
              flexDirection="row"
              height="100%"
              marginBottom="3"
              width="100%"
              marginLeft="6"
              bg={activeSection === "token" ? "#F30050" : ""}
              cursor="pointer"
              onClick={() => handleSectionClick("token")}
            >
              <img src={ic} alt="" />
              <Text>Token Address</Text>
            </Flex>
            <Flex
              color="var(--cultured-grey, #F7F9F9)"
              fontFamily="Work Sans"
              fontSize="20px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="28px"
              alignItems="center"
              justifyContent="center"
              flexDirection="row"
              height="100%"
              width="100%"
              gap="4"
              marginLeft="3"
              bg={activeSection === "pair" ? "#F30050" : ""}
              cursor="pointer"
              onClick={() => handleSectionClick("pair")}
            >
              <img src={fluent} alt="" />
              <Text>Pair Address</Text>
            </Flex>

            {/* <Flex
     color="var(--cultured-grey, #F7F9F9)"
     fontFamily="Work Sans"
     fontSize="20px"
     fontStyle="normal"
     fontWeight="600"
     lineHeight="28px"
     alignItems="center"
     gap='4'
      justifyContent="center" 
      flexDirection="row" 
      height="100%" 
      marginBottom= '3'
      width='100%'
      marginLeft='6'
    >
      <img src={ic} alt=""  />
      <Text>Token Address</Text>
    </Flex>
    <Flex
      
      color="var(--cultured-grey, #F7F9F9)"
        fontFamily="Work Sans"
        fontSize="20px"
        fontStyle="normal"
        fontWeight="400"
        lineHeight="28px"
      alignItems="center"
      justifyContent="center" 
      flexDirection="row" 
      height="100%" 
      width='100%'
      gap='4'
      marginLeft='3'
      >
      <img src={fluent} alt=""   />
      <Text>Pair Address</Text>
    </Flex> */}
          </div>

          <Flex
            justifyContent="center"
            alignItems="flex-end"
            marginTop="300px"
            marginRight="20px"
          >
            <Center>
              <Image src={facebook} alt="Facebook" boxSize="25px" mx="2" />
              <Image src={linkedin} alt="LinkedIn" boxSize="25px" mx="2" />
              <Image src={twitter} alt="Twitter" boxSize="25px" mx="2" />
            </Center>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
