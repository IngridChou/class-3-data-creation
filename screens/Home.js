import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text, Input } from '@ui-kitten/components';
import { useState } from 'react';

export default function Home({ navigation }) {

    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');

    return (

        <Layout
            style={styles.container}
            level='1'
        >
            <Input
                placeholder='Place your Text'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
            />
            <Button onPress={() => setCounter(counter + 1)}>
                BUTTON
            </Button>
        </Layout>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: 50,
    },
    text: {
        marginHorizontal: 8,
    },
});
