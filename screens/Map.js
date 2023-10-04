import MapView, {Marker} from 'react-native-maps'
import { Alert, StyleSheet } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import IconButton from '../ui/IconButton';

function Map({navigation}){
    const [selectedLocation, setSelectedLocation]=useState()
    const region={
        latitude:37.78,
        longitude:-122.43,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421,
    }
    function selectPressedLocation(event){
        const lat=event.nativeEvent.coordinate.latitude
        const lng=event.nativeEvent.coordinate.longitude

        setSelectedLocation({
            lat:lat,
            lng:lng
        })

    }
    const savePickedLocationHandler=useCallback(()=>{
        if(!selectedLocation){
            Alert.alert('No location picked!','You have to select a location by tapping on map first');
            return;
        }
        navigation.navigate('AddPlaceScreen',{
            selectedLat:selectedLocation.lat,
            selectedLng:selectedLocation.lng,
        })
    },[navigation,selectedLocation])

    useEffect(()=>{
        navigation.setOptions({
            headerRight:()=>(
                <IconButton name="save" size={24}  color='black' onPress={savePickedLocationHandler}/>
            )
        })
    },[navigation,savePickedLocationHandler])

    return(
        <MapView initialRegion={region} style={styles.Map} onPress={selectPressedLocation}>
            {selectedLocation &&  <Marker 
            title='Picked Location'
            coordinate={{
                latitude:selectedLocation.lat,
                longitude:selectedLocation.lng
            }}/>}
        </MapView>
    )
}

export default Map;

const styles=StyleSheet.create({
    Map:{
        flex:1,
    }
})