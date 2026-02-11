
import {
  Box,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const DefaultAdminLayout = () => {
  const { colorMode } = useColorMode();
  const isDrawerOpenOnDesktop = useBreakpointValue({ base: false, md: true });
  const isDarkMode = colorMode !== "light";

  return (
    <Box
      minH="100vh"
      w="100vw"
      bg={isDarkMode ? "navy.900" : "secondaryGray.200"}
      overflow="hidden" // ❗️Disable full page scrolling
    >
      {/* <Sidebar /> */}

      <Box
        pl={isDrawerOpenOnDesktop ? "300px" : ""}
        display="flex"
        flexDirection="column"
        height="100vh"
        w="100%"
      >
        {/* Sticky/Fix Navbar */}
        <Box
          px={{ base: "1%", md: "1%" }}
          position="sticky"
          top="0"
          zIndex="10"
          bg={isDarkMode ? "navy.900" : "secondaryGray.200"}
        >
          {/* <NavBar /> */}
        </Box>

        {/* Scrollable Content Area */}
        <Box
          px={{ base: "1%", md: "1%" }}
          pt="7px"
          overflowY="auto"
          flex="1"
          maxW="2800px"
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultAdminLayout;
