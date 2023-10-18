import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image, Animated, Dimensions} from 'react-native'
import CharacterCard from './CharacterCard';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const {width} = Dimensions.get('screen')

const CharactersList = ({characters}) => {
    const navigation = useNavigation();
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <View>
            <View style={[StyleSheet.absoluteFillObject]}>
                {characters.map((character, index) => {
                    const inputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width
                    ]
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0,1,0]
                    })
                    return <Animated.Image
                        key={character.id}
                        source={{uri: character.image}}
                        style={[StyleSheet.absoluteFillObject, {opacity}]}
                        blurRadius={20}
                    />
                })}
            </View>
            <Animated.FlatList 
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                { useNativeDriver: true}
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            data={characters}
            keyExtractor={(characters) => characters.id}
            renderItem={({item})=> {
                return (
                    <TouchableOpacity onPress={()=> navigation.navigate('Detail', {id: item.id})}>
                        <CharacterCard result={item}/>
                    </TouchableOpacity>
                )
            }}
        />
        </View>
    )
}

const styles = StyleSheet.create({});

export default CharactersList;