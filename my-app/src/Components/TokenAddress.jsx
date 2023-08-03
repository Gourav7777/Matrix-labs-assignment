import React, { useEffect } from "react";
import backgrounddImage from "../Assets/Rectangle.png";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Button,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";
const TokenAddress = ({ activeSection }) => {
  const [isLargerThanMedium] = useMediaQuery("(min-width: 48em)");

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [endpoint, setEndpoint] = useState(
    "0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
  );
  let timeout;

  const handleDebounce = (query) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fetchData(query);
    }, 500);
  };

  const fetchData = async (query) => {
    try {
      const response = await axios.get(
        `https://api.dexscreener.com/latest/dex/search/?q=${query}`
      );
      //   setData(response.data);
      console.log(response.data.pairs);
      const sortedData = response.data.pairs.sort(
        (a, b) => b.priceUsd - a.priceUsd
      );

      setData(sortedData);
      //   setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    handleDebounce(event.target.value);
  };

  const getData = async () => {
    const endpoint =
      activeSection === "token"
        ? "0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
        : "bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae";
    const url =
      activeSection === "token"
        ? `https://api.dexscreener.com/latest/dex/tokens/${endpoint}`
        : `https://api.dexscreener.com/latest/dex/pairs/${endpoint}`;
    let res = await fetch(`${url}`);
    res = await res.json();
    let x = res.pairs;
    setData(x);

    //   console.log(res.pairs)
  };

  useEffect(() => {
    getData();
  }, [activeSection]);

  return (
    <Box
      width={{ base: "100%", md: "82%" }}
      height="88vh"
      backgroundImage={`url(${backgrounddImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      paddingRight={{ base: "10px", md: "30px" }}
      paddingLeft={{ base: "10px", md: "30px" }}
      overflowY="auto"
      marginLeft={{ base: "0", md: "18%" }}
    >
      <Flex
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        border="0px solid white"
        height="100px"
        color="var(--cultured-grey, #F7F9F9)"
        position="sticky"
        top="0"
        zIndex="1"
      >
        <InputGroup
          // width='30%' justifyContent="flex-start"
          width={isLargerThanMedium ? "30%" : "100%"}
          justifyContent={isLargerThanMedium ? "flex-start" : "center"}
        >
          <Input
            type="text"
            placeholder="Search"
            borderRadius="full"
            color="var(--cultured-grey, #F7F9F9)"
            fontFamily="Poppins"
            fontSize="18px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="normal"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <InputRightElement width="6rem" height="100%" pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputRightElement>
        </InputGroup>

        {isLargerThanMedium ? (
          <Button
            justifyContent="flex-end"
            borderRadius="20px"
            background="linear-gradient(131deg, #7C0F35 0%, #581266 100%)"
            color="var(--cultured-grey, #F7F9F9)"
            cursor="pointer"
          >
            Connect
          </Button>
        ) : null}
      </Flex>

      <Box
        border="0px solid white"
        height="50px"
        paddingRight="30px"
        paddingLeft="30px"
        display="flex"
        justifyContent="flex-start"
        color="var(--cultured-grey, #F7F9F9)"
        fontFamily="Work Sans"
        fontSize="24px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="28px"
      >
        <Text alignSelf="flex-start">Token Search Results</Text>
      </Box>

      <Flex
        border="0px solid white"
        height="350px"
        paddingRight="30px"
        paddingLeft="30px"
        flexDirection="column"
        color="white"
        gap={5}
      >
        {data.map((el, i) => {
          return (
            i < 10 && (
              <Flex flexDirection={{ base: "column", md: "row" }} gap={5}>
                <Box
                  height="170px"
                  borderWidth="1px"
                  borderColor="gray.400"
                  display="flex"
                  flexDirection="column"
                  gap="3"
                  padding="10px"
                  borderRadius="10px"
                  background="#390554"
                  width={{ base: "80%", md: "26%" }}
                >
                  <Text
                    alignSelf="flex-start"
                    fontFamily="Poppins"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="normal"
                    marginLeft="30px"
                  >
                    Basic Info
                  </Text>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",

                      fontFamily: "Poppins",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <p>Pair created at</p>
                    <p>{el.pairCreatedAt}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "50px",
                      marginLeft: "30px",
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <p>Symbol</p>
                    <p>{el.baseToken.symbol}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "50px",
                      marginLeft: "10px",
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <p>Dex ID</p>
                    <p>{el.dexId}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",

                      fontFamily: "Poppins",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <p>Pair Address</p>
                    <p>{el.pairAddress.slice(0, 10)}...</p>
                  </div>
                </Box>

                <Box
                  height="170px"
                  borderWidth="1px"
                  borderColor="gray.400"
                  display="flex"
                  flexDirection="column"
                  gap="3"
                  padding="10px"
                  borderRadius="10px"
                  background="#390554"
                  width={{ base: "80%", md: "26%" }}
                >
                  <Text
                    alignSelf="flex-start"
                    fontFamily="Poppins"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="normal"
                    marginLeft="30px"
                  >
                    Base Token
                  </Text>

                  <div
                    style={{
                      display: "flex",
                      gap: "50px",
                      marginLeft: "30px",
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <p>Name</p>
                    <p>{el.baseToken.name}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "50px",
                      marginLeft: "30px",
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <p>Symbol</p>
                    <p>{el.baseToken.symbol}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "30px",
                      marginLeft: "30px",
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <p>Address</p>
                    <p>{el.baseToken.address.slice(0, 13)}...</p>
                  </div>
                </Box>

                <Box
                  height="170px"
                  borderWidth="1px"
                  borderColor="gray.400"
                  display="flex"
                  flexDirection="column"
                  gap="3"
                  padding="10px"
                  borderRadius="10px"
                  background="#390554"
                  width={{ base: "80%", md: "26%" }}
                >
                  <Text
                    alignSelf="flex-start"
                    fontFamily="Poppins"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="normal"
                    marginLeft="30px"
                  >
                    Quote Token
                  </Text>

                  <div
                    style={{
                      display: "flex",
                      gap: "50px",
                      marginLeft: "30px",
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <p>Name</p>
                    <p>{el.baseToken.name}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "50px",
                      marginLeft: "30px",
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <p>Symbol</p>
                    <p>{el.baseToken.symbol}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "30px",
                      marginLeft: "30px",
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <p>Address</p>
                    <p>{el.baseToken.address.slice(0, 13)}...</p>
                  </div>
                </Box>

                <Box
                  height="170px"
                  borderWidth="1px"
                  borderColor="gray.400"
                  display="flex"
                  flexDirection="column"
                  gap="3"
                  padding="10px"
                  borderRadius="10px"
                  background="#390554"
                  width={{ base: "80%", md: "26%" }}
                >
                  <Text
                    alignSelf="flex-start"
                    fontFamily="Poppins"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="normal"
                    marginLeft="30px"
                  >
                    Price
                  </Text>

                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      marginLeft: "30px",
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <p>Price Native</p>
                    <p>{el.priceNative}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "50px",
                      marginLeft: "30px",
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    <p>Price USD</p>
                    <p>{el.priceUsd}</p>
                  </div>
                </Box>
              </Flex>
            )
          );
        })}
      </Flex>
    </Box>
  );
};

export default TokenAddress;
