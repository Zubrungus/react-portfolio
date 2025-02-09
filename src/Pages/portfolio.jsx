import Card from "../Components/Card";

export default function Portfolio() {
    return (
        <>
            <ul id='cards'>
                <Card id={1} name={'Palette Picker'} text={'A web app that lets you choose a color and see multiple color palettes for that color.'} url1={'https://zubrungus.github.io/color-palette-app/main/index.html'} url2={'https://github.com/Zubrungus/color-palette-app'}></Card>

                <Card id={2} name={'Weather Dashboard'} text={'A web app that uses the OpenWeather API to display weather data. It takes a minute for Render to start up and load the page.'} url1={'https://weather-dashboard-hal4.onrender.com/'} url2={'https://github.com/Zubrungus/weather-dashboard'}></Card>

                <Card id={3} name={'README Generator'} text={'Generates a high quality README after being prompted for all the necessary information in a CLI. Uses Node.js so is not deployed.'} url1={'#'} url2={'https://github.com/Zubrungus/readme-generator'}></Card>

                <Card id={4} name={'Employee Tracker'} text={'CLI application for keeping track of employee information. Also uses Node.js so is not deployed.'} url1={'#'} url2={'https://github.com/Zubrungus/employee-tracker'}></Card>

                <Card id={5} name={'Vehicle Builder'} text={'Demonstration CLI app that lets you apply specific attributes to vehicles and perform specific actions with specific kinds of vehicles. Also not deployed.'} url1={'#'} url2={'https://github.com/Zubrungus/vehicle-builder'}></Card>

                <Card id={6} name={'Simple platformer'} text={'Simple WIP platforming game. Not deployed yet.'} url1={'#'} url2={'https://github.com/Zubrungus/simple-platformer'}></Card>
            </ul>
        </>
    );
};