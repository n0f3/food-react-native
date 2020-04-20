import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import RestaurantsList from "../components/RestaurantsList";
import useRestaurants from "../hooks/useRestaurants";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterByPrice = (price) =>
    restaurants.filter((restaurant) => restaurant.price === price);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {!!errorMessage && <Text>{errorMessage}</Text>}
      <ScrollView>
        <RestaurantsList
          restaurants={filterByPrice("$")}
          title="Cost Effective"
        />
        <RestaurantsList
          restaurants={filterByPrice("$$")}
          title="Bit Pricier"
        />
        <RestaurantsList
          restaurants={filterByPrice("$$$")}
          title="Big Spender"
        />
        <RestaurantsList
          restaurants={filterByPrice("$$$$")}
          title="One Percenter"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
