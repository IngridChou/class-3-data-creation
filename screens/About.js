import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { Calendar, Text, Spinner } from '@ui-kitten/components';
import { useState } from 'react';


export default function About({navigation}) {

    const [date, setDate] = useState(new Date());

    return (
        <View style={styles.container}>
            <Spinner />
            <Text category='h6' style={styles.text}>
        Selected date:
        {' '}
        {date.toLocaleDateString()}
      </Text>

      <Calendar
        style={styles.calendar}
        date={date}
        onSelect={nextDate => setDate(nextDate)}
      />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        gap: 50,
        backgroundColor: '#7DCBCA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendar: {
        backgroundColor: '#F6F3F0',
        borderRadius: 20,
    },
    text: {
        color: '#FFF',
        fontSize: 30
    }
});
