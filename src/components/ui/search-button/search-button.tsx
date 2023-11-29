import { Input, InputRef } from "antd";
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import s from "./search-button.module.scss";
import { useDebounce } from "../../../hooks/use-debounce";
import { Suggests } from "../suggests/suggests";

const { Search } = Input;

const SearchButton = () => {
  const { search: searchParams } = useLocation();
  const query = new URLSearchParams(searchParams).get("query");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggest, setSuggest] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const debouncedSuggest = useDebounce(suggest, 1000);
  const navigate = useNavigate();
  const searchInputRef = useRef<InputRef | null>(null);

  useEffect(() => {
    setSearchTerm(query ?? searchTerm);
    setSuggest(query?.trim() ?? suggest);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const onSearch = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      setIsSearchFocused(false);

      const searchUrl = `/search?query=${encodeURIComponent(trimmedValue)}`;

      navigate(searchUrl);

      if (searchInputRef.current) {
        searchInputRef.current.blur();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSuggest(e.target.value.trim());
    setSearchTerm(e.target.value);
  };

  return (
    <div className={s.container}>
      <Search
        value={searchTerm}
        className={s.search}
        placeholder="Search your coin..."
        onSearch={onSearch}
        onChange={e => handleChange(e)}
        onFocus={() => setIsSearchFocused(true)}
        onBlur={() => setTimeout(() => setIsSearchFocused(false), 500)}
        ref={searchInputRef}
        enterButton
      />
      {isSearchFocused && debouncedSuggest && (
        <Suggests suggest={debouncedSuggest} />
      )}
    </div>
  );
};

export { SearchButton };
