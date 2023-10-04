import {View, Text, Image, Pressable, StyleSheet} from 'react-native'

function PlaceItem({place, onSelect}){
    return(
        <Pressable onPress={onSelect} style={({pressed})=>[styles.item, pressed&& styles.pressed]}>
        <Image source={{uri:place.imageUri}} style={styles.image}/>
        <View style={styles.info}>
            <Text style={styles.title}>{place.title}</Text>
        </View>
        </Pressable>
    )
}

const styles=StyleSheet.create({
    item:{
        flexDirection:'row',
        alignItems:'flex-start',
        borderRadius: 10,
        marginVertical: 12,
        backgroundColor:'#8CE189',
        elevation:2,
        shadowColor:'black',
        shadowOpacity:0.15,
        shadowOffset:{width:1, height:1},
        shadowRadius:2
    },
    pressed:{
        opacity:0.9
    },
    image:{
        flex:1,
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
        height:100,
        width:'100%',
    },
    info:{
        flex:2,
        padding:12,
    },
    title:{
        fontFamily:'poppinsregular',
        fontSize:18
    }
})

export default PlaceItem;