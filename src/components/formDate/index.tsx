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
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const FormDate: React.FC<Props> = ({ label, leftIcon, rightIcon, ...props }) => {
  const [field, meta] = useField(props.name);
  const hasError = meta.touched && meta.error;

  return (
    <FormControl mt={["12px"]} px={[5, 0]} w="100%">
      <FormLabel fontSize={["12px", "14px"]} color="#000000" fontWeight="500">
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
          type="date"
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
          h={["45px", "40px"]}
          fontWeight="400"
          bg="brand.400"
          _placeholder={{
            fontSize: "16px",
            color: "#55555566",
          }}
          borderRadius="5px"
        />

        {rightIcon && <InputRightElement h="100%">{rightIcon}</InputRightElement>}
      </InputGroup>

      {hasError && <FormHelperText color="error.20">{meta.error}</FormHelperText>}
    </FormControl>
  );
};

export default FormDate;
