import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Login({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("studentDashboard");
  };

  return (
    <SafeAreaProvider>
      <ScrollView className="flex-1 bg-white">
        <View className="flex-1 items-center pt-28 gap-8 px-8">
          <Image
            className="w-24 h-24 rounded-full"
            source={require("../assets/user.png")}
          />
          <Text className="text-2xl font-bold">Sign in to your account</Text>
          <View className="w-full flex">
            <TextInput
              className="text-base font-semibold border border-gray-300 w-full p-3 rounded-md mb-5"
              keyboardType="email-address"
              placeholder="Enter your email"
            />
            <TextInput
              className="text-base font-semibold border border-gray-300 w-full p-3 rounded-md"
              secureTextEntry={true}
              placeholder="Enter your password"
            />
          </View>

          <TouchableOpacity
            className="flex flex-row items-center justify-center w-full p-3 bg-green-600 rounded-md"
            onPress={handleLogin}
          >
            <Text className="text-white text-base uppercase font-bold">
              Sign In
            </Text>
          </TouchableOpacity>

          {/* create a sign up link */}
          <View className="flex flex-row space-x-2">
            <Text className="text-sm font-semibold text-gray-600">
              Don't have an account?
            </Text>
            <Text
              className="text-sm font-bold text-green-500"
              onPress={() => navigation.navigate("register")}
            >
              Create an account
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
