import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StatusBar, Keyboard, ScrollView } from "react-native";
import Animated, { SlideInLeft, SlideOutRight, StretchInX} from "react-native-reanimated";
import NetInfo, {addEventListener} from "@react-native-community/netinfo";
import styles from "./styles";
import SearchField from "./components/SearchField";
import { SafeAreaView } from "react-native-safe-area-context";
import Swipeable from "./components/Swipeable";
import SwipeModal from "./components/SwipeModal";
import LazyImage from "./components/LazyImage";

// Network Connection Map 
const connectedMap = {
  none: "The Force is not with you",
  unknown: "The Force is not with you",
  wifi: "The Force is with you",
  cell: "The Force is with you",
  mobile: "The Force is with you",
};

export default function Planets() {

  // API and Image links
  const API = "https://www.swapi.tech/api/planets/";
  const remote = "https://toppng.com/uploads/preview/star-wars-logo-transparent-background-11549909755ccn1ysdgwu.png";

  //States
  const [items, setItems] = useState( [] );  
  const [itemName, setItemName] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [source, setSource] = useState(null);

  const [Connected, setConnected] = useState("");
  const [networkVisible, setNetworkVisible] = useState(false);

  useEffect(() => {
    handleItems()
    setSource({ uri: remote});

    const unsubscribe = NetInfo.addEventListener(onNetworkChange);

    return () => {
      unsubscribe();}

  }, [])

  // API handling
  const handleItems = () => {

    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data.results);
      })
  }

  // Network handling
  function onNetworkChange(connection) {
    setConnected(connectedMap[connection.type]);
    console.log(connectedMap[connection.type]);
    if(connectedMap[connection.type] == 'Disconnected') {
      setNetworkVisible(true);
    }
    else {
      setNetworkVisible(true)
    }    
  }

  // SwipeModal Toggle
  function toggleModal() {
    setModalVisible(!modalVisible);
  }
  
  function onSwipe(name) {
    return () => {
      toggleModal();
      setItemName(name);
    };
}

  //Page View
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style = {styles.connection}>{Connected}</Text>
      <Animated.View entering={StretchInX.duration(1000)}>
        <LazyImage 
        style={{ width: 350, height: 200 }}
        resizeMode = "contain"
        source = {source}
        />
      </Animated.View>

      <View>
        
        <Text style={styles.listName}>Planets</Text>
      </View>

      <SearchField />
      
      
      <Animated.View entering={SlideInLeft.delay(500).duration(1500)} style={styles.list}>
          <FlatList data = {items} 
            renderItem = {({item}) => 
              <Swipeable name = {item.name} key = {item.id} onSwipe = {onSwipe(item.name)}>
                <View style = {styles.itemView}>
                  <Text style = {styles.item} >{item.name}</Text>
                </View>
              </Swipeable>
            } style={{  }}/>

      </Animated.View>

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