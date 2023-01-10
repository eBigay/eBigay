import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router";
import PrimaryButton from "../assets/styles/base/Button.styled";
import {
  StyledButton,
  StyledClearIcon,
  StyledContainer,
  StyledForm,
  StyledFormContainer,
  StyledInput,
  StyledSearchButton,
  StyledSearch,
} from "../assets/styles/layout/SearchForm.styled";
interface ISearchFormProps {
  isSearchBarOpen: boolean;
  setIsSearchBarOpen: Dispatch<SetStateAction<boolean>>;
}
const SearchForm = ({
  isSearchBarOpen,
  setIsSearchBarOpen,
}: ISearchFormProps) => {
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    if (inputSearchRef.current) {
      inputSearchRef.current.focus();
    }
  }, []);
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?q=${query}`);
    window.location.reload();
  };
  const toggleSearchBarOpen = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };
  return (
    <StyledContainer isSearchBarOpen={isSearchBarOpen}>
      <StyledFormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <StyledSearchButton disabled={!query} type="submit">
            <StyledSearch isdisabled={query} />
          </StyledSearchButton>
          <StyledInput
            type="text"
            onChange={handleChange}
            value={query}
            placeholder="Search here..."
            ref={inputSearchRef}
          />
          <PrimaryButton
            width="115px"
            height="50px"
            fontSize="xs"
            borderRadius="10px"
            disabled={!query}
            type="submit"
          >
            Search
          </PrimaryButton>
        </StyledForm>
        <StyledButton onClick={toggleSearchBarOpen}>
          <StyledClearIcon />
        </StyledButton>
      </StyledFormContainer>
    </StyledContainer>
  );
};
export default SearchForm;
