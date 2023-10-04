import PlaceForm from "../components/Place/PlaceForm";

function AddPlace({navigation}){

    function createPlaceHandler(place){
    navigation.navigate('AllPlaceScreen',{
        place:place
    })
    }
    
    return(
        <PlaceForm onCreatePlace={createPlaceHandler}/>
    )
}

export default AddPlace;