import PlaceList from "../components/Place/PlaceList";
import { useEffect , useState} from "react";
import { useIsFocused } from "@react-navigation/native";

function AllPlaces({route}){
    const isFocused=useIsFocused();
    const [loadedList, setLoadedList]=useState([]);

    useEffect(()=>{
        if(isFocused && route.params){
            setLoadedList(currlist=>[...currlist, route.params.place])
        }
    },[isFocused, route])

    return(
        <PlaceList places={loadedList}/>
    )
}

export default AllPlaces;