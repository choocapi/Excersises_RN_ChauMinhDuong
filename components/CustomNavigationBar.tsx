import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { getHeaderTitle } from '@react-navigation/elements';
import { Appbar, Menu } from 'react-native-paper';
const CustomNavigationBar = ({navigation, route, options, back}: any) => {
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const title = getHeaderTitle(options, route.name);
    
  return (
    <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title={title} />
        {!back ? (
            <Menu visible={visible} onDismiss={closeMenu} anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
                <Menu.Item onPress={() => {console.log('Option 1 was pressed')}} title="Home" />
                <Menu.Item onPress={() => {navigation.navigate('Details')}} title="Details" />
                <Menu.Item onPress={() => {console.log('Option 3 was pressed')}} title="Contact" />
            </Menu>
        ) : null}
    </Appbar.Header>
  )
}

export default CustomNavigationBar