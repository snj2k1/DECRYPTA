import { Input } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import s from "./search-button.module.scss";
import { useDebounce } from "../../../hooks/use-debounce";

const { Search } = Input;

const SearchButton = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 2000);
  const navigate = useNavigate();

  const onSearch = (value: string) => {
    setSearchTerm(value);
    setIsLoading(true);
  };

  useEffect(() => {
    if (searchTerm.trim()) {
      const searchUrl = `/search?query=${encodeURIComponent(
        searchTerm.trim(),
      )}`;
      navigate(searchUrl);
      setIsLoading(false);
      setSearchTerm("");
    } else {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return (
    <Search
      className={s.search}
      placeholder="Search your coin..."
      onSearch={onSearch}
      enterButton
      loading={isLoading}
    />
  );
};

export { SearchButton };
