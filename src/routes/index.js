import { Image, StyleSheet } from "react-native"
import AQIimage from "../../assets/image/AQI.png"
import Trafficimage from "../../assets/image/Traffic.png"
import Forecastimage from "../../assets/image/Forecast.png"
import Definitionimage from "../../assets/image/Definition.png"
import Analysisimage from '../../assets/image/Analysis.png'
import AQIscreens from "../views/screens/AQIScreens";
import TrafficScreen from "../views/screens/TrafficScreen";
import ForecastScreen from "../views/screens/ForecastScreen";
import DefinitionScreen from "../views/screens/DefinitionScreen";
import AnalysisScreen from "../views/screens/AnalysisScreen"

const styles = StyleSheet.create({
    styleLogo:{
        width: 20,
        height: 20,
        resizeMode: 'contain',
    }
})

export const router = [
    {
        name: "Fi-Mi AQI",
        component: AQIscreens,
        icon: () => (<Image source={AQIimage} style={styles.styleLogo} />)
    },
    {
        name: "Fi-Mi Traffic",
        component: TrafficScreen,
        icon: () => <Image source={Trafficimage} style={styles.styleLogo} />
    },
    {
        name: "Forecast",
        component: ForecastScreen,
        icon: () => <Image source={Forecastimage} style={styles.styleLogo} />
    },
    {
        name: "Analysis",
        component: AnalysisScreen,
        icon: () => <Image source={Forecastimage} style={styles.styleLogo} />
    },
    {
        name: "Definition",
        component: DefinitionScreen,
        icon: () => <Image source={Definitionimage} style={styles.styleLogo} />
    }
]