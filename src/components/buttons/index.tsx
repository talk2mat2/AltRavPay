import { Button, type ButtonProps, Spinner } from "@chakra-ui/react";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
  spinnerSize?: string;
  spinnerColor?: string;
}

const Buttons: React.FC<CustomButtonProps> = ({
  loading = false,
  children = "Login",
  spinnerSize = "lg",
  spinnerColor = "white",
  onClick,
  ...rest
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading) {
      e.preventDefault(); 
      return; 
    }

    onClick?.(e); 
  };

  return (
    <Button
      color="brand.400"
      borderRadius="15px"
      bg="brand.300"
      w="100%"
      // mt={["22px", "24px"]}
      h={["35px", "48px"]}
      justifyContent="center"
      alignItems="center"
      _hover={{ bg: "primary.100" }}
      isDisabled={loading}
      onClick={handleClick} 
      {...rest}
    >
      {loading ? (
        <Spinner size={spinnerSize} color={spinnerColor} />
      ) : (
        children
      )}
    </Button>
  );
};

export default Buttons;
