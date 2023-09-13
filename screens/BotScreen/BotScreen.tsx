import React, { useEffect, useState } from 'react';
import { Dimensions, Keyboard, KeyboardAvoidingView, View, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Feather';
import { ActivityIndicator, Avatar, IconButton } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Speech from 'expo-speech';
const DoctroLogo = require('../../assets/app-media/icon.png');

const { height, width } = Dimensions.get('window');


export default function BotScreen({ onLayoutRootView }: { onLayoutRootView: any }) {
    const [question, setQuestion] = useState('');
    const [showSoftInputFocus, setShowSoftInputFocus] = useState(true);
    const [voice, setVoice] = useState('');
    const [answerLoading, setAnswerLoading] = useState(false);

    useEffect(() => {
        async function getVoices() {
            const voices = await Speech.getAvailableVoicesAsync();
            console.log('The voices are:', voices[0]);
            console.log('What is up doc?');
            // console.log('The voices are:', voices);
            setVoice(voices[22].identifier);
            /* Speech.speak('Hello, world!', {
                _voiceIndex: 20,
            }); */
        }

        getVoices();
    }, []);
    

    function handleQuestionChange(updatedQuestion: string) {
        setQuestion(updatedQuestion);
    }

    function handleSpeechStart() {
    
    }

    function speechComplete() {
        console.log('Speech is done');
    }

    function speechError() {
        console.log('Speech error');
    }

    function speechStart() {
        console.log('Speech started');
    }

    function speechStop() {
        console.log('Speech stopped');
    }

    async function handleAskQuestion() {
        Keyboard.dismiss();
        setAnswerLoading(true);

        await axios({
            data: {
                question,
            },
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            url: 'http://10.162.66.177:3018/api/answer-question',
        }).then(response => {
            setQuestion('');
            setAnswerLoading(false);
            const { answer } = response.data;
            Speech.speak(answer, {
                voice,
            });
        }).catch(err => {
            setQuestion('');
            setAnswerLoading(false);
            console.log(err.message);
        })
    }

    if (answerLoading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator
                    animating={answerLoading}
                    color='#002244'
                />
            </View>
        );
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
                            paddingRight: 30,
                    }}>
                        <View
                            style={{
                            backgroundColor: 'white',
                            width: width - 60,
                            borderRadius: 25,
                            elevation: 2,
                            paddingRight: 20,
                        }}>
                            <TextInput
                                value={question}
                                onChangeText={handleQuestionChange}
                                style={{ height: '100%', fontSize: 14, paddingLeft: 20 }}
                                placeholder="Question?"
                            />
                        </View>
                        <View style={{ marginRight: 10 }}>
                            <TouchableOpacity
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 45,
                                    height: 45,
                                    backgroundColor: '#002244',
                                    borderRadius: 40,
                                    elevation: 2,
                                    paddingRight: 5,
                                    paddingLeft: 5
                                }}
                            >
                                {question.trim() !== 'jack' ? (
                                <Ionicons size={25} name="send" color="white" onPress={handleAskQuestion} style={{ textAlign: 'center' }}  />
                                ) : (
                                <Icon size={25} name="mic" color="white" onPress={handleSpeechStart} />
                                )}
                            </TouchableOpacity>
                        </View>
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
    loaderContainer: {
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
    },
    screenContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
    },
});