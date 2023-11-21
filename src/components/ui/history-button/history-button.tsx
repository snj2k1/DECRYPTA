import { Link } from "react-router-dom";
import { HistoryOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

import { ROUTES } from "../../../routes/constants";

const HistoryButton = () => {
  return (
    <Link to={ROUTES.HISTORY}>
      <FloatButton
        shape="circle"
        type="primary"
        style={{ position: "static", backgroundColor: "#1677ff" }}
        icon={<HistoryOutlined />}
      />
    </Link>
  );
};

export { HistoryButton };
