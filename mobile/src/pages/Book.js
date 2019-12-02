import React from 'react';

import {
    Text,
    View,
    Image,
    Platform,
    FlatList,
    TextInput,
    StyleSheet,
    SafeAreaView,
    AsyncStorage,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';

export default function Book({ navigation }) {
    const id = navigation.getParam('spotId');
    return (
        <Text>{id}</Text>
    );
}