import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string; // optional error message
}

const TextInput: React.FC<Props> = ({
  label,
  value,
  onChange,
  leftIcon,
  rightIcon,
  error,
  ...props
}) => {
  const hasError = !!error;

  return (
    <FormControl mt={["12px"]} px={[5, 0]} w="100%">
      <FormLabel fontSize={["12px", "14px"]} fontWeight="500">
        {label}
      </FormLabel>

      <InputGroup>
        {leftIcon && (
          <InputLeftElement h="100%" pointerEvents="none">
            {leftIcon}
          </InputLeftElement>
        )}

        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
          border={
            hasError
              ? "1px solid #F10000 !important"
              : "1px solid #C4C4C4 !important"
          }
          _focus={{
            boxShadow: "none !important",
            outline: "none",
          }}
          h={{ base: "45px", md: "40px" }}
          fontWeight="400"
          bg="brand.400"
          _placeholder={{
            fontSize: "16px",
            color: "#55555566",
          }}
          borderRadius="5px"
          {...props}
        />

        {rightIcon && (
          <InputRightElement h="100%">{rightIcon}</InputRightElement>
        )}
      </InputGroup>

      {hasError && <FormHelperText color="error.20">{error}</FormHelperText>}
    </FormControl>
  );
};

export default TextInput;
