import React, { useState } from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import EventCalendar from "react-native-events-calendar";
let { width } = Dimensions.get("window");

const AgendaView = (date) => {
  const [events] = useState([
    {
      start: "2021-07-03 00:30:00",
      end: "2017-07-07 01:30:00",
      title: "Dr. Mariana Joseph",
      summary: "3412 Piedmont Rd NE, GA 3032",
    },
    {
      start: "2021-07-03 01:30:00",
      end: "2017-07-07 02:20:00",
      title: "Dr. Mariana Joseph",
      summary: "3412 Piedmont Rd NE, GA 3032",
    },
    {
      start: "2021-07-02 04:10:00",
      end: "2017-07-07 04:40:00",
      title: "Dr. Mariana Joseph",
      summary: "3412 Piedmont Rd NE, GA 3032",
    },
    {
      start: "2021-07-02 01:05:00",
      end: "2017-07-07 01:45:00",
      title: "Dr. Mariana Joseph",
      summary: "3412 Piedmont Rd NE, GA 3032",
    },
    {
      start: "2021-07-01 14:30:00",
      end: "2017-07-07 16:30:00",
      title: "Dr. Mariana Joseph",
      summary: "3412 Piedmont Rd NE, GA 3032",
    },
    {
      start: "2021-07-01 01:20:00",
      end: "2017-07-08 02:20:00",
      title: "Dr. Mariana Joseph",
      summary: "3412 Piedmont Rd NE, GA 3032",
    },
    {
      start: "2021-07-01 04:10:00",
      end: "2017-07-08 04:40:00",
      title: "Dr. Mariana Joseph",
      summary: "3412 Piedmont Rd NE, GA 3032",
    },
    {
      start: "2021-07-08 00:45:00",
      end: "2017-07-08 01:45:00",
      title: "Dr. Mariana Joseph",
      summary: "3412 Piedmont Rd NE, GA 3032",
    },
    {
      start: "2021-07-03 11:30:00",
      end: "2017-07-08 12:30:00",
      title: "Dr. Mariana Joseph",
      summary: "3412 Piedmont Rd NE, GA 3032",
    },
    {
      start: "2021-07-02 01:30:00",
      end: "2017-07-09 02:00:00",
      title: "Dr. Mariana Joseph",
      summary: "3412 Piedmont Rd NE, GA 3032",
    },
    {
      start: "2021-07-02 03:10:00",
      end: "2017-07-09 03:40:00",
      title: "Dr. Mariana Joseph",
      summary: "3412 Piedmont Rd NE, GA 3032",
    },
    {
      start: "2021-07-01 00:10:00",
      end: "2017-07-09 01:45:00",
      title: "Dr. Mariana Joseph",
      summary: "3412 Piedmont Rd NE, GA 3032",
    },
  ]);
  console.log(date);
  return (
    <View>
      {/* <EventCalendar
        // eventTapped={this._eventTapped.bind(this)}
        styles={styles}
        events={events}
        width={width}
        initDate={date.dateSting}
      /> */}
    </View>
  );
};

export default AgendaView;

const styles = StyleSheet.create({
  timeLabel: {
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : "Roboto",
  },
});
