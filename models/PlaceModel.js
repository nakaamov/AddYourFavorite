export class PlaceModel{
    constructor(title, imageUri){
        this.title=title;
        this.imageUri=imageUri;
        this.id=new Date().toString()+Math.random().toString();
    }
}