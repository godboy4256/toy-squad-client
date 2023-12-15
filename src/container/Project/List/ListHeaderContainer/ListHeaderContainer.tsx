import SearchBar from "@/component/input/SearchBar/SearchBar";
import {
  ListHeaderContainerStyle,
  TopFilterContainer,
} from "./ListHeaderContainer.style";
import React from "react";

export function ListHeaderContainer() {
  return (
    <ListHeaderContainerStyle>
      <SearchBar />
      <TopFilterContainer></TopFilterContainer>
    </ListHeaderContainerStyle>
  );
}
