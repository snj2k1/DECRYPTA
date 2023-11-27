import { HeartOutlined } from "@ant-design/icons";

import s from "./locked-favorite-btn.module.scss";

const LockedFavoriteBtn = () => {
  return (
    <HeartOutlined
      className={s.heart}
      style={{ maxWidth: "max-content" }}
      onClick={e => {
        e.preventDefault();
      }}
    />
  );
};

export { LockedFavoriteBtn };
