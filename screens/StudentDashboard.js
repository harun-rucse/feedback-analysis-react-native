import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import Modal from "../components/Modal";

const courses = [
  {
    id: 1,
    name: "CSE 423",
    semester: "4th semester, 2nd year",
    teacher: "Dr. Ahmmda Hossain",
    teacherDesignation: "Assistant Professor",
    teacherEducation: "M.Sc Engineering in EEE",
    teacherImage: require("../assets/user-icon.jpg"),
    courseImage: require("../assets/classroom-bg.jpg"),
    created: "12 February, 2023",
    status: "Open",
    statusColor: "green",
    statusText: "Opened in 12 minutes ago",
  },
  {
    id: 2,
    name: "CSE 3211",
    semester: "6th semester, 3nd year",
    teacher: "Dr. Ahmmda Hossain",
    teacherDesignation: "Assistant Professor",
    teacherEducation: "M.Sc Engineering in EEE",
    teacherImage: require("../assets/user-icon.jpg"),
    courseImage: require("../assets/classroom-bg.jpg"),
    created: "10 February, 2023",
    status: "Expired",
    statusColor: "red",
    statusText: "Expired 3 days ago",
  },
];

export default function StudentDashboard({ navigation }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
    navigation.navigate("feedback");
  };

  return (
    <SafeAreaProvider>
      <ScrollView className="flex-1 bg-white px-4">
        <View className="flex-1 items-center pt-8 gap-4 pb-10">
          <View className="flex flex-row items-center px-6">
            {/* TextInput with search icon */}
            <View className="flex flex-row items-center justify-center w-full rounded-md">
              <AntDesign name="search1" size={24} color="#777" />
              <TextInput
                className="text-base font-semibold border border-gray-300 w-full px-3 py-2 rounded-md -ml-8 pl-10"
                keyboardType="default"
                placeholder="Search for a course"
              />
            </View>
            <Image
              className="w-10 h-10 rounded-full"
              source={require("../assets/user-icon.jpg")}
            />
          </View>
          <View className="w-full px-3">
            <TouchableOpacity
              className="flex self-end p-3 bg-green-600 rounded-full"
              onPress={() => setOpen(true)}
            >
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View className="flex space-y-4 self-stretch">
            {courses.map((course) => (
              <View
                key={course.id}
                className="flex w-full rounded-md overflow-hidden border border-gray-300"
              >
                <View className="relative w-full">
                  <Image
                    source={course.courseImage}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  <View className="px-8 py-6 flex gap-1">
                    <Text className="text-gray-100 text-xs font-bold">
                      Created by {course.created}
                    </Text>
                    <Text className="text-white text-2xl font-bold">
                      {course.name}
                    </Text>
                    <Text className="text-gray-100  text-xs font-bold">
                      {course.semester}
                    </Text>
                  </View>
                </View>
                <View className="relative z-50">
                  <Image
                    source={course.teacherImage}
                    className="absolute -top-8 buttom-0 right-6 w-16 h-16 object-cover rounded-full"
                  />
                </View>
                <View className="px-4 py-6">
                  <Text className="text-gray-600 font-bold">
                    {course.teacher}
                  </Text>
                  <Text className="text-gray-600 font-bold">
                    {course.teacherDesignation}
                  </Text>
                  <Text className="text-gray-600 font-bold">
                    {course.teacherEducation}
                  </Text>
                </View>
                <View className="flex flex-row justify-between px-4 py-3 border-t border-gray-300">
                  <Text className="text-gray-400 font-bold">
                    {course.statusText}
                  </Text>
                  <Text className={`font-bold text-${course.statusColor}-600`}>
                    {course.status}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <Modal open={open} setOpen={setOpen} handleClick={handleClick} />
      </ScrollView>
    </SafeAreaProvider>
  );
}
