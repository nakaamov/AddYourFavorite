import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native'
import { useState } from 'react';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker'; 
import Button from '../../ui/Button';
import { PlaceModel } from '../../models/PlaceModel';

function PlaceForm({onCreatePlace}){
    const [enteredText, setEnteredText]=useState('');
    const [takenImg, setTakenImg]=useState();
    const [pickedLocation, setPickedLocation]=useState();

    function takeImageHandler(imageUri){
        setTakenImg(imageUri);
    }

    function pickedLocationHandler(location){
        setPickedLocation(location);
    }
    
    function changeTitleHandler(text){
        setEnteredText(text);
    }
    function savePlaceHandler(){
        const placeData=new PlaceModel(enteredText, takenImg);
        console.log(placeData);
        onCreatePlace(placeData);
    }
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Title</Text>
            <TextInput style={styles.input} placeholder='Write here...' value={enteredText} onChangeText={changeTitleHandler}/>
            <ImagePicker onTakeImage={takeImageHandler}/>
            <LocationPicker onPickLocation={pickedLocationHandler}/>
            <Button onPress={savePlaceHandler}>Add Place</Button>
        </ScrollView>
    )
}

export default PlaceForm;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:25,
    },
    title:{
        color:'#0DB806',
        fontSize:24,
        fontFamily:'poppinsmedium',
        marginBottom:4,
    },
    input:{
        backgroundColor:'silver',
        paddingHorizontal:4,
        paddingVertical:8,
        fontSize:16,
        fontFamily:'poppinsregular',
        borderBottomWidth:2,
        borderBottomColor:'#0DB806',
        borderRadius:8
    },
})