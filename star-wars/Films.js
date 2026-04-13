import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StatusBar } from "react-native";
import styles from "./styles";
import SearchField from "./components/SearchField";

export default function Films() {
  const [items, setItems] = useState( [] );
  const API = "https://www.swapi.tech/api/films/";

  useEffect(() => {
    handleItems()
  }, [])

  const handleItems = () => {

    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data.results);
      })
  }


  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View>
        <Text style={styles.listName}>Films</Text>
      </View>
      
      <SearchField />
      
      <View style={styles.list}>
          <FlatList data = {items} 
            renderItem = {({item}) => 
              <View style = {styles.itemView}>
                <Text style = {styles.item} >{item.title}</Text>
              </View>}/>

      </View>
    </View>
  );
}