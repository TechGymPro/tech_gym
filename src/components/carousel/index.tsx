import React, { useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { style } from './style';
import { listCarouselBottom, listCarouselTop } from './carouselData';
import { units } from '../../hooks/hooks';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../global/colors';


interface Props {
    item: any;
    index: number;
}

const CardItemBottom: React.FC<Props> = ({ item, index }) => {
    return (
        <View style={style.containerImage} key={index}>
            <TouchableOpacity>
                <ImageBackground
                    source={item.imgURL}
                    style={style.image}
                >
                    <Text style={style.header}>{item.title}</Text>
                    <Text style={style.body}>{item.body}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View >
    )
}

export function CarouselBottom() {
    const isCarousel = React.useRef(null)

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Carousel
                vertical={false}
                layoutCardOffset={9}
                ref={isCarousel}
                data={listCarouselBottom}
                renderItem={CardItemBottom}
                sliderWidth={units.vw * 100}
                itemWidth={units.vw * 77}
                inactiveSlideShift={0}
                useScrollView={true}
                loop
            />
        </View>
    )
}



const CardItemTop: React.FC<Props> = ({ item, index }) => {
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
    );
};

export function CarouselTop() {
    const isCarousel = React.useRef(null);
    const [index, setIndex] = useState(0);

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Carousel
                vertical={false}
                layoutCardOffset={9}
                ref={isCarousel}
                data={listCarouselTop}
                renderItem={CardItemTop}
                sliderWidth={units.vw * 100}
                itemWidth={units.vw * 92}
                inactiveSlideShift={0}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            />
            <Pagination
                dotsLength={listCarouselTop.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 25,
                    height: 8,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: colors.greyDotColor,
                    bottom: units.vh * 3,
                }}
                inactiveDotOpacity={0.8}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>
    );
}



