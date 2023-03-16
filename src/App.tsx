import { ChakraProvider, Box, theme, Flex, useDisclosure, Show } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DrawerMenu } from "./components/DrawerMenu";
import { SideMenu } from "./components/SideMenu";
import { TopHeader } from "./components/TopHeader";
import { Page1 } from "./routes/Page1";
import { Page2 } from "./routes/Page2";
import { Page3 } from "./routes/Page3";

export const App = () => {
    // ドロワーメニューのフック
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        // アプリケーションのトップに置く必要がある
        <ChakraProvider theme={theme}>

            <Box h={{ base: "80px", lg: "100px" }}>
                {/* ヘッダーコンポーネント */}
                <TopHeader onOpen={onOpen} />
            </Box>

            <Box w="100vw" h={{ base: "calc(100vh - 80px)", lg: "calc(100vh - 100px)" }}>
                <Flex w="100%" h="100%">
                    <BrowserRouter>
                        {/* ドロワーメニューコンポーネント */}
                        <DrawerMenu isOpen={isOpen} onClose={onClose} />

                        <Show above="lg">
                            {/* サイドメニューコンポーネント */}
                            <SideMenu width="20vw" />
                        </Show>

                        <Box w={{ base: "100vw", lg: "80vw" }}>
                            {/* ルーティング設定 */}
                            <Routes>
                                <Route path="/" element={<Page1 />} />
                                <Route path="/page2" element={<Page2 />} />
                                <Route path="/page3" element={<Page3 />} />
                            </Routes>
                        </Box>
                    </BrowserRouter>
                </Flex>
            </Box>

        </ChakraProvider>
    );
}