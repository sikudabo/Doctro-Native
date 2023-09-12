import React, { useState } from 'react';
import { Dimensions, KeyboardAvoidingView, View, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Avatar, Button, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DoctroLogo = require('../../assets/app-media/icon.png');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const { height, width } = Dimensions.get('window');


export default function BotScreen({ onLayoutRootView }: { onLayoutRootView: any }) {
    const [question, setQuestion] = useState('');
    const [showSoftInputFocus, setShowSoftInputFocus] = useState(true);

    function handleQuestionChange(updatedQuestion: string) {
        setQuestion(updatedQuestion);
    }

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
            <KeyboardAvoidingView
                behavior="position"
                keyboardVerticalOffset={height - 100}
                style={{ flex: 1 }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: 50,
                }}>
                    <View
                        style={{
                        backgroundColor: 'white',
                        width: width - 60,
                        borderRadius: 25,
                        elevation: 2,
                    }}>
                        <TextInput
                            value={question}
                            onChangeText={handleQuestionChange}
                            style={{ height: '100%', fontSize: 14, paddingLeft: 20 }}
                            placeholder="Question?"
                        />
                    </View>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 45,
                            height: 45,
                            backgroundColor: '#002244',
                            borderRadius: 24,
                            elevation: 2,
                        }}
                    >
                        {question.trim() ? (
                        <Ionicons size={25} name="md-send-sharp" color="white" />
                        ) : (
                        <Icon size={25} name="mic" color="white" />
                        )}
                    </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
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
        height: 100,
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