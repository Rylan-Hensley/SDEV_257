import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import SearchModal from "./SearchScreen";
import styles from "../styles";

export default function SearchField(props) {
    const [text, setText] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    function toggleModal() {
        console.log(text);
        setModalVisible(!modalVisible);
    }

    
    return (
      <View style={styles.searchBarContainer}>
        <TextInput 
          style={styles.searchBar}
          onChangeText={text => setText(text)}
          placeholder={"Search Here"} 
          placeholderTextColor="#FFF" 
        />

        <SearchModal
          animationType="fade"
          visible={modalVisible}
          onPressConfirm={toggleModal}
          message = {text}
          transparent = {true}
        />

        <TouchableOpacity onPress={toggleModal} >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>            

    );
}
