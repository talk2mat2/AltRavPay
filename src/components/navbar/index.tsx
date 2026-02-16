import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import logo1 from "@assets/logo1.png";
import { FaChevronDown } from "react-icons/fa";
import { FiBell } from "react-icons/fi";

import { useCurrentUser } from "@hooks/useCurrentUser";

import { useAuthService } from "@/helpers/useAuth";
// import { getRoleDisplayName } from "@/utils/helpers";

const NavBar = () => {
  const { colorMode } = useColorMode();

  const { data } = useCurrentUser();
  const isDarkMode = colorMode !== "light";
  useAuthService();

  return (
    <HStack
      position={["fixed", "static"]}
      borderBottom={"1px solid rgba(135, 140, 189, 0.3)"}
      zIndex={3}
      bg={isDarkMode ? "navy.1000" : "brandScheme.1000"}
      justifyContent="flex-start"
      pr={["10px", "20px"]}
      pl={["1px", "30px"]}
      py={["5px", "5px"]}
      h={["50px", "60px"]}
      w={["100%", "100%"]}
    >
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        w="100%"
        direction="row"
      >
        <HStack h="100%" alignItems={"center"}>
          <Image w={["18px", "30px"]} src={logo1} alt="man" />{" "}
          {/* <VStack textAlign={"left"} alignItems={"flex-start"}>
            <Text fontWeight={"800"} fontSize={["12px", "14px"]}>
              {data?.FullName}
              <Text
                lineHeight={"100%"}
                fontWeight={"400"}
                color={"gray.10"}
                fontSize={["12px", "14px"]}
              >
                {getRoleDisplayName(data?.Role)}
              </Text>
            </Text>
          </VStack> */}
          <Heading
            color="gray.200"
            fontSize={["17px", "24px"]}
            textAlign="center"
            fontWeight="700"
          >
            Alt RavPay
          </Heading>
        </HStack>
        <Menu placement="bottom-end">
          <HStack cursor="pointer">
            <Box paddingRight={{ sm: "3px", md: "8px" }} borderRightWidth={1}>
              <FiBell size={20} />
            </Box>
            <Avatar
              size="sm"
              bg="orange"
              color="secondaryGray.1000"
              name={"testing"}
              src={"esting"}
            />
            <MenuButton>
              <FaChevronDown />
            </MenuButton>
          </HStack>

          <MenuList
            minW="auto"
            w="fit-content"
            p="4px"
            style={{ border: "none", textAlign: "center" }}
          >
            {/* <MenuDivider /> */}

            <MenuItem
              _hover={{ bg: "red.50", color: "red.500" }}
              // onClick={logout}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </HStack>
  );
};

export default NavBar;
