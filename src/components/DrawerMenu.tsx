import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button, Flex, Box } from "@chakra-ui/react";
import { MdAccountBox, MdMessage } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CommonButton } from "./CommonButton";
import { MenuItems } from "../MenuItems";

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

export const DrawerMenu = (props: Props) => {
    const navigate = useNavigate();

    const onClickMenu = (path: string) => {
      navigate(path);
      props.onClose();
    }

    return (
      <Drawer 
        placement="left"
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg="gray.100">
          <DrawerBody px={0} py={6}>
            <Flex direction="column">
                {MenuItems.map((item) => (
                    <Box>
                        <CommonButton 
                            iconType={item.icon}
                            title={item.name}
                            onClick={() => onClickMenu(item.path)}
                        />
                    </Box>
                ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer> 
    );
}