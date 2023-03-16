import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CommonMenuButton } from "./CommonMenuButton";
import { MenuItems } from "../MenuItems";

type Props = {
    width: string
}

export const SideMenu = (props: Props) => {
    // React Routerのページ遷移フック
    const navigate = useNavigate();

    return (
        <Box
            w={props.width}
            py={3}
            bg="gray.100"
        >
            {MenuItems.map((item) => (
                <Box>
                    {/* 共通のメニューボタンコンポーネント */}
                    <CommonMenuButton
                        iconType={item.icon}
                        title={item.name}
                        onClick={() => navigate(item.path)}
                    />
                </Box>
            ))}
        </Box>
    );
}