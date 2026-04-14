import React from "react";
import { Modal, Text, View } from "react-native";
import styles from "../styles";

export default function SearchModal(props) {
  return (
    <Modal {...props}>
      <View style={styles.modalContainer}>

        <View style={styles.modalInner}>

          <Text style={styles.modalText}>{props.message}</Text>      

          <View style={styles.buttonContainer}> 

            <Text style={styles.modalButton} onPress={props.onPressConfirm}>
              Close
            </Text>

          </View>

        </View>
      </View>
    </Modal>
  );
}
SearchModal.defaultProps = {
  transparent: true,
  onRequestClose: () => {},
};