import { Text, StyleSheet, View, ScrollView} from 'react-native'
import CharactersList from '../components/CharactersList';
import useCharacters from '../hooks/useCharacters';

const Home = () => {
    const [ characters, errorMessage] = useCharacters()
    return (
       
        <View >
            <CharactersList characters={characters}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
});

export default Home;