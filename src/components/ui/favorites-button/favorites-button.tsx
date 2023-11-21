import { Link } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

import { ROUTES } from "../../../routes/constants";

const FavoritesButton = () => {
  return (
    <Link to={ROUTES.FAVORITES}>
      <FloatButton
        shape="circle"
        type="primary"
        style={{ position: "static", backgroundColor: "#1677ff" }}
        icon={<HeartOutlined />}
      />
    </Link>
  );
};

export { FavoritesButton };
