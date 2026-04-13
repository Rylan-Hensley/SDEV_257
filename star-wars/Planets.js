import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StatusBar, Keyboard } from "react-native";
import styles from "./styles";
import SearchField from "./components/SearchField";

export default function Planets() {
  const [items, setItems] = useState( [] );
  const [text, setText] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const API = "https://www.swapi.tech/api/planets/";

  useEffect(() => {
    handleItems()
  }, [])

  const handleAddText =() => {
    Keyboard.dismiss();
    setText(text)
  }

  function toggleModal() {
    console.log(text);
    setModalVisible(!modalVisible);
  }

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
        <Text style={styles.listName}>Planets</Text>
      </View>

      <SearchField />
      
      <View style={styles.list}>
          <FlatList data = {items} 
            renderItem = {({item}) => 
              <View style = {styles.itemView}>
                <Text style = {styles.item} >{item.name}</Text>
              </View>}/>

      </View>

    </View>
  );
} 