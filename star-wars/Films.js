import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StatusBar, Keyboard, ScrollView } from "react-native";
import styles from "./styles";
import SearchField from "./components/SearchField";
import { SafeAreaView } from "react-native-safe-area-context";
import Swipeable from "./components/Swipeable";
import SwipeModal from "./components/SwipeModal";
import LazyImage from "./components/LazyImage";

export default function Films() {
  const API = "https://www.swapi.tech/api/films/";
  const remote = "https://toppng.com/uploads/preview/star-wars-logo-transparent-background-11549909755ccn1ysdgwu.png";
  const [items, setItems] = useState( [] );  
  const [itemName, setItemName] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [source, setSource] = useState(null);

  useEffect(() => {
    handleItems()
    setSource({ uri: remote});
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
        <LazyImage 
        style={{ width: 200, height: 200 }}
        resizeMode = "contain"
        source = {source}
        />
      </View>

      <View>
        <Text style={styles.listName}>Films</Text>
      </View>
      
      <SearchField />
      
      <View style={styles.list}>
          <FlatList data = {items} 
            renderItem = {({item}) => 
              <Swipeable name = {item.title} key = {item.id} onSwipe = {onSwipe(item.title)}>
                <View style = {styles.itemView}>
                  <Text style = {styles.item} >{item.title}</Text>
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