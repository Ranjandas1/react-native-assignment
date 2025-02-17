import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { Check } from "lucide-react-native";
import TrackCard from "@/components/TrackCard";
import { useFonts } from "expo-font";
import { Image } from "expo-image";

export default function Index() {
  const [fontsLoaded] = useFonts({
    NTBrickSans: require("../assets/fonts/NTBrickSans.ttf"),
    CircularStd: require("../assets/fonts/CircularStd-Book.otf"),
    CooperHewitt: require("../assets/fonts/CooperHewitt-Medium.otf"),
  });

  useEffect(() => {
    console.log(fontsLoaded ? "Fonts Loaded" : "Fonts Not Loaded");
  }, [fontsLoaded]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / 300);
    setActiveIndex(index);
  };

  return (
    <ImageBackground
      source={require("../assets/images/image.png")}
      style={styles.background}
    >
      <View>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText} adjustsFontSizeToFit={true}>
              pick your track
            </Text>
            <Text style={styles.headerSecondText}>time to build 🚀</Text>
          </View>
          <View>
            <Image
              source={require("../assets/images/badge.png")}
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.subContainer}>
          <Check color={"#07E79D"} />
          <Text style={styles.subtitle}>
            Switch or add tracks anytime as you grow
          </Text>
        </View>

        <View style={styles.subContainer}>
          <Check color={"#07E79D"} />
          <Text style={styles.subtitle}>
            Complete your track to unlock new skills and projects!
          </Text>
        </View>

        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.cardContainer}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          pagingEnabled={true}
        >
          <TrackCard
            image={require("../assets/images/webDev.gif")}
            title="intro to coding with web"
            description="start building websites with html & css, the building blocks that power the web. grow into full-stack coding!"
            index={0}
          />
          <TrackCard
            image={require("../assets/images/ai.gif")}
            title="intro to coding with ai"
            description="learn python basics and dive into ai. build practical ai apps, get hands-on with ml models and grow into ai engineering!"
            index={1}
          />
        </ScrollView>

        {/* Indicator */}
        <View style={styles.lineContainer}>
          <View style={[styles.line, activeIndex === 0 && styles.activeLine]} />
          <View style={[styles.line, activeIndex === 1 && styles.activeLine]} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "#0A0A0A",
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontFamily: "NTBrickSans",
    color: "#A3A3A3",
    overflow: "visible",
  },
  headerSecondText: {
    fontSize: 22,
    fontFamily: "NTBrickSans",
    marginTop: 8,
    color: "#EFD84C",
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    alignItems: "center",
  },
  subContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 20,
  },
  subtitle: {
    color: "#AAAAAA",
    fontSize: 20,
    lineHeight: 30,
    fontFamily: "CircularStd",
  },
  cardContainer: {
    gap: 20,
    marginTop: 35,
  },
  lineContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 30,
    width: 104,
    height: 2,
    alignSelf: "center",
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#333",
  },
  activeLine: {
    backgroundColor: "#fff",
  },
});
