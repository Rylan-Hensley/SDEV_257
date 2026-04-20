import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-screens";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  nav: {
    backgroundColor: "black",
  },
  listNameContainer : {

  },
  listName: {
    fontWeight: 'bold',
    fontSize: 30,
    color: "#FFF",
  },

  item: {
    height: 60,
    margin: 6,
    padding: 5,
    color: "#FFF",
    borderWidth: 1,
    borderColor: "yellow",
    textAlign: "center",
    fontSize: 20,
  },
  list: {
    backgroundColor: "black",
    height: 400
  },
  searchBarContainer : {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  searchBar : { 
    paddingVertical: 15,
    paddingHorizontal: 80,
    Width: 250,
    backgroundColor : "black",
    borderColor: "yellow",
    borderWidth: 1,
    color: "#FFF",
  },
  addWrapper : { 
    borderColor: "yellow",
    borderWidth: 1,
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: "#FFF",
  },
  addText : { 
    color: "#FFF",
  },
  modalContainer : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText : {
    fontSize: 16,
    color: "#FFF",
  },
  modalInner : {
    backgroundColor: "black",
    borderColor: "yellow",
    borderWidth: 1,
    padding: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton : {
    margin: 10,
    fontSize: 16,
    color: "#FFF",
  },
  scroll: {
    height: 1,
    alignSelf: "stretch",
  },
  scroll:{
    height:1,
    alignSelf: "center",
    justifySelf: "center",
    margin: 10
  },
  swipeItem:{
    width: 300,
    height: 30,
    backgroundColor: "black",
    justifyContent: "center",
    justifySelf: "center"
  },
  swipeItemText:{
    textAlign: "center",
    color: "#FFF",
  },
  swipeBlank:{
    width: 200,
    height: 30,
  },
  swipeableOpacity: {
    alignSelf: "center",
  },
});