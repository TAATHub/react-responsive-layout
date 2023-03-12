import { ChakraProvider, Box, theme, Flex, useDisclosure, Show } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DrawerMenu } from "./components/DrawerMenu";
import { SideMenu } from "./components/SideMenu";
import { TopHeader } from "./components/TopHeader";
import { Page1 } from "./routes/Page1";
import { Page2 } from "./routes/Page2";
import { Page3 } from "./routes/Page3";

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>

      <Box h={{ base: "80px", lg: "100px" }}>
        <TopHeader onOpen={onOpen}/>
      </Box>

      <Box w="100vw" h={{ base: "calc(100vh - 80px)", lg: "calc(100vh - 100px)" }}>
        <Flex w="100%" h="100%">
          <BrowserRouter>
            <DrawerMenu isOpen={isOpen} onClose={onClose} />

            <Show above="lg">
              <SideMenu width="20vw" />
            </Show>
            
            <Box w={{ base: "100vw", lg: "80vw" }}>
              <Routes>
                <Route path="/" element={<Page1/>} />
                <Route path="/page2" element={<Page2/>} />
                <Route path="/page3" element={<Page3/>} />
              </Routes>
            </Box>
          </BrowserRouter>
        </Flex>
      </Box>

    </ChakraProvider>
  );
}