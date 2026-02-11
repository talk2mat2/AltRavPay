import { useAuthService } from "@/helpers/useAuth";
import { Center, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";

const Logout = () => {
  const { handleLogout } = useAuthService();

  useEffect(() => {
    handleLogout();
  }, []);
  return (
    <Center w="100%" pt="20%">
      <Spinner size={"lg"} color={"#000000"} />
    </Center>
  );
};

export default Logout;
