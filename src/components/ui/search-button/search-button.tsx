import { Input } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import s from "./search-button.module.scss";
import { useDebounce } from "../../../hooks/use-debounce";
import { Suggests } from "../suggests/suggests";

const { Search } = Input;

const SearchButton = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggest, setSuggest] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const debouncedSuggest = useDebounce(suggest, 1000);
  const debouncedSearchTerm = useDebounce(searchTerm, 2000);

  const navigate = useNavigate();

  const onSearch = (value: string) => {
    setSearchTerm(value);
    setIsLoading(true);
  };

  useEffect(() => {
    const trimmedSearchTerm = searchTerm.trim();
    if (trimmedSearchTerm) {
      const searchUrl = `/search?query=${encodeURIComponent(
        trimmedSearchTerm,
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
    <div className={s.container}>
      <Search
        className={s.search}
        placeholder="Search your coin..."
        onSearch={onSearch}
        onChange={e => setSuggest(e.target.value.trim())}
        onFocus={() => setIsSearchFocused(true)}
        onBlur={() => setTimeout(() => setIsSearchFocused(false), 100)}
        enterButton
        loading={isLoading}
      />
      {isSearchFocused && debouncedSuggest && (
        <Suggests suggest={debouncedSuggest} />
      )}
    </div>
  );
};

export { SearchButton };
