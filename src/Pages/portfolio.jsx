import Card from "../Components/Card";

export default function Portfolio() {
    return (
        <>
            <ul>
                <Card id={1} name={'Title'} text={'example'} url1={'https://www.google.com/'} url2={'https://www.google.com/'}></Card>

                <Card id={2} name={'Title'} text={'example'} url1={'https://www.google.com/'} url2={'https://www.google.com/'}></Card>

                <Card id={3} name={'Title'} text={'example'} url1={'https://www.google.com/'} url2={'https://www.google.com/'}></Card>

                <Card id={4} name={'Title'} text={'example'} url1={'https://www.google.com/'} url2={'https://www.google.com/'}></Card>

                <Card id={5} name={'Title'} text={'example'} url1={'https://www.google.com/'} url2={'https://www.google.com/'}></Card>

                <Card id={6} name={'Title'} text={'example'} url1={'https://www.google.com/'} url2={'https://www.google.com/'}></Card>
            </ul>
        </>
    );
};