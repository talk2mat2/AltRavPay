import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const FormInput: React.FC<Props> = ({
  label,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const [field, meta] = useField(props.name);
  const hasError = meta.touched && meta.error;

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
          {...field}
          {...props}
          autoComplete="off"
          border={
            hasError
              ? "1px solid #F10000 !important"
              : "1px solid #C4C4C4 !important"
          }
          // boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          _focus={{
            boxShadow: "none !important",
            outline: "none",
          }}
          h={{ bse: "45px", md: "40px" }}
          fontWeight="400"
          bg="brand.400"
          _placeholder={{
            fontSize: "16px",
            color: "#55555566",
          }}
          borderRadius="5px"
        />

        {rightIcon && (
          <InputRightElement h="100%">{rightIcon}</InputRightElement>
        )}
      </InputGroup>

      {hasError && (
        <FormHelperText color="error.20">{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
};

export default FormInput;
