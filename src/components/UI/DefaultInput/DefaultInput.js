import React from "react";
import { TextInput, StyleSheet } from "react-native";

const defaultInput = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[
      styles.input,
      props.style,
      props.valid && props.valid ? styles.invalid : null
    ]}
  />
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    margin: 8
  },
  invalid: {
    backgroundColor: "#f9c0c0",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5
  }
});

export default defaultInput;
