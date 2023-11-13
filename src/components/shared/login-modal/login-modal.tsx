import { useState } from "react";
import { Modal, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  selectModalOpen,
  selectModalType,
  toggleState,
} from "../../../store/slices/modal-slice";
import { registerUser } from "../../../utils/register-user";
import { logIn } from "../../../store/slices/auth-slice";
import { loginUser } from "../../../utils/login-user";

const LoginModal = () => {
  const open = useSelector(selectModalOpen);
  const type = useSelector(selectModalType);
  const dispatch = useDispatch();
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      if (type === "registration") {
        const err = registerUser(email, password);
        handleError(err);
      } else {
        const err = loginUser(email, password);
        handleError(err);
      }
      setConfirmLoading(false);
    }, 2000);
  };

  const handleError = (err: string | null): void => {
    if (err) {
      setError(err);
    } else {
      dispatch(logIn(email));
      handleCancel();
    }
  };

  const handleCancel = () => {
    setEmail("");
    setPassword("");
    setError("");
    dispatch(toggleState({ open: false, type }));
  };

  return (
    <Modal
      title={type === "login" ? "Sign In" : "Sign Up"}
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      {error && <span style={{ color: "red", display: "block" }}>{error}</span>}
      <label htmlFor="modal-email">E-Mail:</label>
      <Input
        style={{ marginBottom: 10 }}
        placeholder="Enter your E-Mail..."
        type="email"
        id="modal-email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor="modal-password">Password:</label>
      <Input
        placeholder="Enter your password..."
        type="password"
        id="modal-password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </Modal>
  );
};

export { LoginModal };
