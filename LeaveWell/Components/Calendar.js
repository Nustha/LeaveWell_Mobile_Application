import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const Calender = () => {
    const [selectedDate, setSelectedDate] = useState();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                {`Date: ${selectedDate ? moment(selectedDate).format('MM/DD/YYYY') : 'Please select date'}`}
            </Text>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <Text style={{ fontSize: 12, marginTop: 10, color: 'gray' }}>
                Note: The code has been regenerated with the added note.
            </Text>
        </View>
    );
};

export default Calender;
