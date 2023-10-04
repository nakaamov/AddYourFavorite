import {FlatList, View, Text, StyleSheet} from 'react-native';
import PlaceItem from './PlaceItem';

function PlaceList({places}){
    if (!places || places.length===0){
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No Places added yet..Start adding some!</Text>
            </View>
        )
    }
    return (
    <FlatList
    style={styles.list}
    data={places}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=><PlaceItem place={item}/>}
    />)
}

export default PlaceList;

const styles=StyleSheet.create({
    list:{
        margin:24
    },
    fallbackContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    fallbackText:{
        fontSize:17,
        color:'black',
        fontFamily:'poppinsmediumItalic'
    }
})