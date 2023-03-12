import { Box, Button, Icon, Spacer } from "@chakra-ui/react";
import { MdMessage, MdAccountBox } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CommonButton } from "./CommonButton";
import { MenuItems } from "../MenuItems";

type Props = {
    width: string
}

export const SideMenu = (props: Props) => {
    const navigate = useNavigate();

    return (
        <Box
            w={props.width}
            py={3}
            bg="gray.100"
        >
            {MenuItems.map((item) => (
                <Box>
                    <CommonButton 
                        iconType={item.icon}
                        title={item.name}
                        onClick={() => navigate(item.path)}
                    />
                </Box>
            ))}
        </Box>
    );
}