interface CarouselItem {
    title: string;
    body: string;
    imgURL: any;
};

export const listCarouselBottom: CarouselItem[] = [
    {
        title: 'Pesos e Medidas',
        body: 'Acompanhe suas medidas',
        imgURL: require('../../assets/img/manabs.jpg')
    },
    {
        title: 'Treinos',
        body: 'Acompanhe seus treinos',
        imgURL: require('../../assets/img/man-training.jpg')
    },
    {
        title: 'Novidades',
        body: 'Acompanhe sua academia',
        imgURL: require('../../assets/img/carrossel1.png')
    }
];

export const listCarouselTop: CarouselItem[] = [
    {
        title: 'Treinos',
        body: 'Explorar Agora',
        imgURL: require('../../assets/img/woman-crossfit.png')
    },
    {
        title: 'Pesos e Medidas',
        body: 'Explorar Agora',
        imgURL: require('../../assets/img/woman-crossfit.png')
    },
    {
        title: 'Novidades',
        body: 'Explorar Agora',
        imgURL: require('../../assets/img/woman-crossfit.png')
    }
];