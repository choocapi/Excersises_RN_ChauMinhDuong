import { useState } from "react";
import { Divider, Drawer } from "react-native-paper";

const CustomDrawerBar = ({navigation}: {navigation: any}) => {
    const [active, setActive] = useState("");
    return (
        <Drawer.Section title="Admin">
            <Drawer.Item label='Home' icon='home' active={active === 'Home'} onPress={() => { navigation.navigate('Home'); setActive('Home') }} />
            <Drawer.Item label='Profile' icon='account' active={active === 'Profile'} onPress={() => { navigation.navigate('Profile'); setActive('Profile') }} />
            <Drawer.Item label='Details' icon='details' active={active === 'Details'} onPress={() => { navigation.navigate('Details'); setActive('Details') }} />
            <Divider />
            <Drawer.Item label='Logout' icon='logout' onPress={() => { navigation.navigate('Logout') }} />
        </Drawer.Section>
    )
}

export default CustomDrawerBar;