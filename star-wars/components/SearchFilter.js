import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import SearchModal from "./SearchScreen";
import styles from "../styles";

export default function SearchField(props) {
    const [text, setText] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    const [items, setItems] = useState( [] );  
    const [filteredItems, filterItems] = useState( [] );

    function toggleModal() {
        console.log(text);
        setModalVisible(!modalVisible);
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
        if ((items[item].name).toLowerCase().includes(filter.toLowerCase())) {
          newArray.push(items[item]);
        }
      }
      filterItems(newArray);
    }
  }


    
    return (
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
      
    );
}
