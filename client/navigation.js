import React from "react";
import Main from "./components/Main";
import Settings from "./components/Settings";
import Personal from "./components/Personal";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faHome, faUser, faCogs, faSlidersH} from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

function Route({user}) {
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({color, size}) => {
                        let iconName
                        if (route.name === 'Home') {
                            iconName = faHome
                        } else if (route.name === 'Settings') {
                            iconName = faSlidersH
                        } else {
                            iconName = faUser
                        }
                        return <FontAwesomeIcon icon={iconName} color={color} size={20}/>
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'grey'
                })}
            >
                <Tab.Screen name='Home' component={Main} />
                <Tab.Screen name='Settings' component={Settings} />
                <Tab.Screen name='Personal' initialParams={user} component={Personal} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Route