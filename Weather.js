import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherIcon = {
  Cloud: {
    Icon: "cloud",
    gradients: ["#077637", "#8AFCFF"],
    color: "#cff0ff",
  },
  Thunderstorm: {
    Icon: "thunderstorm",
    gradients: ["#41228b", "#342319"],
    color: "#ffff54",
  },
  Drizzle: {
    Icon: "water-outline",
    gradients: ["#fbffff", "#b2797e"],
    color: "#f3f4ff",
  },
  Rain: {
    Icon: "water",
    gradients: ["#385885", "#c88927"],
    color: "#f3f4ff",
  },
  Snow: {
    Icon: "snow",
    gradients: ["#84fbff", "#95ccc7"],
    color: "#b3ffd0",
  },
  Mist: {
    Icon: "reorder-two-outline",
    gradients: ["#96c1da", "#376379"],
    color: "#b6acac",
  },
  Fog: {
    Icon: "reorder-three-outline",
    gradients: ["#86a4b7", "#2c495a"],
    color: "#b6acac",
  },
  Haze: {
    Icon: "reorder-four-outline",
    gradients: ["#657986", "#222530"],
    color: "#b6acac",
  },
  Smoke: {
    Icon: "bonfire",
    gradients: ["#ea649c", "#80947c"],
    color: "#7f8685",
  },
  Ash: {
    Icon: "bonfire-outline",
    gradients: ["#969696", "#253a33"],
    color: "#7d7d7d",
  },
  Dust: {
    Icon: "bonfire-outline",
    gradients: ["#e8dede", "#3a333a"],
    color: "#ffffff",
  },
  Sand: {
    Icon: "md-hourglass-outline",
    gradients: ["#fff48e", "#e87962"],
    color: "#fac263",
  },
  Squall: {
    Icon: "boat-outline",
    gradients: ["#cf7adc", "#abcdef"],
    color: "#152b8e",
  },
  Tornado: {
    Icon: "finger-print",
    gradients: ["#ff6bad", "#83ffa4"],
    color: "#f0ffea",
  },
  Clear: {
    Icon: "paper-plane-outline",
    gradients: ["#e8dede", "#abcdef"],
    color: "#000000",
  },
};
export default function Weather({ temp, condition, description }) {
  return (
    <LinearGradient
      colors={weatherIcon[condition].gradients}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.condition}>{condition}</Text>
        <Ionicons
          name={weatherIcon[condition].Icon}
          size={90}
          color={weatherIcon[condition].color}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>{temp}℃</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 1,
  },
  condition: {
    fontSize: 55,
    fontWeight: "100",
  },
  text: {
    fontSize: 60,
    fontWeight: "500",
  },
  borderContainer: {
    flex: 1,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
