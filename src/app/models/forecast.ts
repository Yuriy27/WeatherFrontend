export class Forecast {
    id: number;
    city: string;
    date: Date;
    pressure: number;
    humidity: number;
    temperatureMorning: number;
    temperatureDay: number;
    temperatureEvening: number;
    temperatureNight: number;
    windSpeed: number;
    description: string;
    icon: string;
}