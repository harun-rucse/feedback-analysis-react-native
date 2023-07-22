import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";


const Option = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View className="flex flex-row items-center space-x-3 space-y-2">
      <Checkbox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
      <Text className="text-sm font-bold text-gray-700">Strongly Agree</Text>
    </View>
  );
};

const SingleQuestion = () => {
  return (
    <View className="space-y-2 pt-4">
      <Text className="text-sm font-bold text-gray-500">
        Learning Objectives and Outcomes of the course were clearly presented
        before the students
      </Text>
      <View className="px-6 pt-1">
        <Option />
        <Option label="Agree"/>
        <Option />
        <Option />
        <Option />
      </View>
    </View>
  );
};

export default function Feedback({ navigation }) {
  const handleFeedback = () => {
    navigation.navigate("studentDashboard");
  };

  return (
    <SafeAreaProvider>
      <ScrollView className="flex-1 bg-white pt-4">
        <View className="flex-1 space-y-3 items-center px-5 pb-10">
          <Text className="text-xl font-bold text-gray-800">
            Course Feedback Questionnarie
          </Text>
          <Text className="text-sm font-semibold">
            Please be honest, frank and constructive while providing your
            feedback
          </Text>
          <View className="w-full flex pt-8">
            <Text className="text-sm font-bold text-gray-800 uppercase">
              Content and organization of course
            </Text>

            <SingleQuestion />
            <SingleQuestion />
            <SingleQuestion />
            <SingleQuestion />
          </View>

          <View className="flex w-full space-y-2 pt-4">
            <Text className="font-bold text-gray-500 text-base">
              Give us some word
            </Text>
            <TextInput
              className="text-base font-semibold border border-gray-300 w-full p-3 rounded-md"
              editable
              multiline
              numberOfLines={4}
            />
          </View>

          <TouchableOpacity
            className="flex flex-row items-center justify-center w-full p-3 bg-green-600 rounded-md"
            onPress={handleFeedback}
          >
            <Text className="text-white text-base uppercase font-bold">
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
