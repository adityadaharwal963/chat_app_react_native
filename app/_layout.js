import { Slot, useRouter, useSegments } from "expo-router";
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { AuthContextProvider, useAuth } from "../context/authContext";
import { useRoute } from "@react-navigation/native";

const MainLayout = () =>{
    const {isAuthenticated} = useAuth(); // return a object
    const segments = useSegments(); //https://docs.expo.dev/router/reference/hooks/#usesegments
    const router = useRouter();
    useEffect(()=>{
        //heck isf user is authencated

        if(typeof isAuthenticated =='undefined') return;
        const inApp = segments[0]=='(app)';
        
        if(isAuthenticated && !inApp){
            // redirect user to home
            router.replace('home');
        }else if(isAuthenticated==false){
            //redirect to sign page
            router.replace('signIn');
        }

    },[isAuthenticated])

    return <Slot />
}

export default function Rootlayout(){
    return(
        <AuthContextProvider>
            <MainLayout/>
        </AuthContextProvider>
    )
}