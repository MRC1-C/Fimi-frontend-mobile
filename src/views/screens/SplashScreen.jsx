
import { Text,View,ImageBackground, Image, StyleSheet } from 'react-native'
import background from '../../../assets/image/bg.png'
import logo from "../../../assets/image/logo.png"

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoimage: {
        height: 80,
        width:223,
    }
})

export default function SplashScreen({navigation}) {
    setTimeout(()=>{
        navigation.replace("main")
    },3000)
    return (
            <ImageBackground source={background} style={styles.background}>
                    <Image source={logo} style={styles.logoimage}/>
            </ImageBackground>
    )
}
