import { Text, StyleSheet, View, Image, ImageBackground} from 'react-native'
import rickmorty from '../api/rickmorty';
import { useEffect, useState } from 'react';


const Detail = ({route}) => {
    const [character, setCharacter] =useState(null);
    const [ errorMessage, setErrorMessage] = useState("")
   
    const id = route.params.id

    const getCharacter = async (id) => {
        try {
            const response = await rickmorty.get(`/${id}`) 
            setCharacter(response.data)
        } catch (error) {
            setErrorMessage("Something went wrong")
        }
    };

    useEffect(()=> {
        getCharacter(id)
    },[])

    if (!character){
        return null
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{uri: character.image}}
                blurRadius={20}
                resizeMode='stretch'
                style={[StyleSheet.absoluteFillObject]}
            />
            <Image style={styles.image} source={{ uri: character.image }}/>
            <View style={{width: 270}}>
                <Text style={styles.name}>{character.name}</Text>
                <Text style={styles.info}>Status: {character.status}</Text>
                <Text style={styles.info}>Species: {character.species}</Text>
                <Text style={styles.info}>Gender: {character.gender}</Text>
                <Text style={styles.info}>Origin: {character.origin.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
    image: {
        marginTop: '20%',
        width: 270,
        height:310,
        borderRadius:4,
        marginBottom:5
    },
    name: {
        textAlign: 'center',
        fontFamily: 'monospace',
        marginTop: 8,
        marginBottom: 15,
        color: '#0b080be3',
        fontWeight: 'bold',
        fontSize: 28
    },
    info: {
        textAlign: 'left',
        color: '#0b080be3',
        fontWeight: 'bold',
        fontSize: 18
    },
});

export default Detail;