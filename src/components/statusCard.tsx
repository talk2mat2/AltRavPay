import {
  Box,
  Center,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiCheck, FiX, FiAlertCircle } from "react-icons/fi";

type StatusType = "success" | "error";

interface StatusCardProps {
  isOpen: boolean;
  onClose: () => void;
  status?: StatusType;
  title?: string;
  message?: string;
}

const statusConfig = {
  success: {
    ring: "green.300",
    bg: "green.100",
    iconColor: "#38A169",
    Icon: FiCheck,
    defaultTitle: "Verification Successful",
  },
  error: {
    ring: "red.300",
    bg: "red.100",
    iconColor: "#E53E3E",
    Icon: FiAlertCircle,
    defaultTitle: "Operation Failed",
  },
};

const StatusCard = ({
  isOpen,
  onClose,
  status = "success",
  title,
  message,
}: StatusCardProps) => {
  const config = statusConfig[status];
  const Icon = config.Icon;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="blackAlpha.600" />

      <ModalContent borderRadius="28px" p={10} maxW="320px" textAlign="center">
        {/* Close Button */}
        <IconButton
          aria-label="close"
          icon={<FiX size={20} />}
          variant="ghost"
          position="absolute"
          top="18px"
          right="18px"
          fontSize="22px"
          onClick={onClose}
        />

        <VStack spacing={3}>
          {/* Status Circle */}
          <Center
            w="100px"
            h="100px"
            borderRadius="full"
            border="10px solid"
            borderColor={config.ring}
          >
            <Center w="60px" h="60px" borderRadius="20px" bg={config.bg}>
              <Icon size={40} color={config.iconColor} />
            </Center>
          </Center>

          {/* Title */}
          <Text fontSize="20px" fontWeight="700" color="gray.700">
            {title || config.defaultTitle}
          </Text>

          {/* Message */}
          {message && (
            <Text fontSize="14px" color="gray.500" maxW="380px">
              {message}
            </Text>
          )}
        </VStack>
      </ModalContent>
    </Modal>
  );
};

export default StatusCard;