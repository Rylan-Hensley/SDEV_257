import React from "react";
import { View, Text, Modal } from "react-native";
import styles from "../styles";

export default function DetailsModal(props) {
  return (
    <Modal {...props}>
      <View style={styles.modalContainer}>
      
        <View style={styles.modalInner}>
        
          <Text style={styles.modalText}>Title: {props.title}</Text>
          <Text style={styles.modalText}>Director: {props.director}</Text>
          <Text style={styles.modalText}>Producer: {props.producer}</Text>
          <Text style={styles.modalText}>Release Date: {props.release}</Text>
          <Text style={styles.modalText}>Opening Crawl: {props.opening}</Text>

          <View style = {styles.ButtonContainer}>

          <Text style={styles.modalButton} onPress={props.onPressConfirm}>
            Close
          </Text>

          </View>
        </View>
      </View>
    </Modal>
  );
}

DetailsModal.defaultProps = {
  onRequestClose: () => {},
};