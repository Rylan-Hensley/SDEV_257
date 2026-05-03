import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StatusBar, Keyboard, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Animated, { Easing, SlideInLeft, SlideOutRight, StretchInX} from "react-native-reanimated";
import NetInfo, {addEventListener} from "@react-native-community/netinfo";
import styles from "./styles";
import SearchField from "./components/SearchField";
import { SafeAreaView } from "react-native-safe-area-context";
import Swipeable from "./components/Swipeable";
import SwipeModal from "./components/SwipeModal";
import LazyImage from "./components/LazyImage";
import DetailsModal from "./components/DetailsModal";

// Network Connection Map
const connectedMap = {
  none: "The Force is not with you",
  unknown: "The Force is not with you",
  wifi: "The Force is with you",
  cell: "The Force is with you",
  mobile: "The Force is with you",
};

export default function Films() {

  // API and Image Links
  const API = "https://swapi.tech/api/films";
  const remote = "https://toppng.com/uploads/preview/star-wars-logo-transparent-background-11549909755ccn1ysdgwu.png";

  // States
  const [items, setItems] = useState( [] );  
  const [filteredItems, filterItems] = useState( [] );

  const [text, setText] = useState("");


  
  const [itemName, setItemName] = useState();
  const [director, setDirector] = useState();
  const [producer, setProducer] = useState();
  const [releaseDate, setRelease] = useState();
  const [openingCrawl, setOpening] = useState();


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
        setItems(data.result);
        filterItems(data.result)
      })
  }

  // Network handling
  function onNetworkChange(connection) {
    setConnected(connectedMap[connection.type]);
    //console.log(connectedMap[connection.type]);
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
  
  function onSwipe(title, director, producer, release_date, opening_crawl) {
    return () => {
      toggleModal();
      setItemName(title);
      setDirector(director);
      setProducer(producer);
      setRelease(release_date);
      setOpening(opening_crawl);
    };
}

  function searchFilter() {
    filterItems([]);
    const newArray = [];
    if (text == "") {
      filterItems(items);
    }
    else {
      filterItems([])
      for (const item in items) {
        if ((items[item].properties.title).toLowerCase().includes(text.toLowerCase())) {
          newArray.push(items[item]);
        }
      }
      filterItems(newArray);
    }
  }


  // Page View
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style = {styles.connection}>{Connected}</Text>

      <Animated.View entering={StretchInX.duration(1000)}>
        <LazyImage 
        style={{ width: 300, height: 200 }}
        resizeMode = "contain"
        source = {source}
        />
      </Animated.View>

      <View>
        
        <Text style={styles.listName}>Films</Text>
      </View>
      
      <View style={styles.searchBarContainer}>
        <TextInput 
          style={styles.searchBar}
          onChangeText={(e) => {setText(e)}}
          placeholder={"Search Here"} 
          placeholderTextColor="#FFF" 
        />

        <TouchableOpacity onPress={() => {searchFilter(text)}} >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>            

      
      <Animated.View entering={SlideInLeft.delay(500).duration(1500)} style={styles.list}>
          <FlatList data = {filteredItems} 
            renderItem = {({item}) => 
              <Swipeable 
                        name = {item.properties.title} 
                        key = {item.id} 
                        onSwipe = {onSwipe(
                                           item.properties.title,
                                           item.properties.director,
                                           item.properties.producer,
                                           item.properties.release_date,
                                           item.properties.opening_crawl
                                          )}>
                <View style = {styles.itemView}>
                  <Text style = {styles.item}>
                    {item.title}
                  </Text>
                </View>
              </Swipeable>
            } style={{  }}/>

      </Animated.View>

      <DetailsModal
        animationType="fade"
        visible={modalVisible}
        onPressConfirm={toggleModal}

        title = {itemName}
        director = {director}
        producer = {producer}
        release = {releaseDate}
        opening = {openingCrawl}

        transparent = {true}
      />

    </View>
  );
}