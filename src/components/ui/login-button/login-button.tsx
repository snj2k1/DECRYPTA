import { Button } from "antd";
import { LoginModal } from "../../shared/login-modal/login-modal";
import { useDispatch } from "react-redux";
import { toggleState } from "../../../store/slices/modal-slice";

const LoginButton = () => {
  const dispatch = useDispatch();

  const handleClick = (value: HTMLElement) => {
    const type =
      value.querySelector("span")?.textContent === "Sign In"
        ? "login"
        : "registration";
    dispatch(toggleState({ open: true, type }));
  };

  return (
    <>
      <Button type="primary" onClick={e => handleClick(e.currentTarget)}>
        Sign In
      </Button>
      <Button
        style={{ borderColor: "#1677ff" }}
        onClick={e => handleClick(e.currentTarget)}
      >
        Sign Up
      </Button>
      <LoginModal />
    </>
  );
};

export { LoginButton };
