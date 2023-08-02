import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import TokenAddress from './Components/TokenAddress';
import Footer from './Components/Footer';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    
    // <>
    // <div className="App" style={{display:'flex'}}>
    //   <Sidebar></Sidebar>
    //   <TokenAddress></TokenAddress>
    // </div>
    // <Footer></Footer>
    // </>


// <>
//     <Box height="100vh" overflowY="auto">

// <div className="App" style={{display:'flex'}}>
//       <Sidebar></Sidebar>
//       <TokenAddress></TokenAddress>
//     </div>
// </Box>


// <Box
// border="1px solid black"
// width="100%"
// height="75px"
// flexShrink="0"
// background="#F30050"
// position="fixed"
// bottom="0"
// left="0"
// >

// <Footer></Footer>
// </Box>
// </>

<>
<Box height="88vh" overflowY="auto">
  <Sidebar />
  <TokenAddress/>
</Box>

<Footer />
</>




  );
}

export default App;
