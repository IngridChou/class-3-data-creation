import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text, Input, Card } from '@ui-kitten/components';
import { useState } from 'react';

export default function Home({ navigation }) {

    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');

    return (

        <Layout
            style={styles.container}
            level='1'
        >

            <Card style={styles.card}>
                <Text>
                    Welcome to the home page, let's get started!
                </Text>
            </Card>
            <Input
                style={styles.textbox}
                placeholder='Your Name'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
            />
            <Button style={styles.button} onPress={() => navigation.push('About')}>
                Enter
            </Button>
        </Layout>

    );
}

const styles = StyleSheet.create({
    textbox: {
        width: 300,
        borderRadius: 50,
        borderColor: '#D0D5F7',
        borderWidth: 2
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: 50,
        backgroundColor: '#F6DAE4'
    },
    text: {
        marginHorizontal: 8,
    },
    button: {
        borderRadius: 5,
        backgroundColor: '#B8CEFC',
        borderColor: '#D4F0F7',
        borderWidth: 2
    },
    card: {
        borderRadius: 50,
        borderColor: '#B8CFE7',
        borderWidth: 2
    }
});
