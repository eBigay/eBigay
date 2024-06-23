import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import { useSearchParams } from "react-router-dom";

import { UseInfiniteQueryResult } from "@tanstack/react-query";
import useItems from "../hooks/useItems";
import useOverflow from "../hooks/useOverflow";
import useIntersectionObserver from "../hooks/useIntersctionObserver";

import { IItem } from "../interfaces/IItem.interface";
import { IFilterBy } from "../interfaces/IFilterBy.interface";

import CategoriesToFilter from "../data/CategoriesToFilter";

import ListContainer from "../assets/styles/layout/ItemList.styled";
import StyledSearchContainer, {
  LeonhardCulmann,
  StyledNoSearch,
  StyledSearchHeader,
  StyledSearchSubHeader,
} from "../assets/styles/pages/Search.styled";
import PrimaryButton from "../assets/styles/base/Button.styled";
import { FetchErrorMessage } from "../assets/styles/components/RecentItems.styled";

import Categories from "../components/Categories";
import ItemDetails from "../components/ItemDetails";
import ScreenOverlay from "../components/layout/ScreenOverlay";
import ItemCard from "../components/ItemCard";
import Loading from "../components/Loading";
import TopContainer from "../components/layout/TopContainer";
import LeftContainer from "../components/layout/LeftContainer";

import Text from "../data/enums";
import FadeIn from "../assets/styles/layout/FadeIn.styled";
import Modal from "../components/Modal";
import useModalContext from "../hooks/useModalContext";
import Chat from "../components/Chat";

const Search = () => {
  const { modalType } = useModalContext();

  const [searchParams, setSearchParams] = useSearchParams();

  const [filterBy, setFilterBy] = useState<IFilterBy>({
    queryText: "",
    category: searchParams.get("category") || "",
    page: 0,
    sortBy: "createdAt",
    sortOrder: "desc",
    limit: 3,
  });
  const [isLeftContainerOpen, setIsLeftContainerOpen] =
    useState<boolean>(false);

  const [showLoader, setShowLoader] = useState(false);

  const observerElem: RefObject<any> = useRef(null);

  const { useInfiniteQueryAllItems } = useItems();

  const {
    data,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  }: UseInfiniteQueryResult<IItem[], any> = useInfiniteQueryAllItems(filterBy);

  useEffect(() => {
    setShowLoader(true);
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 900);
    return () => clearTimeout(timeoutId);
  }, [searchParams]);

  const onSetFilter = useCallback(
    (property: string, value: any) => {
      const newFilter = { ...filterBy, [property]: value };
      if (property === "category") {
        setIsLeftContainerOpen(false);
        newFilter.queryText = "";
        const queryParams = {
          category: newFilter.category,
        };
        setSearchParams(queryParams);
      }
      setFilterBy(newFilter);
    },
    [filterBy, setSearchParams]
  );

  useEffect(() => {
    onSetFilter("queryText", searchParams.get("q") ?? "");
  }, [searchParams]);

  const debouncedFetchNextPage = debounce(fetchNextPage, 500);

  useIntersectionObserver({
    target: observerElem,
    onIntersect: debouncedFetchNextPage,
    enabled: hasNextPage && !isFetchingNextPage,
    dependencies: [showLoader, isLoading, isFetchingNextPage],
  });

  const toggleLeftContainer = () => {
    setIsLeftContainerOpen((LeftContainerOpenState) => !LeftContainerOpenState);
  };

  useOverflow(isLeftContainerOpen);

  if (showLoader) return <Loading pos="center" />;
  return (
    <>
      <TopContainer>
        <PrimaryButton
          fontSize="s"
          width="fit-content"
          height="50px"
          onClick={toggleLeftContainer}
        >
          Categories
        </PrimaryButton>
      </TopContainer>
      <FadeIn>
        <StyledSearchHeader>{Text.SearchPageHeader}</StyledSearchHeader>
        <StyledSearchSubHeader>
          {Text.SearchPageSubHeader}
        </StyledSearchSubHeader>
        <LeonhardCulmann>Leonhard Culmann&apos;s</LeonhardCulmann>
      </FadeIn>
      <StyledSearchContainer>
        <LeftContainer isLeftContainerOpen={isLeftContainerOpen}>
          <Categories
            categories={CategoriesToFilter}
            onSetFilter={onSetFilter}
          />
        </LeftContainer>
        <ListContainer>
          {isSuccess &&
            data.pages &&
            data.pages.map((page) =>
              page.map((item) => <ItemCard key={item._id} item={item} />)
            )}
          {isLoading && <Loading />}
          {isError && <FetchErrorMessage>{error}</FetchErrorMessage>}
        </ListContainer>
      </StyledSearchContainer>
      <div ref={observerElem}>
        {!isFetchingNextPage && !hasNextPage ? (
          <StyledNoSearch>No Results Left...</StyledNoSearch>
        ) : (
          <Loading size="small" />
        )}
      </div>
      <Modal>{modalType === "item" ? <ItemDetails /> : <Chat />}</Modal>
      <ScreenOverlay
        styleMode="darken"
        handleClick={toggleLeftContainer}
        isLeftContainerOpen={isLeftContainerOpen}
      />
    </>
  );
};

export default Search;
