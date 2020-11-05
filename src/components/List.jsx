import React from "react";
import { FlatList, StyleSheet, View, Text, Image } from "react-native";

const List = (props) => {
  let lists = [
    {
      title: "Sink the Bismarck",
      author: "winston Churcill",
      img: require("../../assets/img/pdfCover.png"),
      publication: 1943,
    },
    {
      title: "Fall of Constantinople",
      author: "Mehmed II",
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
        data={lists}
        pagingEnabled={true}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.content}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.img} />
              </View>
              <Text style={styles.txtTitle}>{item.title}</Text>
              <Text style={styles.txtAuthor}>{item.author}</Text>
              <Text style={styles.txtPublication}>{item.publication}</Text>
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
    padding: 30,
  },
  content: {
    marginLeft: 50,
  },
  imageContainer: {
    alignItems: "center",
    width: 200,
    height: 300,
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
    fontSize: 24,
    fontWeight: "bold",
  },
  txtAuthor: {
    color: "white",
    fontSize: 18,
  },
  txtPublication: {
    color: "white",
    fontSize: 14,
    marginBottom: 20,
  },
});

export default List;
