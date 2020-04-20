import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import RestaurantsList from "../components/RestaurantsList";
import useRestaurants from "../hooks/useRestaurants";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterByPrice = (price) =>
    restaurants.filter((restaurant) => restaurant.price === price);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {!!errorMessage && <Text>{errorMessage}</Text>}
      <Text>We have found {restaurants.length} restaurants</Text>
      <RestaurantsList
        restaurants={filterByPrice("$")}
        title="Cost Effective"
      />
      <RestaurantsList restaurants={filterByPrice("$$")} title="Bit Pricier" />
      <RestaurantsList restaurants={filterByPrice("$$$")} title="Big Spender" />
      <RestaurantsList
        restaurants={filterByPrice("$$$$")}
        title="One Percenter"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
