import React, { useState } from 'react';
import { Dimensions, KeyboardAvoidingView, View, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { Avatar, Button, IconButton, TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const DoctroLogo = require('../../assets/app-media/icon.png');

const { height } = Dimensions.get('screen');


export default function BotScreen({ onLayoutRootView }: { onLayoutRootView: any }) {

    const [showSoftInputFocus, setShowSoftInputFocus] = useState(true);

    return (
        <View onLayout={onLayoutRootView} style={styles.screenContainer}>
            <View style={styles.appBar}>
                <Avatar.Image 
                    size={50}
                    source={DoctroLogo}
                />
            </View>
            <SafeAreaView style={styles.chatContainer}>
                <ScrollView style={styles.innerChatContainer}>
                    <Text>
                        Chat Bot
                    </Text>
                </ScrollView>
            </SafeAreaView>
            <View style={styles.bottomBar}>
                <TextInput 
                    activeOutlineColor="#ffffff"
                    left={<TextInput.Icon icon="microphone" onPress={() => setShowSoftInputFocus(false)} size={35} />}
                    mode="outlined"
                    numberOfLines={1}
                    onTouchStart={() => setShowSoftInputFocus(true)}
                    placeholder="Question?"
                    showSoftInputOnFocus={showSoftInputFocus}
                    style={{ flex: 1, flexWrap: 'nowrap', width: '100%', }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appBar: {
        alignItems: 'center',
        backgroundColor: '#002244',
        display: 'flex',
        flexDirection: 'row',
        height: 100,
        justifyContent: 'center',
        paddingTop: 35,
        width: '100%',
    },
    bottomBar: {
        alignItems: 'center',
        backgroundColor: '#002244',
        bottom: 0,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        height: 150,
        left: 0,
        lineHeight: 'normal',
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        position: 'absolute',
        right: 0,
        width: '100%',
    },
    btn: {
        color: '#fffff',
    },
    chatContainer: {
        alignItems: 'center',
        height: 900,
        flex: 3,
        paddingBottom: 40,
        overflow: 'scroll',
        width: '100%',
    },
    innerChatContainer: {
        paddingTop: 100,
    },
    screenContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
    },
});