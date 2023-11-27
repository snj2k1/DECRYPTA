import { Button } from "antd";
import { useDispatch } from "react-redux";

import { Auth } from "../../../utils/user-data-handler";
import { logOut } from "../../../store/slices/auth-slice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    Auth.removeAuth();
    dispatch(logOut());
  };

  return (
    <Button type="primary" onClick={handleClick}>
      Log Out
    </Button>
  );
};

export { LogoutButton };
