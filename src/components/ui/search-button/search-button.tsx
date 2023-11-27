import { Input, InputRef } from "antd";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import s from "./search-button.module.scss";
import { useDebounce } from "../../../hooks/use-debounce";
import { Suggests } from "../suggests/suggests";
import { useHistory } from "../../../hooks/use-history";

const { Search } = Input;

const SearchButton = () => {
  const [suggest, setSuggest] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const debouncedSuggest = useDebounce(suggest, 1000);
  const navigate = useNavigate();
  const searchInputRef = useRef<InputRef | null>(null);
  const addHistory = useHistory();

  const onSearch = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      setIsSearchFocused(false);

      const searchUrl = `/search?query=${encodeURIComponent(trimmedValue)}`;
      const historyData = {
        text: trimmedValue,
        url: searchUrl,
      };

      addHistory(historyData);

      navigate(searchUrl);

      if (searchInputRef.current) {
        searchInputRef.current.blur();
      }
    }
  };

  return (
    <div className={s.container}>
      <Search
        className={s.search}
        placeholder="Search your coin..."
        onSearch={onSearch}
        onChange={e => setSuggest(e.target.value.trim())}
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
