import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StatusBar, Keyboard, ScrollView } from "react-native";
import styles from "./styles";
import SearchField from "./components/SearchField";
import { SafeAreaView } from "react-native-safe-area-context";
import Swipeable from "./components/Swipeable";
import SwipeModal from "./components/SwipeModal";

export default function Films() {
  const [items, setItems] = useState( [] );
  const API = "https://www.swapi.tech/api/films/";
  const [itemName, setItemName] = useState();
  const [modalVisible, setModalVisible] = useState(false);

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

  function toggleModal() {
    setModalVisible(!modalVisible);
  }
  
  function onSwipe(name) {
    return () => {
      toggleModal();
      setItemName(name);
    };
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
              <Swipeable name = {item.name} key = {item.id} onSwipe = {onSwipe(item.name)}>
                <View style = {styles.itemView}>
                  <Text style = {styles.item} >{item.name}</Text>
                </View>
              </Swipeable>
            } style={{  }}/>

      </View>

      <SwipeModal
        animationType="fade"
        visible={modalVisible}
        onPressConfirm={toggleModal}
        message = {itemName}
        transparent = {true}
      />

    </View>
  );
}