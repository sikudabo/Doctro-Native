import React from 'react';
import { Dimensions, View, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
const DoctroLogo = require('../../assets/app-media/icon.png');

const { height } = Dimensions.get('screen');


export default function BotScreen({ onLayoutRootView }: { onLayoutRootView: any }) {

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
                <Text style={{ color: '#ffffff' }}>
                    Bottom View 
                </Text>
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
        backgroundColor: '#002244',
        bottom: 0,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        height: 75,
        left: 0,
        marginTop: 700,
        position: 'absolute',
        right: 0,
        width: '100%',
    },
    chatContainer: {
        alignItems: 'center',
        height: 900,
        flex: 3,
        paddingBottom: 40,
        overflow: 'scroll',
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