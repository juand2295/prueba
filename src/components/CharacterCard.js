import { Text, StyleSheet, View, Image, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')
    const imageW = width * 0.75
    const imageH = imageW * 1.3

const CharacterCard = ({result}) => {

    return (
        <View style={styles.container}>
            <View style={styles.shadow}>
            <Image style={styles.image} source={{ uri: result.image }}/>
            </View>
            <Text style={styles.name}>{result.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: imageW,
        height:imageH,
        resizeMode: 'cover',
        borderRadius:4,
        marginBottom:8,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 15,

        elevation: 7,
    },
    name: {
        fontFamily: 'monospace',
        color: '#0b080be3',
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: '50%'
    },
    rating: {
        fontSize: 13
    }
});

export default CharacterCard;