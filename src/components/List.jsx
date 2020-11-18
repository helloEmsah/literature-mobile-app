import React from "react";
import { FlatList, StyleSheet, View, Text, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

const List = (props) => {
  let lists = [
    {
      title: "Sink the Bismarck",
      author: "winston Churcill",
      img: require("../../assets/img/pdfCover.png"),
      publication: 1943,
    },
    {
      title: "Midway",
      author: "Chester Nimitz",
      img: require("../../assets/img/pdfCover.png"),
      publication: 1453,
    },
    {
      title: "Project Habakkuk",
      author: "Geoffrey Pyke",
      img: require("../../assets/img/pdfCover.png"),
      publication: 1943,
    },
    {
      title: "Rule by Force",
      author: "Nobunaga Oda",
      img: require("../../assets/img/pdfCover.png"),
      publication: 1568,
    },
    {
      title: "Siege of Yorktown",
      author: "George Washington",
      img: require("../../assets/img/pdfCover.png"),
      publication: 1781,
    },
    {
      title: "Les Paul",
      author: "Lester William Polsfuss",
      img: require("../../assets/img/pdfCover.png"),
      publication: 1952,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.txtSection}>List Literature</Text>
      <FlatList
        numColumns={2}
        data={lists}
        pagingEnabled={true}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.content}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.img} />
              </View>
              <Text style={styles.txtTitle}>{item.title}</Text>
              <View style={styles.txtWrapper}>
                <Text style={styles.txtAuthor}>{item.author}</Text>
                <Text style={styles.txtPublication}>{item.publication}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#161616",
    padding: 10,
  },
  content: {
    marginLeft: 10,
    flexDirection: "column",
  },
  imageContainer: {
    alignItems: "center",
    width: 150,
    height: 200,
    borderRadius: 5,
  },
  image: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  txtSection: {
    textAlign: "center",
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  txtTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  txtAuthor: {
    color: "white",
    fontSize: 12,
  },
  txtPublication: {
    color: "white",
    fontSize: 12,
    marginBottom: 20,
    // marginRight: 20,
  },
  txtWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default List;
