import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Text,
  Pressable,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { WebDevContent } from "@/components/WebDevContent";
import { AIPythonContent } from "@/components/AIPythonContent";

export default function Details() {
  const { activeIndex } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState(Number(activeIndex) || 0);

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Pressable onPress={handleBack} style={styles.backButton}>
          <MaterialIcons name="chevron-left" size={30} color="#888888" />
          <Text style={styles.backText}>BACK</Text>
        </Pressable>
      </View>

      <View style={styles.tabBar}>
        <Pressable
          style={[styles.tab, activeTab === 0 && styles.activeTab]}
          onPress={() => setActiveTab(0)}
        >
          <Text
            style={[
              styles.tabText,
              { color: activeTab === 0 ? "#00FF9D" : "#888888" },
            ]}
          >
            INTRO TO WEB DEV
          </Text>
        </Pressable>
        <View style={styles.verticleLine}></View>
        <Pressable
          style={[styles.tab, activeTab === 1 && styles.activeTab]}
          onPress={() => setActiveTab(1)}
        >
          <Text
            style={[
              styles.tabText,
              { color: activeTab === 1 ? "#00FF9D" : "#888888" },
            ]}
          >
            INTRO TO AI PYTHON
          </Text>
        </Pressable>
      </View>

      <View style={styles.tabIndicator}>
        <View
          style={[
            styles.indicator,
            {
              transform: [
                {
                  translateX: activeTab * (Dimensions.get("window").width / 2),
                },
              ],
            },
          ]}
        />
      </View>
      <View style={styles.expandedCard}>
        <View style={styles.contentContainer}>
          {activeTab === 0 && <WebDevContent />}
          {activeTab === 1 && <AIPythonContent />}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    backgroundColor: "#000",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  backText: {
    color: "#888888",
    fontSize: 17,
  },
  tabBar: {
    paddingTop: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    backgroundColor: "#000",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 15,
  },
  activeTab: {
    borderBottomColor: "#00FF9D",
  },
  tabText: {
    marginHorizontal: 60,
    fontSize: 16,
    fontFamily: "CooperHewitt",
    letterSpacing: 1,
    lineHeight: 25,
    textAlign: "center",
  },
  tabIndicator: {
    height: 2,
    backgroundColor: "#333",
  },
  indicator: {
    width: Dimensions.get("window").width / 2,
    height: 2,
    backgroundColor: "#00FF9D",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#171717",
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#FFFFFF",
    opacity: 0.3,
  },
  expandedCard: {
    flex: 1,
    backgroundColor: "#000",
  },
});
