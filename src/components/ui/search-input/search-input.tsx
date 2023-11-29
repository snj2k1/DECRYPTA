import { Input, InputRef } from "antd";
import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import s from "./search-input.module.scss";
import { useDebounce } from "../../../hooks/use-debounce";
import { Suggests } from "../suggests/suggests";

const { Search } = Input;

const SearchInput = () => {
  const { search: searchParams } = useLocation();
  const query = new URLSearchParams(searchParams).get("query");
  const [searchTerm, setSearchTerm] = useState(query || "");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const debouncedSuggest = useDebounce(searchTerm.trim(), 1000);
  const navigate = useNavigate();
  const searchInputRef = useRef<InputRef | null>(null);

  if (query && searchTerm !== query) {
    setSearchTerm(query);
  }

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

  return (
    <div className={s.container}>
      <Search
        value={searchTerm}
        className={s.search}
        placeholder="Search your coin..."
        onSearch={onSearch}
        onChange={e => setSearchTerm(e.target.value)}
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

export { SearchInput };
