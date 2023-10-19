import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import KameraScreen from "./components/KameraScreen";
import UnboxScreen from './components/UnboxScreen';
import HjemScreen from "./components/HjemScreen";
import BrandsScreen from './components/BrandsScreen';
import ProfilScreen from './components/ProfilScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNavigator from "./components/StackNavigator";

import { initializeApp } from 'firebase/app'; // Importerer initializeApp her
import 'firebase/database'; // Importer Realtime Database her


// Firebase konfiguration ses nedenfor
const firebaseConfig = {
  apiKey: "AIzaSyB_I3njVCywAw4bvZfaqkXu71Dmq_ZI_v0",
  authDomain: "sample-box-3e66d.firebaseapp.com",
  databaseURL: "https://sample-box-3e66d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sample-box-3e66d",
  storageBucket: "sample-box-3e66d.appspot.com",
  messagingSenderId: "234742534300",
  appId: "1:234742534300:web:1795595e108df377691d59"
};

const app = initializeApp(firebaseConfig);

// Her oprettes en instans af tabnavigator
const Tab = createBottomTabNavigator();

// Her oprettes de 5 tekst referencer, der  benyttes i screen komponenterne
const hjemScreenText = "SAMPLE BOX - Medlem"
const unboxScreenText = "Unboxing"
const kameraScreenText = "Dette er KameraScreen!"
const brandsScreenText = "Brand Liste"
const profilScreenText = "Garderobe Profil"


// Oprettelse af root komponent kommer her. Dernæst kaldes Navigator, der styrer navigationen mellem de forskellige tabs.
// I Tab navigatoren kalder en funktion i screenOptions, der har til formål at bestemme den aktuelle rute.

// Afslutningsvis angives de screen komponenter, der ønskes at fremvise for hver tab. Komponenterne importeres fra komponentfolderen.
// Hver komponent fremvises ved brug af en funktion, der returnerer de komponenter der er defineret til  tabNavigator.

function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarActiveTintColor: "gray",
          tabBarInactiveTintColor: "pink",
          tabBarStyle: [
        {
          display: "flex"
        },
          null
          ],
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Hjem') {
              return (
                  <Ionicons
                      name={'home-outline'}
                      size={size}
                      color={color}
                  />
              );
            } else if (route.name === 'Unbox') {
              return (
                  <Ionicons
                      name='md-gift-outline'
                      size={size}
                      color={color}
                  />
              );
            }
            else if (route.name === 'Kamera') {
              return (
                  <Ionicons
                      name='md-camera-outline'
                      size={size}
                      color={color}
                  />
              );
            }
            else if (route.name === 'Brands') {
              return (
                  <Ionicons
                      name='md-shirt-outline'
                      size={size}
                      color={color}
                  />
              );
            }
            else if (route.name === 'Profil') {
              return (
                  <Ionicons
                      name='md-person-outline'
                      size={size}
                      color={color}
                  />
              );
            }
            else{
              return (
                  <Ionicons
                      name='md-list-outline'
                      size={size}
                      color={color}
                  />
              );
            }
          },
        })}
        >
          <Tab.Screen name="Hjem" children={()=><HjemScreen prop={hjemScreenText}/>} />
          <Tab.Screen name="Unbox" children={()=><UnboxScreen prop={unboxScreenText}/>} />
          <Tab.Screen name="Kamera" children={()=><KameraScreen prop={kameraScreenText}/>} />
          <Tab.Screen name="Brands" children={()=><BrandsScreen prop={brandsScreenText}/>} />
          <Tab.Screen name="Profil" children={()=><ProfilScreen prop={profilScreenText}/>} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App
