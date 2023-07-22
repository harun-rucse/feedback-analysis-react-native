
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,

} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

// Card Data
const courses = [
  {
    id: 1,
    name: "CSE 4231",
    semester: "4th Year, 2nd Semester",
    teacher: "Dr. Ali Hossain",
    teacherDesignation: "Assistant Professor",
    teacherEducation: "M.Sc Engineering in CSE",
    teacherImage: require("../assets/user-icon.jpg"),
    courseImage: require("../assets/classroom-bg.jpg"),
    created: "12 February, 2023",
    status: "Open",
    statusColor: "green",
    statusText: "Opened in 12 minutes ago",
    lastSemesterScore: 90, // Add the last semester score here
  },
  // Add other courses here...
];

// ... (import statements and other code above)

// ... (import statements and other code above)

const scoreData = [
    { label: "Course Content", score: 30 },
    { label: "Clearity of Concepts", score: 90 },
    { label: "Teaching Skills", score: 50 },
    { label: "Communication Skills", score: 60 },
  ];

  const CourseSummary = ({ navigation }) => {
    const getScoreColor = (score) => {
      if (score >= 80 && score <= 99) {
        return 'green';
      } else if (score >= 60 && score <= 79) {
        return 'blue';
      } else if (score >= 40 && score <= 59) {
        return 'orange';
      } else {
        return 'red';
      }
    };
  
    return (
      <SafeAreaProvider>
        <ScrollView className="flex-1 bg-white px-4">
          <View className="flex-1 items-center pt-8 gap-4 pb-10">
           
  
            <View className="flex space-y-4 self-stretch">
              {courses.map((course) => (
                <View key={course.id} style={styles.cardContainer}>
                  {/* Course Image */}
                  <View style={styles.imageContainer}>
                    <Image
                      source={course.courseImage}
                      style={styles.courseImage}
                      resizeMode="cover"
                    />
                  </View>
  
                  {/* Course Information */}
                  <View style={styles.courseInfo}>
                    <Text style={styles.courseName}>Course: {course.name}</Text>
                    <Text style={styles.courseTeacher}>
                      Teacher: {course.teacher}
                    </Text>
                    <Text style={styles.courseDesignation}>
                      Designation: {course.teacherDesignation}
                    </Text>
                    <Text style={styles.courseEducation}>
                      Education: {course.teacherEducation}
                    </Text>
                    <Text style={styles.courseSemester}>
                      Semester: {course.semester}
                    </Text>
                    <Text style={styles.courseCreated}>
                      Created: {course.created}
                    </Text>
                  </View>
                </View>
              ))}
  
              {/* Score Sections */}
              {scoreData.map((data, index) => (
                <View key={index} style={styles.scoreSection}>
                  <Text style={styles.scoreLabel}>{data.label}:</Text>
                  <View
                    style={[
                      styles.circle,
                      { backgroundColor: getScoreColor(data.score) },
                    ]}
                  >
                    <Text style={styles.scoreText}>{data.score}%</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    );
  };
  
  const styles = StyleSheet.create({
    // ... (existing styles above)
  
    courseInfo: {
      flex: 2,
      paddingHorizontal: 10,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
      },
      imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
      courseImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
      },
    courseName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    courseTeacher: {
      fontSize: 16,
      color: '#555',
    },
    courseDesignation: {
      fontSize: 14,
      color: '#555',
    },
    courseEducation: {
      fontSize: 14,
      color: '#555',
    },
    courseSemester: {
      fontSize: 14,
      color: '#777',
    },
    courseCreated: {
      fontSize: 14,
      color: '#777',
    },
    scoreSection: {
        flexDirection: 'column', // Updated to column direction
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
      scoreLabel: {
        fontSize: 16,
        marginBottom: 5, // Add margin at the bottom to separate label from score
      },
      circle: {
        backgroundColor: 'red',
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
      },
      scoreText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
      },
  });
  
  export default CourseSummary;
  
  
