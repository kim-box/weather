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
  color: "",
  Thunderstorm: {
    Icon: "thunderstorm",
    gradients: ["", ""],
    color: "",
  },
  Drizzle: {
    Icon: "md-water",
    gradients: ["", ""],
    color: "",
  },
  Rain: {
    Icon: "water",
    gradients: ["", ""],
    color: "",
  },
  Snow: {
    Icon: "snow",
    gradients: ["", ""],
    color: "",
  },
  Mist: {
    Icon: "recorder-one-outline",
    gradients: ["", ""],
    color: "",
  },
  Fog: {
    Icon: "recoder-two-outline",
    gradients: ["", ""],
    color: "",
  },
  Haze: {
    Icon: "recoder-three-outline",
    gradients: ["", ""],
    color: "",
  },
  Smoke: {
    Icon: "bonfire",
    gradients: ["", ""],
    color: "",
  },
  Ash: {
    Icon: "bonfire-outline",
    gradients: ["", ""],
    color: "",
  },
  Dust: {
    Icon: "bonfire-outline",
    gradients: ["", ""],
    color: "",
  },
  Sand: {
    Icon: "md-hourglass-outline",
    gradients: ["", ""],
    color: "",
  },
  Squall: {
    Icon: "boat-outline",
    gradients: ["", ""],
    color: "",
  },
  Tornado: {
    Icon: "finger-print",
    gradients: ["", ""],
    color: "",
  },
  Clear: {
    Icon: "paper-plane-outline",
    gradients: ["#cf7adc", "#abcdef"],
    color: "#df3fca",
  },
};
export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherIcon[condition].gradients}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>{temp}</Text>
          <Text style={styles.text}>{condition}</Text>
          <Ionicons
            name={weatherIcon[condition].Icon}
            size={90}
            color={weatherIcon[condition].color}
          />
        </View>
        <View style={styles.container}></View>
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
  },
  text: {
    fontSize: 50,
  },
});
