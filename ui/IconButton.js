import {View, Pressable, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

function IconButton({color, size, onPress,name }){
    return(
        <Pressable onPress={onPress} style={({pressed})=>[styles.buttonContainer, pressed && styles.pressed]}>
            <Ionicons name={name} size={size} color={color} />
        </Pressable>
    )
}

export default IconButton;

const styles=StyleSheet.create({
    buttonContainer:{
        alignItems:'center',
        justifyContent:'center',
        padding:4,
    },
    pressed:{
        opacity:0.7,
    }
})