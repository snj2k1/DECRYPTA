import { HeartOutlined } from "@ant-design/icons";
import { useSpring, animated } from "react-spring";
import { Alert } from "antd";
import { useState } from "react";

import s from "./locked-favorite-btn.module.scss";

const LockedFavoriteBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const alertAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: `translateY(${isOpen ? 0 : -20}px)`,
  });

  return (
    <>
      <HeartOutlined
        className={s.heart}
        style={{ maxWidth: "max-content" }}
        onClick={e => {
          e.preventDefault();
          setIsOpen(true);
          setTimeout(() => setIsOpen(false), 3000);
        }}
      />
      <animated.div
        style={{
          ...alertAnimation,
          position: "fixed",
          top: "5%",
          left: "37%",
          border: "1px solid red",
          borderRadius: 10,
        }}
      >
        <Alert
          message="Error"
          description="You must be logged in to add favorites"
          type="error"
          showIcon
        />
      </animated.div>
    </>
  );
};

export { LockedFavoriteBtn };
