import React, { useState, useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

import { Text, View, Image, TextInput, ToastAndroid, TouchableOpacity } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'

import { RootStackParamList } from '../../../../App'

import HomeStyles from './Styles'
import useViewModel from './ViewModel'

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> { };

export const HomeScreen = ({ navigation, route }: Props) => {

  const { email, password, tipo_usuario, user, onChange, login, errorMessage } = useViewModel();

  useEffect(() => {
    if (errorMessage != "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage])

  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
      navigation.replace('PendingChatListScreen');
    }
  }, [user])

  const data = [
    { key: 'vacio', value: '' },
    { key: 'servicio', value: 'Servicio' },
    { key: 'ventas', value: 'Ventas' }
  ]

  return (
    <View
      style={HomeStyles.container}
    >
      <Image
        source={require('../../../../assets/bg.jpg')}
        style={HomeStyles.backgroundImage}
      />

      <View
        style={HomeStyles.logoContainer}
      >
        <Image
          source={require('../../../../assets/whats.png')}
          style={HomeStyles.logoImage}
        />
        <Text
          style={HomeStyles.logoText}>SERVICIO / VENTA
        </Text>
      </View>

      <View
        style={HomeStyles.form}
      >
        <Text
          style={HomeStyles.formTitle}
        >
          Ingresar
        </Text>

        <View
          style={HomeStyles.formInput}>
          <TextInput
            style={HomeStyles.formTextInput}
            placeholder='Correo electronico'
            keyboardType='email-address'
            value={email}
            onChangeText={email => onChange('email', email)}
          />
        </View>

        <View
          style={HomeStyles.formInput}>
          <TextInput
            style={HomeStyles.formTextInput}
            placeholder='Contraseña'
            keyboardType='default'
            secureTextEntry={true}
            value={password}
            onChangeText={password => onChange('password', password)}
          />
        </View>

        <View
          style={HomeStyles.formInput}
        >
          <SelectList
            setSelected={(type: any) => onChange('tipo_usuario', tipo_usuario)}
            data={data}
            placeholder={"Unidad de negocio"}
            defaultOption={{ key: 'vacio', value: '' }}
            boxStyles={{ width: '65%' }}
          />
        </View>

        <View>
          <TouchableOpacity
            style={HomeStyles.roundedButton}
            onPress={() => {
              login();
            }}
          >
            <Text
              style={HomeStyles.textButton}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}
