import {View, StyleSheet, Text, Alert, Image} from 'react-native'
import OutlineButton from '../../ui/OutlineButton'
import { getCurrentPositionAsync,useForegroundPermissions, PermissionStatus } from 'expo-location'
import { googleMapPreview } from '../../util/location'
import { useEffect, useState } from 'react'
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native'

function LocationPicker({onPickLocation}){
    const navigation=useNavigation();
    const route=useRoute();
    const isFocused=useIsFocused();
    const [locationPermissionInformation, requestPermission]=useForegroundPermissions()
    const [pickedLocation, setPickedLocation]=useState()

    useEffect(()=>{
        if(isFocused && route.params){
            const mapPickedLocation={
                lat:route.params.selectedLat,
                lng:route.params.selectedLng
            }
            setPickedLocation(mapPickedLocation);
        }
    },[route, isFocused])

    useEffect(()=>{
        onPickLocation(pickedLocation)
    },[onPickLocation,pickedLocation])

    async function verifyPermission(){
        if(locationPermissionInformation.status===PermissionStatus.UNDETERMINED){
            const permissionResponse=await requestPermission();

            return permissionResponse.granted;
        }
        if (locationPermissionInformation.status===PermissionStatus.DENIED){
            Alert.alert(
                'Insufficient permission!',
                'You need to grant camera access to use this app'
            );
            return false
        }
        return true
    }

    async function locateUserHandler(){
        const hasPermission=await verifyPermission()
        if (!hasPermission){
            return;
        }
        const location=await getCurrentPositionAsync()
        setPickedLocation({
            lat:location.coords.latitude,
            lng:location.coords.longitude
        });
    }

    function pickonMapHandler(){
        navigation.navigate('MapScreen');
    }

    let mapPreview=<Text style={styles.previewText}>No Location picked yet</Text>

    if (pickedLocation){
        mapPreview=<Image style={styles.mapImage} source={{uri:googleMapPreview(pickedLocation.lat, pickedLocation.lng)}} />
    }

    return(
        <View>
            <View style={styles.mapcontainer}>
               {mapPreview}
            </View>
            <View style={styles.mapButtons}>
                <OutlineButton name="location" onPress={locateUserHandler}>Locate User</OutlineButton>
                <OutlineButton name="map" onPress={pickonMapHandler}>Pick on map</OutlineButton>
            </View>
        </View>
    )
}

export default LocationPicker;

const styles=StyleSheet.create({
    mapcontainer:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:200,
        backgroundColor:'silver',
        marginVertical:8,
        borderRadius:8, 
        overflow:'hidden'
    }, 
    mapButtons:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    previewText:{
        color:'black',
        fontSize:15,
        fontFamily:'poppinsregular'
    },
    mapImage:{
        width:'100%',
        height:'100%',
    }
})