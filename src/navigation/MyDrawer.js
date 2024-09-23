
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import Reservation from '../screens/Reservation';
import ContactUs from '../screens/ContactUs';
import Rates from '../screens/Rates';
import Services from '../screens/Services';
import Web from '../screens/Web';
import Home from '../screens/Home';
import AboutUs from '../screens/AboutUs';
import Payment from '../screens/Payment';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name="Reservation" component={Reservation} />
            <Drawer.Screen name="ContactUs" component={ContactUs} />
            <Drawer.Screen name='Rates' component={Rates} />
            <Drawer.Screen name='Web' component={Web} />
            <Drawer.Screen name='Payment' component={Payment} />
            <Drawer.Screen name='Services' component={Services} />
            <Drawer.Screen name='AboutUs' component={AboutUs} />

        </Drawer.Navigator>
    );
}

export default MyDrawer;


