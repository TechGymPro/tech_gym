import React from 'react'
import { ImageBackground, ListRenderItem, Text, TouchableOpacity, View } from "react-native"
// import Carousel from 'react-native-reanimated-carousel'
import Carousel from 'react-native-snap-carousel'
import { style } from './style'
import { listCarouselBottom, listCarouselTop } from './carouselData'
import { units } from '../../hooks/hooks'
import LinearGradient from 'react-native-linear-gradient'

const CardItemBottom: ListRenderItem<any> = ({ item, index }) => {
    return (
        <View style={style.containerImage} key={index}>
            <ImageBackground
                source={item.imgURL}
                style={style.image}
            >
                <Text style={style.header}>{item.title}</Text>
                <Text style={style.body}>{item.body}</Text>
            </ImageBackground>
        </View>
    )
}

export function CarouselBottom() {
    const isCarousel = React.useRef(null)

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Carousel
                layoutCardOffset={9}
                ref={isCarousel}
                data={listCarouselBottom}
                renderItem={CardItemBottom}
                sliderWidth={units.vw * 100}
                itemWidth={units.vw * 77}
                inactiveSlideShift={0}
                useScrollView={true}
            />
        </View>
    )
}



const CardItemTop: ListRenderItem<any> = ({ item, index }) => {
    return (

        <View style={style.containerImageTop} key={index}>

            <ImageBackground
                source={item.imgURL}
                style={style.imageTop}
            >
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0.2)', 'rgba(0,0,0,0.6)']}
                    style={style.linearGradient}
                >
                    <View style={style.containerTextTop}>
                        <Text style={style.headerTop}>{item.title}</Text>
                        <TouchableOpacity style={style.cardTopBtn}>
                            <Text style={style.cardTopBtnText}>
                                {item.body}
                            </Text>
                        </TouchableOpacity>

                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}
export function CarouselTop() {
    const isCarousel = React.useRef(null)

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Carousel
                layoutCardOffset={9}
                ref={isCarousel}
                data={listCarouselTop}
                renderItem={CardItemTop}
                sliderWidth={units.vw * 100}
                itemWidth={units.vw * 92}
                inactiveSlideShift={0}
                useScrollView={true}
            />
        </View>
    )
}



