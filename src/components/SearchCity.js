import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { TextInput, Card, List } from 'react-native-paper';


const SearchCity = () => {
    
    const [text, setText] = React.useState('');
    const [cities, setCities] = React.useState([]);
    const apiKey = 'e1f10a1e78da46f5b10a1e78da96f525';

    const fetchCities = (city) => {

        setText(city);
        
        fetch(`https://api.weather.com/v3/location/search?apiKey=${apiKey}&language=en-US&query=${city}&locationType=city&format=json`)
            .then(result => result.json())
            .then(result => {
                if (typeof result.location !== 'undefined') {
                    setCities(result.location.address);
                } else {
                    setCities([])
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    let allCities = <Card><List.Item title="No city selected" /></Card>
    if (cities.length > 0) {
        allCities = cities.map((city) => {
            return (
                <Card style={styles.card}><List.Item title={city} key={city} /></Card>
            );
        });
    }

    return (
        <>
            <TextInput
                label="Select City"
                value={text}
                onChangeText={text => fetchCities(text)}
            />
            <ScrollView>
                {allCities}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 5,
        marginTop: 0,
    }
});

export default SearchCity;