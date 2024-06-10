import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import { Header } from '../../components/header';
import { style } from './style';
import { TitleAndSubtitleCard } from '../../components/titleAndSubtitleCard';
import { LongButton } from '../../components/button';
import { Card } from '../../components/card';

const cardsContent = [{
    index: 1,
    subtitle: 'Mensal',
    title: 70,
    options: ['Feature 1', 'Feature 2', 'Feature 3'],
    onPress: { undefined },
    discount: false,
},
{
    index: 2,
    subtitle: 'Semestral',
    title: 370,
    options: ['Feature 1', 'Feature 2', 'Feature 3'],
    onPress: { undefined },
    discount: true,
},
{
    index: 3,
    subtitle: 'Anual',
    title: 714,
    options: ['Feature 1', 'Feature 2', 'Feature 3'],
    onPress: { undefined },
    discount: false,
}]

const PropositionOptions = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    function handlePress(index: number) {
        setActiveIndex(activeIndex === index ? null : index);
    }

    function alert() {
        console.log('button pressed');
    }

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={{ height: '40%' }}>
                <Header
                    backButton
                />
                <TitleAndSubtitleCard
                    title={'Escolha seu plano'}
                    subtitle={'Esses são as opções de planos, escolha o que melhor se encaixar com você'}
                    marginCustom
                />

                <View style={style.cardsContainer}>
                    {cardsContent.map(
                        card =>
                        (
                            <Card
                                key={card.index}
                                title={card.title}
                                subtitle={card.subtitle}
                                options={card.options}
                                onPress={() => handlePress(card.index)}
                                isActive={activeIndex === card.index}
                                disable={activeIndex === null || activeIndex !== card.index}
                                discount={card.discount}
                            />
                        )
                    )}
                </View>
                <LongButton
                    title={'Pagar'}
                    onPress={() => alert()}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PropositionOptions;

