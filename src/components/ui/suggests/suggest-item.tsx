import { Link } from "react-router-dom";

import s from "./suggests.module.scss";

const SuggestItem = ({ id, name }: { id: string; name: string }) => {
  return (
    <Link className={s.item} to={`/${id}`}>
      {name}
    </Link>
  );
};

export { SuggestItem };
