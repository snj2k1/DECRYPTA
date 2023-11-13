import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

const SearchButton = () => {
  return (
    <Link to="/search">
      <FloatButton
        shape="circle"
        type="primary"
        style={{ position: "static", backgroundColor: "#1677ff" }}
        icon={<SearchOutlined />}
      />
    </Link>
  );
};

export { SearchButton };
