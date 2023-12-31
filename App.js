import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import StudentDashboard from "./screens/StudentDashboard";
import Feedback from "./screens/Feedback";
import StudentProfile from "./screens/StudentProfile";
import CourseSummary from "./screens/CourseSummary";



const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="studentDashboard"
          component={StudentDashboard}
          options={{
            title: "Dashboard",
          }}
        />
        <Stack.Screen
          name="feedback"
          component={Feedback}
          options={{
            title: "Feedback",
          }}
        />

      <Stack.Screen
          name="StudentProfile"
          component={StudentProfile}
          options={{
            title: "Student Profile",
          }}
        />

      <Stack.Screen
          name="CourseSummary"
          component={CourseSummary}
          options={{
            title: "Course Summary",
          }}
        />



      


      </Stack.Navigator>
    </NavigationContainer>
  );
}
