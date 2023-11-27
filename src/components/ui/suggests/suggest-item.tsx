import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import s from "./suggests.module.scss";

interface SuggestItemProps {
  id: string;
  name: string;
}

const SuggestItem: React.FC<SuggestItemProps> = ({ id, name }) => {
  return (
    <Link className={s.item} to={`/${id}`}>
      {name}
    </Link>
  );
};

SuggestItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export { SuggestItem };
