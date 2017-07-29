 export class Coord {
        lon: number;
        lat: number;
    }

    export class City {
        Id: number;
        Name: string;
        Coord: Coord;
        Country: string;
        Population: number;
    }

    export class Temp {
        Day: number;
        Min: number;
        Max: number;
        Night: number;
        Eve: number;
        Morn: number;
    }

    export class Weather {
        Id: number;
        Main: string;
        Description: string;
        Icon: string;
    }

    export class List {
        Dt: number;
        Temp: Temp;
        Pressure: number;
        Humidity: number;
        Weather: Weather[];
        Speed: number;
        Deg: number;
        Clouds: number;
        Rain: number;
    }

    export class Forecast {
        City: City;
        Cod: string;
        Message: number;
        Cnt: number;
        list: List[];
    }