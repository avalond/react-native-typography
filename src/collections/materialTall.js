import { Platform } from "react-native";
import CombinedStyleSheet from "../internal/CombinedStyleSheet";
import suffixProperties from "../internal/suffixProperties";
import material from "./material";
import systemWeights from "../helpers/systemWeights";
import sanFranciscoSpacing from "../helpers/sanFranciscoSpacing";

// https://material.io/guidelines/style/typography.html#typography-styles

const getStylesForColor = color => {
  const colorSuffix = color === "white" ? "White" : "";
  return {
    display4: {
      ...material[`display4${colorSuffix}Object`],
      ...systemWeights.regular,
      includeFontPadding: true,
      lineHeight: 164
    },
    display3: {
      ...material[`display3${colorSuffix}Object`],
      includeFontPadding: true,
      lineHeight: 82
    },
    display2: {
      ...material[`display2${colorSuffix}Object`],
      includeFontPadding: true,
      lineHeight: 66
    },
    display1: {
      ...material[`display1${colorSuffix}Object`],
      includeFontPadding: true,
      lineHeight: 50
    },
    headline: {
      ...material[`headline${colorSuffix}Object`],
      includeFontPadding: true,
      lineHeight: 36
    },
    title: {
      ...material[`title${colorSuffix}Object`],
      ...systemWeights.bold,
      fontSize: 21,
      includeFontPadding: true,
      lineHeight: 34,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(21) : undefined
    },
    subheading: {
      ...material[`subheading${colorSuffix}Object`],
      fontSize: 17,
      includeFontPadding: true,
      lineHeight: 26,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(17) : undefined
    },
    body2: {
      ...material[`body2${colorSuffix}Object`],
      ...systemWeights.bold,
      fontSize: 15,
      includeFontPadding: true,
      lineHeight: 26,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(15) : undefined
    },
    body1: {
      ...material[`body1${colorSuffix}Object`],
      fontSize: 15,
      includeFontPadding: true,
      lineHeight: 23,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(15) : undefined
    },
    caption: {
      ...material[`caption${colorSuffix}Object`],
      fontSize: 13,
      includeFontPadding: true,
      lineHeight: 19,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(13) : undefined
    },
    button: {
      ...material[`button${colorSuffix}Object`],
      ...systemWeights.bold,
      fontSize: 15,
      includeFontPadding: true,
      lineHeight: 23,
      letterSpacing: Platform.OS === "ios" ? sanFranciscoSpacing(15) : undefined
    }
  };
};

export default CombinedStyleSheet.create({
  ...getStylesForColor("black"),
  ...suffixProperties(getStylesForColor("white"), "White")
});
