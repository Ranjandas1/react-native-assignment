import { StyleSheet, View, ScrollView, Text } from "react-native";
import Animated from "react-native-reanimated";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { Image } from "expo-image";
import { SharedElement } from "react-navigation-shared-element";

const TOOLS = [
  { name: "HTML", icon: require("@/assets/images/html.png") },
  { name: "CSS", icon: require("@/assets/images/css.png") },
  { name: "TAILWIND", icon: require("@/assets/images/tailwind.png") },
  { name: "JAVASCRIPT", icon: require("@/assets/images/javascript.png") },
  { name: "CURSOR.AI", icon: require("@/assets/images/cursor.png") },
  { name: "GSAP\nANIMATION", icon: require("@/assets/images/gsap.png") },
  { name: "FRAMER\nMOTION", icon: require("@/assets/images/framer.png") },
];

export function WebDevContent() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <View style={styles.ImageContainer}>
          <SharedElement id={`card.${0}.image`}>
            <Image
              source={require("@/assets/images/webDev.gif")}
              style={styles.mainImage}
            />
          </SharedElement>

          <Image
            source={require("@/assets/images/level1.png")}
            style={styles.levelBadge}
          />
        </View>

        <View style={styles.textContent}>
          <Text style={styles.title}>intro to coding with web dev 🌐</Text>
          <Text style={styles.description}>
            start building websites with html & css, the building blocks that
            power the web. grow into full-stack coding!
          </Text>
        </View>

        <View style={styles.toolsSection}>
          <View style={styles.dashedBorder} />
          <View style={styles.toolsHeader}>
            <Image
              source={require("@/assets/images/tap.png")}
              style={styles.toolsIcon}
            />
            <Text style={styles.toolsTitle}>TOOLS COVERED (7)</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.toolsList}
          >
            {TOOLS.map((tool, index) => (
              <View key={index} style={styles.toolItem}>
                <Image source={tool.icon} style={styles.toolIcon} />
                <Text style={styles.toolName}>{tool.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.levelSection}>
          <View style={styles.dashedBorder} />
          <Text style={styles.startingTitle}>
            let's choose your starting point for this track ⛳️
          </Text>
          <View style={styles.levelRow}>
            <MaterialIcons name="check" size={20} color="#00FF9D" />
            <Text style={styles.levelAssigned}>
              you're assigned sub-skill{" "}
              <Entypo name="bar-graph" size={24} color="yellow" />{" "}
              <Text style={styles.levelHighlight}>LEVEL 3 </Text>
              {"\n"}based on your skills
            </Text>
          </View>
          <View style={styles.levelRow}>
            <MaterialIcons name="check" size={20} color="#00FF9D" />
            <Text style={styles.levelChange}>
              you can change levels if you wish!
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  content: {
    flex: 1,
  },
  ImageContainer: {
    width: "100%",
    height: 250,
    position: "relative",
    marginBottom: 24,
  },
  mainImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  levelBadge: {
    position: "absolute",
    right: 2,
    top: 3,
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  textContent: {
    marginBottom: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    color: "#FCF2D0",
    fontFamily: "CircularBook",
    marginBottom: 12,
  },
  description: {
    fontSize: 18,
    color: "#888888",
    lineHeight: 24,
    fontFamily: "CircularLight",
  },
  toolsSection: {
    paddingVertical: 32,
    position: "relative",
  },
  dashedBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#333333",
  },
  toolsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginLeft: 24,
  },
  toolsIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  toolsTitle: {
    color: "#A3A3A3",
    fontSize: 16,
    fontFamily: "CircularBook",
    letterSpacing: 1,
  },
  toolsList: {
    flexDirection: "row",
    marginLeft: 20,
    paddingRight: 20,
  },
  toolItem: {
    alignItems: "center",
    marginRight: 25,
  },
  toolIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
    resizeMode: "contain",
  },
  toolName: {
    color: "#A3A3A3",
    fontSize: 12,
    fontFamily: "CircularBook",
    textAlign: "center",
  },
  startingTitle: {
    fontSize: 24,
    color: "#888888",
    fontFamily: "CircularBook",
    marginBottom: 2,
    marginHorizontal: 24,
    lineHeight: 30,
  },
  levelSection: {
    paddingTop: 32,
    gap: 16,
  },
  levelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginHorizontal: 24,
  },
  levelAssigned: {
    fontSize: 16,
    color: "#888888",
  },
  levelHighlight: {
    color: "#FFE81A",
  },
  levelChange: {
    fontSize: 16,
    color: "#888888",
  },
});
