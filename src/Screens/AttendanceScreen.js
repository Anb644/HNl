
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const AttendanceScreen = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);

  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const startDate = selectedStartDate ? selectedStartDate.toString() : '';

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <CalendarPicker
          onDateChange={onDateChange}
          dayOfWeekStyles={{ textStyle: { color: '#000000' }, nonTouchableDayContainerStyle: { backgroundColor: 'transparent' } }}
          nextTitle="▶" 
          previousTitle="◀" 
          dayLabels={[ 'Monday', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun']} // Weekdays labels
        />
      </View>

      <View style={styles.selectedDateContainer}>
        <Text>SELECTED DATE: {startDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end', // Align content at the bottom
  },
  calendarContainer: {
    marginBottom: 20, // Adjust spacing between calendar and selected date
  },
  selectedDateContainer: {
    alignItems: 'center', // Center text horizontally
    marginBottom: 40, // Adjust spacing between selected date and bottom of the screen
  },
});

export default AttendanceScreen;
