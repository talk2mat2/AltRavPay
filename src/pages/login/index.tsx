import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";

// Background images array
import logo1 from "@assets/logo1.png";
import bg1 from "@assets/back1.png";
import bg2 from "@assets/bg2.png";
import toast from "react-hot-toast";
import bg3 from "@assets/bg3.png"; // Add more if needed
import { FaUserAstronaut } from "react-icons/fa";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import { LoginSchema } from "@/validations/validationSchema";
// import TokenForm from "@/components/tokenForm";
import Buttons from "@/components/buttons";
// import { serviceLinks } from "@/services/serviceLinks";
// import { useMutation } from "@tanstack/react-query";
// import type { IILoginValues } from "@/interface/IloginValues";
import { api } from "@/services/api";

const backgroundImages = [bg1, bg2, bg3];

const Login = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [showTokenForm, setShowTokenForm] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setBgIndex((prev) => (prev + 1) % backgroundImages.length);
  //   }, 7000); // change every 5 seconds

  //   return () => clearInterval(interval);
  // }, []);

  // const handleSubmit = (values: any) => {
  //   setIsLoading(true);
  // };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      h="100vh"
      overflow="hidden"
    >
      {/* Left side rotating background */}
      <Box
        width={["100%", "40%"]}
        overflowY="auto"
        pb={["1px", "8px"]}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition={["inherit", "right"]}
      >
        <Box pt={["23%", "13%"]}>
          <Stack alignItems="center">
            <Box
              display="flex"
              flexDirection="column"
              minH={["549px"]}
              bg={["brand.400"]}
              className="loginBox"
              w={["100%", "450px"]}
              px={["0px", "50px"]}
              borderRadius={["8px", "10px"]}
              pt={["20px", "41px"]}
              pb={["20px"]}
              position="relative"
            >
              <Box>
                <HStack>
                  <Image w={["18px", "60px"]} src={logo1} alt="man" />{" "}
                  <Heading
                    color="gray.200"
                    fontSize={["18px", "28px"]}
                    textAlign="center"
                    fontWeight="700"
                  >
                    Alt RavPay
                  </Heading>
                </HStack>
              </Box>
              <Formik
                // validationSchema={LoginSchema}
                initialValues={{
                  Email: "",
                  passWord: "",
                }}
                onSubmit={(values: any) => {
                  // handleSubmit(values);
                }}
              >
                {({
                  isSubmitting,
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                }) => (
                  <Form autoComplete="new-password">
                    <FormControl mt={["12px"]} px={[5, 0]} w={["100%"]}>
                      <FormLabel
                        fontSize={["12px", "14px"]}
                        color="#000000"
                        fontWeight="500"
                      >
                        Email
                      </FormLabel>
                      <InputGroup
                        _focus={{
                          boxShadow: "none !important",
                          outline: "none !important",
                        }}
                      >
                        <InputLeftElement
                          height={["100%"]}
                          pointerEvents="none"
                          children={<FaUserAstronaut color="#2A3447" />}
                        />
                        <Input
                          name="Email"
                          autoComplete="new-password"
                          list="autocompleteOff"
                          onChange={handleChange}
                          isDisabled={showTokenForm}
                          onBlur={handleBlur}
                          value={values.Email}
                          border={
                            errors.Email && touched.Email
                              ? "1px solid #F10000 !important"
                              : "1px solid #C4C4C4 !important"
                          }
                          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                          _focus={{
                            boxShadow: "none !important",
                            outline: "none",
                          }}
                          h={["45px", "40px"]}
                          type="text"
                          fontWeight="400"
                          bg="brand.400"
                          placeholder="Enter email here"
                          _placeholder={{
                            fontSize: "16px",
                            color: "#55555566",
                          }}
                          borderRadius="5px"
                        />
                      </InputGroup>
                      {errors.Email && touched.Email ? (
                        <FormHelperText color="error.20">
                          {/* {errors.Email} */}h
                        </FormHelperText>
                      ) : null}

                      <FormLabel
                        fontSize={["12px", "14px"]}
                        color="#000000"
                        mt={["17px", "25px"]}
                        fontWeight="500"
                      >
                        Password
                      </FormLabel>
                      <InputGroup
                        _focus={{
                          boxShadow: "none !important",
                          outline: "none !important",
                        }}
                        alignItems={"center"}
                      >
                        <InputLeftElement
                          height={["100%"]}
                          pointerEvents="none"
                          children={<BiLockAlt color="#2A3447" />}
                        />
                        <Input
                          autoComplete="new-password"
                          list="autocompleteOff"
                          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                          _focus={{
                            boxShadow: "none !important",
                            outline: "none !important",
                          }}
                          isDisabled={showTokenForm}
                          name="passWord"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.passWord}
                          border={
                            errors.passWord && touched.passWord
                              ? "1px solid #F10000 !important"
                              : "1px solid #C4C4C4 !important"
                          }
                          h={["45px", "40px"]}
                          bg="brand.400"
                          type={show ? "text" : "password"}
                          placeholder="Enter password here"
                          _placeholder={{
                            fontSize: "16px",
                            color: "#55555566",
                          }}
                          borderRadius="6px"
                        />
                        <InputRightElement top={"auto"}>
                          <Button
                            _focus={{ boxShadow: "none" }}
                            variant="ghost"
                            size="sm"
                            onClick={() => setShow(!show)}
                          >
                            {show ? (
                              <AiOutlineEyeInvisible size={20} />
                            ) : (
                              <AiOutlineEye />
                            )}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      {errors.passWord && touched.passWord ? (
                        <FormHelperText color="error.20">
                          {/* {errors.passWord} */}
                        </FormHelperText>
                      ) : null}
                      {!showTokenForm && (
                        // <Button
                        //   color="brand.400"
                        //   borderRadius="15px"
                        //   bg="brand.300"
                        //   w="100%"
                        //   mt={["22px", "24px"]}
                        //   h={["48px", "60px"]}
                        //   justifyContent="center"
                        //   _hover={{ bg: "primary.100" }}
                        //   type="submit"
                        //   alignItems={"center"}
                        //   // disabled={isLoading}
                        //   // onClick={() => navigate("/")}
                        //   // onClick={() => handleLogin()}
                        // >
                        //   Login
                        // </Button>
                        <Buttons
                          mt={6}
                          loading={isLoading}
                          type="submit"
                          spinnerColor="black"
                          fontSize={{ sm: "14px", md: "16px" }}
                        >
                          Login
                        </Buttons>
                      )}
                    </FormControl>
                  </Form>
                )}
              </Formik>
            </Box>
          </Stack>
        </Box>
      </Box>
      {/* Right side login content */}

      <Box
        borderColor="brand.400"
        borderRightWidth="1px"
        borderLeftWidth="1px"
        borderLeftStyle="solid"
        w="60%"
        display={["none", "block"]}
        position="relative"
      >
        {/* Rotating image layers */}
        {backgroundImages.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="background"
            style={{ objectFit: "cover" }}
            h="100vh"
            w="100%"
            position="absolute"
            top={0}
            left={0}
            transition="opacity 1s ease-in-out"
            opacity={index === bgIndex ? 1 : 0}
          />
        ))}
        <Box
          h="100%"
          w="100%"
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          bg="rgba(0, 0, 0, 0.4)" // transparent dark gray
          zIndex={1} // ensures it's above background image but below modal content if needed
        >
          <Box textAlign={"left"}>
            <HStack>
              <Text color="brand.1000">
                Say hello to seamless, secure, and lightning-fast
                <br /> payments and goodbye to slow transactions.
              </Text>
            </HStack>
            <Box mt="7%">
              <Text color="brand.1000">
                With RevPay, making payment is as easy as a tap. <br />
                Fast, secure, and hassle-free, <br /> because your time is
                priceless.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
