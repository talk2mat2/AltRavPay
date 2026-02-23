import Buttons from "@/components/buttons";
import FormDate from "@/components/formDate";
import FormInput from "@/components/formInput";
import Selects from "@/components/selects";
import StatusCard from "@/components/statusCard";
import TextInput from "@/components/textInput";
import useModals from "@/hooks/useModal";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
type StatusType = "success" | "error";

const Web_id = ({ handleNext }: { handleNext: () => void }) => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState<{
    open: boolean;
    status: StatusType;
    title: string;
    message: string;
  }>({
    open: false,
    status: "error",
    title: "",
    message: "",
  });
  const { Modal, isModalOpen, handleOk, handleCancel, showModal } = useModals();

  const handleProceed = () => {
    showModal();
  };

  useEffect(() => {
    if (alert.open) {
      const timer = setTimeout(() => {
        setAlert({
          open: false,
          status: "error",
          title: "",
          message: "",
        });
        navigate("/");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [alert]);
  return (
    <>
      <StatusCard
        isOpen={alert?.open}
        onClose={() =>
          setAlert({
            open: false,
            status: "error",
            title: "",
            message: "",
          })
        }
        status={alert.status}
        title={alert.title}
        message={alert.message}
      />
      <Modal
        style={{ top: "20%" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={600}
      ></Modal>
      <Heading
        fontSize={{ base: "13px", md: "16px" }}
        fontWeight="500"
        textAlign="center"
      >
        The Web GUID for<b> “C-1251462”</b> is
      </Heading>
      <Heading
        fontSize={{ base: "13px", md: "18px" }}
        fontWeight="500"
        textAlign="center"
        color={"#009CBD"}
      >
        27392729-2839103-162
      </Heading>
      <Box
        flexDirection={"row"}
        w="100%"
        justifyContent={"center"}
        display={"flex"}
      >
        <Button
          size="lg"
          borderRadius="full"
          height={"36px"}
          maxW={"194px"}
          bg="gray.300"
          _hover={{}}
          fontSize={{ base: "13px", md: "14px" }}
          // isDisabled={!isValid}
          color="white"
          bgColor={"brand.300"}
          onClick={handleNext}
        >
          Continue
        </Button>
      </Box>
    </>
  );
};

export default Web_id;
