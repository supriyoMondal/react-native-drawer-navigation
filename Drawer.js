import React, { useState } from 'react'
import { Text, Button, Block } from 'expo-ui-kit';
import { Image, StyleSheet, Dimensions } from 'react-native'
import {
    createDrawerNavigator,
    DrawerItem
    , DrawerContentScrollView
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'
import { Feather, AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

// Import the screens
import Dashboard from './screens/Dashboard';
import Message from './screens/Message';
import Contact from './screens/Contact';
import Animated from 'react-native-reanimated';

const drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const Screens = ({ navigation, style }) => (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])} >
        <Stack.Navigator screenOptions={{
            headerTransparent: true,
            headerTitle: null,
            headerLeft: () => (
                <Button
                    transparent
                    marginHorizontal padding
                    onPress={() => { navigation.openDrawer() }}>
                    {/* adding menu */}
                    <Feather
                        style={{ paddingHorizontal: 10 }}
                        name="menu" color='black' size={20} />
                </Button>
            )
        }}>
            <Stack.Screen name="Dashboard" >{props => <Dashboard {...props} />}</Stack.Screen>
            <Stack.Screen name="Message" >{props => <Message {...props} />}</Stack.Screen>
            <Stack.Screen name="Contact" >{props => <Contact {...props} />}</Stack.Screen>

        </Stack.Navigator>

    </Animated.View>

)

//build custom drawer menu

const DrawerContent = (props) => {
    // console.log(props.progress)
    return (
        <DrawerContentScrollView scrollEnabled={false}
            contentContainerStyle={{ flex: 1 }}
            {...props}>
            {/* <DrawerItemList {...props} /> */}
            <Block>
                {/* add image */}
                <Block flex={0.4} margin={20} bottom>
                    <Image
                        source={{
                            uri: 'https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png', height: 60, width: 60
                        }}
                        resizeMode="center"
                        style={styles.avatar} />
                    <Text title >React-native Navigation</Text>
                    <Text size={11} >contact@dummy.com</Text>
                </Block>
                {/* Add icons to item */}
                <DrawerItem
                    label="Dashboard"
                    labelStyle={{ marginLeft: -16 }}
                    onPress={() => props.navigation.navigate('Dashboard')}
                    icon={() => <AntDesign name="dashboard"
                        size={16} />}
                />
                <DrawerItem
                    label="Message"
                    labelStyle={{ marginLeft: -16 }}
                    onPress={() => props.navigation.navigate('Message')}
                    icon={() => <AntDesign name="message1"
                        size={16} />}
                />
                <DrawerItem
                    label="Contact"
                    labelStyle={{ marginLeft: -16 }}
                    onPress={() => props.navigation.navigate('Contact')}
                    icon={() => <AntDesign name="phone"
                        size={16} />}
                />
            </Block>
            <Block flex={false}>
                <DrawerItem
                    label="Logout"
                    labelStyle={{ color: 'white' }}
                    icon={() => <AntDesign name="logout" color="white" size={16} />}
                    onPress={() => alert('Are your sure to logout?')}
                />
            </Block>
        </DrawerContentScrollView>
    );
}

const Drawer = () => {
    const [progress, setProgress] = useState(new Animated.Value(0));
    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    })
    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 16],
    });
    const animatedStyle = { borderRadius, transform: [{ scale }] }
    return (
        <LinearGradient style={{ flex: 1 }} colors={['#E94057', '#4A00E0']}>
            <drawer.Navigator
                drawerType='slide'
                overlayColor="transparent"
                drawerStyle={styles.drawerStyles}
                drawerContentOptions={{
                    activeBackgroundColor: 'transparent',
                    activeTintColor: 'white',
                    inactiveTintColor: 'white'
                }}
                contentContainerStyle={{ flex: 1 }}
                sceneContainerStyle={{ backgroundColor: 'transparent' }}
                drawerContent={
                    (props) => {
                        setProgress(props.progress)
                        return (<DrawerContent {...props} />)
                    }
                }>
                <drawer.Screen name="Screens">
                    {props => {
                        return (
                            <Screens {...props} style={animatedStyle} />
                        )
                    }}
                </drawer.Screen>
            </drawer.Navigator>
        </LinearGradient>
    )
}

export default Drawer

const styles = StyleSheet.create({
    drawerStyles: {
        flex: 1,
        width: Dimensions.get('screen').width / 1.5,
        backgroundColor: 'transparent'
    },
    drawerItem: {
        alignItems: 'flex-start',
        marginVertical: 0,
        color: 'white'
    },
    drawerLabel: {
        color: 'white'
    },
    avatar: {
        borderRadius: 60,
        marginBottom: 15,
        borderColor: 'white'
    },
    stack: {
        flex: 1,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 5
    }
})