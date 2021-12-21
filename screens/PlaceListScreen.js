import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import PlaceItem from '../components/PlaceItem';

const PlaceListScreen = ({ navigation }) => {
    const places = useSelector(state => state.places.places);
    
    const renderItem = (data) => (
        <PlaceItem
            title={data.item.title}
            image={data.item.image}
            address={data.item.address}
            onSelect={() => navigation.navigate('Detalle')}
        />
    )

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}

export default PlaceListScreen
