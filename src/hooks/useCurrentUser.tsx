import { useSelector } from "react-redux";
import type { user } from "../interface/Iuser";

export const useCurrentUser = () => {
  const currentUser = useSelector(({ user }: { user: user }) => user);

  const { data, isLoggedIn, role } = currentUser;

  // const dispatch = useDispatch();

  return {
    data,
    isLoggedIn,
    role
  };
};
