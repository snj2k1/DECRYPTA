import { Button } from "antd";
import { useDispatch } from "react-redux";

import { toggleState } from "../../../store/slices/modal-slice";
import { LoginModal } from "../../shared/login-modal/login-modal";

const LoginButton = () => {
  const dispatch = useDispatch();

  const handleClick = (type: "login" | "registration") => {
    dispatch(toggleState({ open: true, type }));
  };

  return (
    <>
      <Button type="primary" onClick={() => handleClick("login")}>
        Sign In
      </Button>
      <Button
        style={{ borderColor: "#1677ff" }}
        onClick={() => handleClick("registration")}
      >
        Sign Up
      </Button>
      <LoginModal />
    </>
  );
};

export { LoginButton };
