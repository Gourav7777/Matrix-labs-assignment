import React, { useEffect } from 'react'
import backgrounddImage from '../Assets/Rectangle.png'
import {Box, Text} from "@chakra-ui/react"
import {  InputGroup, InputLeftElement, InputRightElement, Input , Button, Flex} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from 'react';
const TokenAddress = () => {
  
    const [data,setData]=useState([])

 
    const getData=async()=>{
      let res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`)
      res =await res.json()
      let x = res.pairs
      setData(x)
    
      console.log(res.pairs)
    }
    useEffect(()=>{
getData()
    },[])

   
  return (
    // <Box
    //     border="0px solid black"
    //     width="82%"
    //     height="568px"
    //     // flexShrink="0"
    //     backgroundImage={`url(${backgrounddImage})`}
    //     backgroundSize="cover"
    //     backgroundPosition="center"
    //     lightgray = '50%'
    //     cover = 'no-repeat'
    //         // paddingRight='20px'
    //         // paddingLeft='20px'
    //     >


    <Box
      border="0px solid black"
      width="82%"
      height="88vh"
      backgroundImage={`url(${backgrounddImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      paddingRight="30px"
      paddingLeft="30px"
      overflowY="auto"
      marginLeft="18%"
    >

{/* <Flex
        display="flex"
        justifyContent="space-between"
        alignItems='center'
        border="0px solid white"
        height="100px"
        paddingRight='30px'
            paddingLeft='30px'
            color="var(--cultured-grey, #F7F9F9)"

      > */}

<Flex
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        border="0px solid white"
        height="100px"
        color="var(--cultured-grey, #F7F9F9)"
        position="sticky"  // This keeps the element fixed within its container
        top="0"           // Set the top position to 0 for the sticky effect
        zIndex="1"        // Add a zIndex to ensure it stays above the scrollable content
        // background="#292929" // Add the same background as the Sidebar to blend with it
      >



        <InputGroup width='30%' justifyContent="flex-start">
        {/* <InputLeftElement
          pointerEvents="none"
          children="Search"
          color="var(--cultured-grey, #F7F9F9)"
          pl="9" 
          fontWeight="700" 
        /> */}
          <Input
            type="text"
           placeholder='Search'
            borderRadius="full" 
            
            color="var(--cultured-grey, #F7F9F9)"
            fontFamily="Poppins"
            fontSize="18px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="normal"
            

          />
          <InputRightElement width="6rem" height="100%" pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputRightElement>
        </InputGroup>

        <Button justifyContent="flex-end"
         borderRadius="20px" 
         background="linear-gradient(131deg, #7C0F35 0%, #581266 100%)" 
         color="var(--cultured-grey, #F7F9F9)"
        >
          Connect
        </Button>
      </Flex>
      

      <Box
       
        border="1px solid white"
        height="50px"
        paddingRight='30px'
            paddingLeft='30px'
        display="flex" justifyContent="flex-start"
           
            color="var(--cultured-grey, #F7F9F9)"
            fontFamily="Work Sans"
            fontSize="24px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="28px"

      >
  
      <Text alignSelf="flex-start">Token Search Results</Text>


  
    </Box>


     <Flex  border="1px solid white"
        height="350px"
        paddingRight='30px'
            paddingLeft='30px'
            flexDirection='column'
            color="white"
            gap={5}
            >
         
        { data.map((el,i)=>{

          return i<10 && <Flex gap={5}>

            <Box  
          height="170px"
          borderWidth="1px"
          borderColor="gray.400"
          display="flex"
          flexDirection='column'
          gap='3'
        //   justifyContent="center"
        //   alignItems="center"
        padding='10px'
          borderRadius="10px"
        background="#390554"
          width='25%'>
   <Text alignSelf="flex-start" fontFamily="Poppins"
        fontSize="16px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="normal" marginLeft='30px'>Basic Info</Text>

                       <div style={{
                display:'flex',
                gap:'10px',
                // marginLeft:'5px',
                fontFamily: 'Poppins',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                
            }}>
                <p   >Pair created at</p>
                <p>{el.pairCreatedAt}</p>
            </div>

            <div style={{
                display:'flex',
                gap:'50px',
                marginLeft:'30px',
                fontFamily: 'Poppins',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
            }}>
                <p>Symbol</p>
                <p>{el.baseToken.symbol}</p>
            </div>

            <div style={{
                display:'flex',
                gap:'50px',
                marginLeft:'10px',
                fontFamily: 'Poppins',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
            }}>
                <p>Dex ID</p>
                <p>{el.dexId}</p>
            </div>

            <div style={{
                display:'flex',
                gap:'10px',
                // marginLeft:'10px',
                fontFamily: 'Poppins',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
            }}>
                <p>Pair Address</p>
                <p>{el.pairAddress.slice(0,10)}...</p>
            </div>
            </Box>

            <Box  
          height="170px"
          borderWidth="1px"
          borderColor="gray.400"
          display="flex"
          flexDirection='column'
          gap='3'
        //   justifyContent="center"
        //   alignItems="center"
        padding='10px'
          borderRadius="10px"
        background="#390554"
          width='25%'>
   <Text alignSelf="flex-start" fontFamily="Poppins"
        fontSize="16px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="normal" marginLeft='30px'>Base Token</Text>

                       <div style={{
                display:'flex',
                gap:'50px',
                marginLeft:'30px',
                fontFamily: 'Poppins',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                
            }}>
                <p   >Name</p>
                <p>{el.baseToken.name}</p>
            </div>

            <div style={{
                display:'flex',
                gap:'50px',
                marginLeft:'30px',
                fontFamily: 'Poppins',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
            }}>
                <p>Symbol</p>
                <p>{el.baseToken.symbol}</p>
            </div>

            <div style={{
                display:'flex',
                gap:'30px',
                marginLeft:'30px',
                fontFamily: 'Poppins',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
            }}>
                <p>Address</p>
                <p>{el.baseToken.address.slice(0, 13)}...</p>
            </div>

           
            </Box>



            <Box  
          height="170px"
          borderWidth="1px"
          borderColor="gray.400"
          display="flex"
          flexDirection='column'
          gap='3'
        //   justifyContent="center"
        //   alignItems="center"
        padding='10px'
          borderRadius="10px"
        background="#390554"
          width='25%'>
   <Text alignSelf="flex-start" fontFamily="Poppins"
        fontSize="16px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="normal" marginLeft='30px'>Quote Token</Text>

<div style={{
                display:'flex',
                gap:'50px',
                marginLeft:'30px',
                fontFamily: 'Poppins',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                
            }}>
                <p   >Name</p>
                <p>{el.baseToken.name}</p>
            </div>

            <div style={{
                display:'flex',
                gap:'50px',
                marginLeft:'30px',
                fontFamily: 'Poppins',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
            }}>
                <p>Symbol</p>
                <p>{el.baseToken.symbol}</p>
            </div>

            <div style={{
                display:'flex',
                gap:'30px',
                marginLeft:'30px',
                fontFamily: 'Poppins',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
            }}>
                <p>Address</p>
                <p>{el.baseToken.address.slice(0, 13)}...</p>
            </div>
            </Box>




            <Box  
          height="170px"
          borderWidth="1px"
          borderColor="gray.400"
          display="flex"
          flexDirection='column'
          gap='3'
        //   justifyContent="center"
        //   alignItems="center"
        padding='10px'
          borderRadius="10px"
        background="#390554"
          width='25%'>
   <Text alignSelf="flex-start" fontFamily="Poppins"
        fontSize="16px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="normal" marginLeft='30px'>Price</Text>

<div style={{
                display:'flex',
                gap:'30px',
                marginLeft:'30px',
                fontFamily: 'Poppins',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                
            }}>
                <p   >Price Native</p>
                <p>{el.priceNative}</p>
            </div>

            <div style={{
                display:'flex',
                gap:'50px',
                marginLeft:'30px',
                fontFamily: 'Poppins',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
            }}>
                <p>Price USD</p>
                <p>{el.priceUsd}</p>
            </div>

         
            </Box>




           


            </Flex>
            })
        }

     </Flex>





      </Box>
  )
}

export default TokenAddress