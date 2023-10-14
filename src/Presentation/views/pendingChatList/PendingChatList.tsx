import React, { useState, useEffect } from 'react'

import { StackScreenProps } from '@react-navigation/stack'

import { View, Text, TouchableOpacity, Animated, ToastAndroid } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { RootStackParamList } from '../../../../App'

import PendingChatListStyles from './Styles'
import useViewModel from './ViewModel'

interface Props extends StackScreenProps<RootStackParamList, 'PendingChatListScreen'> { };

export const PendingChatListScreen = ({ navigation, route }: Props) => {

    const { logOut } = useViewModel();

    const [icon_1] = useState(new Animated.Value(40));
    const [icon_2] = useState(new Animated.Value(40));

    const [pop, setPop] = useState(false);

    const popIn = () => {
        setPop(true);
        Animated.timing(icon_1, {
            toValue: 160,
            duration: 500,
            useNativeDriver: false
        }).start();
        Animated.timing(icon_2, {
            toValue: 100,
            duration: 500,
            useNativeDriver: false
        }).start();
    }

    const popOut = () => {
        setPop(false);
        Animated.timing(icon_1, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false
        }).start();
        Animated.timing(icon_2, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false
        }).start();
    }

    const dataList = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        }
    ];

    return (
        <View style={PendingChatListStyles.container}>
            <View style={PendingChatListStyles.containerList}>
                <SwipeListView
                    data={dataList}
                    renderItem={({ item }) =>
                        <View style={PendingChatListStyles.rowFront}>
                            <Text>{item.title}</Text>
                        </View>}
                    renderHiddenItem={(data, rowMap) => (
                        <View style={PendingChatListStyles.rowBack}>
                            <TouchableOpacity
                                style={[PendingChatListStyles.backRightBtn, PendingChatListStyles.backRightBtnRight]}
                                onPress={() => { }}
                            >
                                <Text style={PendingChatListStyles.backTextWhite}>Aceptar</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    leftOpenValue={-75}
                    rightOpenValue={-75}
                />
            </View>

            <Animated.View style={[PendingChatListStyles.circle, { bottom: icon_1, backgroundColor: '#1d4ed8' }]}>
                <TouchableOpacity>
                    <Icon name="envelope-open-text" size={15} color="#FFFFFF" />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[PendingChatListStyles.circle, { bottom: icon_2, backgroundColor: '#b91c1c' }]}>
                <TouchableOpacity
                    onPress={() => {
                        logOut();
                        navigation.replace('HomeScreen');
                    }}
                >
                    <Icon name="door-open" size={15} color="#FFFFFF" />
                </TouchableOpacity>
            </Animated.View>
            <TouchableOpacity
                style={PendingChatListStyles.circle}
                onPress={() => {
                    pop === false ? popIn() : popOut()
                }}>
                <Icon name={pop === false ? "plus" : "minus"} size={15} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    )
}
