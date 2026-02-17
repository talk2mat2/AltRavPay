import React from "react";
import type { ChakraProps } from "@chakra-ui/react";
import { Box, Select, FormHelperText, Text } from "@chakra-ui/react";

export interface Option {
  value: string | number|boolean
  name?: string;
  disabled?: boolean;
}

interface SelectsProps {
  title?: string;
  textColor?: string;
  icon?: React.ReactNode;
  boxStyles?: ChakraProps; 
  fontSize?: string | string[];
  textStyles?: ChakraProps;
  options?: Option[];
  height?: string;
  fontFamily?: string;
  border?: string;
  fontWeight?: string | number;
  errorMsg?: string;
  error?: boolean;
  [key: string]: any; // Allows additional props
}

const Selects: React.FC<SelectsProps> = ({
  title = "",
  textColor = "",
  icon,
  boxStyles = {},
  fontSize,
  textStyles = {},
  options = [],
  fontFamily,
  border,
  fontWeight,
  errorMsg,
  height,
  error,
  ...rest
}) => {
  const isDarkMode = false; 

  return (
    <>
      <Text
        mb={["8px"]}
        lineHeight={["16px", "17px"]}
        fontSize={fontSize || ["12px", "14px"]}
        fontWeight={fontWeight || "500"}
        color={textColor || "neutral.1"}
        {...textStyles}
      >
        {title}
      </Text>
      <Box
        display="flex"
        flexDirection={["row"]}
        alignItems={["center"]}
        sx={boxStyles} // Use sx instead of spreading styles
      >
        {icon && (
          <Box transform="translateY(-1px)" ml={["5px", "7px"]}>
            {icon}
          </Box>
        )}
        <Select
          className="selectInput"
          height={height || "40px"}
          width="100%"
          borderRadius="5px"
          background="#f5f5f5"
          fontSize="13px"
          border={error ? "1px solid #F10000" : "1.5px solid #dfdfdf"}
          backgroundColor={isDarkMode ? "black" : "#f5f5f5"}
          color={isDarkMode ? "white" : "black"}
          {...rest}
        >
          <option value="">--</option>
          {options.map((item) => (
            <option
              key={item.value?.toString()}
              value={item.value?.toString()}
              disabled={item.disabled}
            >
              {item.name || "options"}
            </option>
          ))}
        </Select>
      </Box>
      {error && (
        <FormHelperText fontSize="small" color="error.20">
          {errorMsg}
        </FormHelperText>
      )}
    </>
  );
};

export default Selects;
