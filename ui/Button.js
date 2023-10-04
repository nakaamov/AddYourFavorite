import { Pressable, Text, StyleSheet } from "react-native";

function Button({onPress,children}){
    return(
    <Pressable onPress={onPress} style={({pressed})=>[styles.container, pressed&&styles.pressed]}>
        <Text style={styles.text}>{children}</Text>
    </Pressable>)
}

export default Button

const styles=StyleSheet.create({
    container:{
        margin:6,
        paddingHorizontal:12,
        paddingVertical:6,
        borderRadius:8,
        backgroundColor:'#0DB806',
        elevation:2,
        shadowColor:'black',
        shadowOffset:0.25,
        shadowRadius:2,
        shadowOffset:{width:1, height:1}
    },
    pressed:{
        opacity:0.7,
    },
    text:{
        textAlign:'center',
        color:'black',
        fontSize:19,
        fontFamily:'poppinsmedium'
    }
})