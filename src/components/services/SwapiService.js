import firebase from "./firebase/firebaseConf";

export default class SwapiService{
    _appBase = 'http://192.168.0.86:5000';

    getResource = async (url) => {
        const res = await fetch(`${this._appBase}${url}`);

        if (!res.ok){
            throw  new Error(`Could not fetch ${this._appBase}${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    };

    async getImgURL(folderName, id){
        const storage = firebase.storage().ref();
        return await storage.child(`/${folderName}/${id}.jpg`)
            .getDownloadURL()
            .then((url)=>{
                return url;
            })
            .catch((err) => {
                console.log(`MY ERROR is:${err.code}`)
            });
    };


    getAllPeople = async () => {
        const res = await this.getResource("/people/");
        return  Promise.all(res.map(this._transformPerson));
    };
    getPerson = async (id) =>{
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };


     getAllPlanet = async () => {
        const res = await this.getResource("/planets/");
        return res.map(this._transformPlanet());
    };
    getPlanet = async (id) =>{
        const planet =  await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };


    getAllStarships = async () => {
        const res = await this.getResource("/starships/");
        return res.map(this._transformStarship);
    };
    getStarship = async (id) =>{
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    };


    _extractId = (item) =>{
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };
     _transformPlanet = async (planet) => {
        const id = this._extractId(planet);
        return {
            id,
            img: await this.getImgURL("Planets", id),
            name: planet.name,
            population: planet.population,
            rPeriod: planet.rotation_period,
            diam: planet.diameter
        };
    };
    _transformPerson = async (person) => {
        const id = this._extractId(person);
         return  {
            id,
            img: await this.getImgURL("People", id),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
    };
    _transformStarship = async (starship) => {
        const id = this._extractId(starship);
        return  {
            id,
            img: await this.getImgURL("Starships", id),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        };
    };
}

