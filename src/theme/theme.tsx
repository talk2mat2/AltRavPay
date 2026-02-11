/* eslint-disable react-refresh/only-export-components */
import { extendTheme, type HTMLChakraProps, type ThemingProps } from "@chakra-ui/react";

import { breakpoints } from "./foundations/breakpoints";
import { globalStyles } from "./styles";
import { buttonStyles } from "./foundations/button";

export default extendTheme(
  { breakpoints },
  globalStyles,
  buttonStyles
);

export interface CustomCardProps extends HTMLChakraProps<"div">, ThemingProps {}
