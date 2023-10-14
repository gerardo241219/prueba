import React from 'react'

import { StackScreenProps } from '@react-navigation/stack'

import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view';

import { RootStackParamList } from '../../../../App'

import OsStyles from './Styles'
import useViewModel from './ViewModel'

interface Props extends StackScreenProps<RootStackParamList, 'OsListScreen'> { };

export const OsListScreen = ({ navigation, route }: Props) => {

  const swipeoutBtns = [
    {
      text: 'Eliminar'
    }
  ]

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

  // type ItemProps = {title: string};

  // const Item = ( {title}: ItemProps ) => (
  //   <SwipeListView
  //     data={dataList}
  //     renderItem={() => (
  //       <View>
  //         <Text>I am {title} in a SwipeListView</Text>
  //       </View>
  //     )}
  //   />
  // );

  return (
    <View style={OsStyles.container}>
      <View style={OsStyles.containerList}>
        <SwipeListView
          data={dataList}
          renderItem={({ item }) =>
            <View style={OsStyles.rowFront}>
              <Text>{item.title}</Text>
            </View>}
          renderHiddenItem={(data, rowMap) => (
            <View style={OsStyles.rowBack}>
              <TouchableOpacity
                style={[OsStyles.backRightBtn, OsStyles.backRightBtnLeft]}
                onPress={() => {}}
              >
                <Text style={OsStyles.backTextWhite}>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[OsStyles.backRightBtn, OsStyles.backRightBtnRight]}
                onPress={() => {}}
              >
                <Text style={OsStyles.backTextWhite}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          leftOpenValue={-75}
          rightOpenValue={-150}
        />
      </View>
      <View style={OsStyles.containerButton}>
        <TouchableOpacity
          style={OsStyles.button}
          onPress={() => { }}
        >
          <Text
            style={OsStyles.textButton}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
