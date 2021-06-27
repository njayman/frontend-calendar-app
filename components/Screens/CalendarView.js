import React, { useState } from "react";
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
import { Calendar, Agenda } from "react-native-calendars";
// import * as ScreenOrientation from "expo-screen-orientation";

const CalendarView = ({ navigation }) => {
  const isPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };
  const [orientation, setOrientation] = useState(
    isPortrait() ? "portrait" : "landscape"
  );

  // Event Listener for orientation changes
  Dimensions.addEventListener("change", () => {
    setOrientation(isPortrait() ? "portrait" : "landscape");
  });
  const [showAgenda, setShowAgenda] = useState();
  // const [items, setItems] = useState({});
  const [selectedDate, setSelectedDate] = useState(formatDate());
  const toggleShowAgenda = () => {
    setShowAgenda((prevState) => !prevState);
  };

  // const timeToString = (time) => {
  //   const date = new Date(time);
  //   return date.toISOString().split("T")[0];
  // };

  // const loadItems = (day) => {
  //   setTimeout(() => {
  //     for (let i = -15; i < 85; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = timeToString(time);
  //       if (!items[strTime]) {
  //         items[strTime] = [];
  //         const numItems = Math.floor(Math.random() * 3 + 1);
  //         for (let j = 0; j < numItems; j++) {
  //           items[strTime].push({
  //             name: "Item for " + strTime + " #" + j,
  //             height: Math.max(50, Math.floor(Math.random() * 150)),
  //           });
  //         }
  //       }
  //     }
  //     const newItems = {};
  //     Object.keys(items).forEach((key) => {
  //       newItems[key] = items[key];
  //     });
  //     console.log(newItems);
  //     // setItems(newItems);
  //   }, 1000);
  // };

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyItem = () => {
    return (
      <TouchableOpacity style={styles.emptyDate}>
        <Text>No event.</Text>
      </TouchableOpacity>
    );
  };
  function formatDate() {
    var d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
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
        {/* <Text>{orientation}</Text> */}
        {/* <Text>{JSON.stringify(selectedDate)}</Text> */}
        {showAgenda && (
          <View
            style={{ flex: orientation === "portrait" ? 1 : 4, margin: 10 }}
          >
            <Agenda
              renderEmptyDate={renderEmptyItem}
              // Specify how agenda knob should look like
              // loadItemsForMonth={loadItems}
              // items={items}
              renderItem={renderItem}
              selected={selectedDate?.dateString}
              items={{
                "2021-06-22": [{ name: "item 1 - any js object" }],
                "2021-06-23": [{ name: "item 2 - any js object", height: 80 }],
                "2021-06-24": [],
                "2021-06-25": [
                  { name: "item 3 - any js object" },
                  { name: "any js object" },
                ],
              }}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default CalendarView;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
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
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
