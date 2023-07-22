import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function NavigateModal({ open, setOpen, navigation }) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setOpen(!open);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>Feedback or Course summary</Text>
              <Pressable onPress={() => setOpen(!open)}>
                <AntDesign name="close" size={24} color="#777" />
              </Pressable>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("feedback")}
            >
              <Text style={styles.buttonText}>Feedback</Text>
            </Pressable>
            <Pressable
              style={styles.courseButton}
              onPress={() => navigation.navigate("CourseSummary")}
            >
              <Text style={styles.buttonText}>Course Summary</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  title: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 16,
  },
  subtitle: {
    color: "#777",
    fontSize: 14,
    marginBottom: 20,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#008000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
  },
  courseButton: {
    backgroundColor: "#0000FF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
