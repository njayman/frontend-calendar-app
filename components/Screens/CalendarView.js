import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Switch,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Calendar } from "react-native-calendars";
import AgendaView from "../Partials/Calendar/AgendaView";

const CalendarView = ({ navigation }) => {
  const isPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };
  const [orientation, setOrientation] = useState(
    isPortrait() ? "portrait" : "landscape"
  );

  useEffect(() => {
    Dimensions.addEventListener("change", () => {
      setOrientation(isPortrait() ? "portrait" : "landscape");
    });
  }, [Dimensions]);

  const [showAgenda, setShowAgenda] = useState();
  const [selectedDate, setSelectedDate] = useState(formatDate());
  const toggleShowAgenda = () => {
    setShowAgenda((prevState) => !prevState);
  };

  function formatDate() {
    var d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear(),
      timestamp = d.getTime();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return {
      dateString: [year, month, day].join("-"),
      day,
      month,
      timestamp,
      year,
    };
  }
  return (
    <ScrollView>
      <Pressable
        style={styles.button}
        onPress={() => navigation?.navigate("Home")}
      >
        <Text style={styles.buttonText}>Back to home</Text>
      </Pressable>
      <View
        style={{
          // flex: 1,
          flexDirection: orientation === "portrait" ? "column" : "row",
        }}
      >
        <View style={{ flex: orientation === "portrait" ? 1 : 2, margin: 10 }}>
          <View style={styles.calendarSwitchNav}>
            <Text>Switch to {showAgenda ? "Calendar" : "Agenda"}</Text>
            <Switch value={showAgenda} onValueChange={toggleShowAgenda} />
          </View>
          <Calendar
            onDayPress={(day) => {
              setSelectedDate(day);
            }}
            customStyle={{
              weekendDayText: {
                color: "#ff0000",
              },
            }}
            markSunday={true}
            markingType={"custom"}
            markedDates={{ weekendStyle: { marked: true, dotColor: "red" } }}
            theme={{
              "stylesheet.calendar.header": {
                dayTextAtIndex0: {
                  color: "#ff0000",
                },
              },
            }}
          />
        </View>
        {showAgenda && (
          <View
            style={{ flex: orientation === "portrait" ? 1 : 3, margin: 10 }}
          >
            <AgendaView date={selectedDate} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default CalendarView;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#123456",
    padding: 10,
  },
  buttonText: {
    color: "#ffffff",
  },
  calendarSwitchNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
