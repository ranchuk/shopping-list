import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddIItem";
export default function App() {
  const [items, setItems] = useState([
    { id: uuidv4(), text: "Milk" },
    { id: uuidv4(), text: "Eggs" },
    { id: uuidv4(), text: "Bread" },
    { id: uuidv4(), text: "Juice" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Please enter an item", { text: "Ok" });
    } else {
      setItems((prevItems) => {
        return [...prevItems, { id: uuidv4(), text }];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
