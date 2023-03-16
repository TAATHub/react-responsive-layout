import { Box, Button, Flex, Hide } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'

type Props = {
    onOpen: () => void;
}

export const TopHeader = (props: Props) => (
    <Flex
        as="header"
        top={0}
        width="100%"
        height="100%"
        bg="blue.100"
        shadow="sm"
        align="center"
        px={{ base: 2, lg: 4 }}
    >
        {/* large以上で表示されるハンバーガーボタン */}
        <Hide above="lg">
            <Button
                variant="ghost"
                fontSize={{ base: "xl", lg: "3xl" }}
                boxSize={{ base: 8, lg: 16 }}
                onClick={() => props.onOpen()}
            >
                <HamburgerIcon />
            </Button>
        </Hide>
        <Box
            ml={{ base: 2, lg: 4 }}
            fontSize={{ base: "xl", lg: "3xl" }}
            fontWeight="bold"
        >
            Top Header
        </Box>
    </Flex>
);