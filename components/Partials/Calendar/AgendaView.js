import React, { useState, createRef, useEffect } from "react";
import { Platform, StyleSheet, View } from "react-native";
import WeekView from "react-native-week-view";

const AgendaView = ({ date }) => {
  let weekViewRef;
  const generateDates = (hours, minutes) => {
    const date = new Date();
    date.setHours(date.getHours() + hours);
    if (minutes != null) {
      date.setMinutes(minutes);
    }
    return date;
  };
  useEffect(() => {
    // console.log(weekViewRef);
    weekViewRef?.goToDate(new Date(date.year, date.month, date.day));
  }, [date]);
  const [events] = useState([
    {
      id: 1,
      description: "Event 1",
      startDate: generateDates(0),
      endDate: generateDates(2),
      color: "blue",
    },
    {
      id: 2,
      description: "Event 2",
      startDate: generateDates(1),
      endDate: generateDates(4),
      color: "red",
    },
    {
      id: 3,
      description: "Event 3",
      startDate: generateDates(-5),
      endDate: generateDates(-3),
      color: "green",
    },
  ]);
  console.log(date);
  return (
    <View style={{ flex: 1 }}>
      <WeekView
        ref={(ref) => (weekViewRef = ref)}
        events={events}
        selectedDate={new Date(date.year, date.month, date.day)}
        numberOfDays={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AgendaView;
