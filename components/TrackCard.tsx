import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import { SharedElement } from "react-navigation-shared-element";
import { ArrowRight } from "lucide-react-native";
import Animated from "react-native-reanimated";

interface TrackCardProps {
  image: any; // Use `any` or the correct type for `ImageSourcePropType`
  title: string;
  description: string;
  index: number;
}

const TrackCard: React.FC<TrackCardProps> = ({
  image,
  title,
  description,
  index,
}) => {
  const handlePress = () => {
    router.push({
      pathname: "/Details",
      params: { activeIndex: index },
    });
  };

  return (
    <Pressable style={styles.card} onPress={handlePress}>
      <SharedElement id={`card.${index}.image`}>
        <Animated.Image source={image} style={styles.image} />
      </SharedElement>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>VIEW TRACK DETAILS</Text>
          <ArrowRight color={"white"} />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#000",
    width: 290,
    height: 465,
    borderColor: "white",
    borderWidth: 1,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  textContainer: {
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  cardDescription: {
    fontSize: 16,
    color: "#aaa",
    marginVertical: 10,
  },
  button: {
    borderColor: "white",
    borderWidth: 1,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
});

export default TrackCard;
