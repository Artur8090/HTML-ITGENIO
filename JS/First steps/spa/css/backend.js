let lastId = 4;
let lastCommentId = 2;

export const news = [
    {
        id: 1,
        tag: 'sport',
        img: './public/news1.jpg',
        date: new Date(2020, 10, 4, 11, 58),
        title: 'Требониан Галл происходил из старинного этрусского рода. В конце правления императора ' +
            'Деция Траяна он занимал должность легата',
        description: 'Будущий император Гай Вибий Требониан Галл родился около 206 года. Эта датировка' +
            ' основана на сообщении Псевдо-Аврелия Виктора, который в своей «Эпитоме» пишет, что на момент ' +
            'смерти Гаю было примерно сорок семь лет.',
        likesCount: 11500,
        commentsCount: 1500,
        isLiked: true,
    },
    {
        id: 2,
        tag: 'real estate',
        img: './public/news2.jpg',
        date: new Date(2020, 10, 4, 10, 57),
        title: 'Просто немного другой заголовк статьи',
        description: 'Будущий император Гай Вибий Требониан Галл родился около 206 года. Эта датировка' +
            ' основана на сообщении Псевдо-Аврелия Виктора, который в своей «Эпитоме» пишет, что на момент ' +
            'смерти Гаю было примерно сорок семь лет.',
        likesCount: 2,
        commentsCount: 22,
        isLiked: false,
    },
    {
        id: 3,
        tag: 'finance',
        img: './public/news1.jpg',
        date: new Date(2020, 10, 4, 10, 58),
        title: '2Просто немного другой заголовк статьи2',
        description: 'Будущий император Гай Вибий Требониан Галл родился около 206 года. Эта датировка' +
            ' основана на сообщении Псевдо-Аврелия Виктора, который в своей «Эпитоме» пишет, что на момент ' +
            'смерти Гаю было примерно сорок семь лет.',
        likesCount: 3,
        commentsCount: 33,
        isLiked: true,
    },
    {
        id: 4,
        tag: 'job',
        img: './public/news2.jpg',
        date: new Date(2020, 10, 4, 10, 58),
        title: '3Просто немного другой заголовк статьи3',
        description: 'Будущий император Гай Вибий Требониан Галл родился около 206 года. Эта датировка' +
            ' основана на сообщении Псевдо-Аврелия Виктора, который в своей «Эпитоме» пишет, что на момент ' +
            'смерти Гаю было примерно сорок семь лет.',
        likesCount: 1000000,
        commentsCount: 1000000,
        isLiked: false,
    },
];

export const fullNews = [
    {
        id: 1,
        tag: 'sport',
        img: './public/news1.jpg',
        date: new Date(2020, 10, 4, 11, 58),
        title: 'Требониан Галл происходил из старинного этрусского рода. В конце правления императора ' +
            'Деция Траяна он занимал должность легата',
        text: `По приказу министра, с 1 октября TUT.BY утратит статус СМИ. При этом мы по-прежнему будем работать как интернет-ресурс без статуса СМИ.

Напомним, что регистрация интернет-ресурсов в качестве сетевых изданий в Беларуси носит добровольный характер. Статус СМИ дает некоторые преимущества, в частности возможность на законных основаниях присутствовать в порядке, определенном законодательством Республики Беларусь, в районах вооруженных конфликтов или чрезвычайных ситуаций, на массовых мероприятиях, в местах других общественно важных событий и передавать оттуда информацию. Однако TUT.BY был зарегистрирован как СМИ лишь в январе 2019 года, до этого — с момента основания в 2000 году — портал работал без этого статуса.

По приказу министра, с 1 октября TUT.BY утратит статус СМИ. При этом мы по-прежнему будем работать как интернет-ресурс без статуса СМИ.

Напомним, что регистрация интернет-ресурсов в качестве сетевых изданий в Беларуси носит добровольный характер. Статус СМИ дает некоторые преимущества, в частности возможность на законных основаниях присутствовать в порядке, определенном законодательством Республики Беларусь, в районах вооруженных конфликтов или чрезвычайных ситуаций, на массовых мероприятиях, в местах других общественно важных событий и передавать оттуда информацию. Однако TUT.BY был зарегистрирован как СМИ лишь в январе 2019 года, до этого — с момента основания в 2000 году — портал работал без этого статуса.`,
        likesCount: 11500,
        commentsCount: 1500,
        isLiked: true,
    },
    {
        id: 2,
        tag: 'real estate',
        img: './public/news2.jpg',
        date: new Date(2020, 10, 4, 10, 57),
        title: 'Просто немного другой заголовк статьи',
        text: `По приказу министра, с 1 октября TUT.BY утратит статус СМИ. При этом мы по-прежнему будем работать как интернет-ресурс без статуса СМИ.

Напомним, что регистрация интернет-ресурсов в качестве сетевых изданий в Беларуси носит добровольный характер. Статус СМИ дает некоторые преимущества, в частности возможность на законных основаниях присутствовать в порядке, определенном законодательством Республики Беларусь, в районах вооруженных конфликтов или чрезвычайных ситуаций, на массовых мероприятиях, в местах других общественно важных событий и передавать оттуда информацию. Однако TUT.BY был зарегистрирован как СМИ лишь в январе 2019 года, до этого — с момента основания в 2000 году — портал работал без этого статуса.

По приказу министра, с 1 октября TUT.BY утратит статус СМИ. При этом мы по-прежнему будем работать как интернет-ресурс без статуса СМИ.

Напомним, что регистрация интернет-ресурсов в качестве сетевых изданий в Беларуси носит добровольный характер. Статус СМИ дает некоторые преимущества, в частности возможность на законных основаниях присутствовать в порядке, определенном законодательством Республики Беларусь, в районах вооруженных конфликтов или чрезвычайных ситуаций, на массовых мероприятиях, в местах других общественно важных событий и передавать оттуда информацию. Однако TUT.BY был зарегистрирован как СМИ лишь в январе 2019 года, до этого — с момента основания в 2000 году — портал работал без этого статуса.`,
        likesCount: 2,
        commentsCount: 22,
    },
    {
        id: 3,
        tag: 'finance',
        img: './public/news1.jpg',
        date: new Date(2020, 10, 4, 10, 58),
        title: '2Просто немного другой заголовк статьи2',
        text: `По приказу министра, с 1 октября TUT.BY утратит статус СМИ. При этом мы по-прежнему будем работать как интернет-ресурс без статуса СМИ.

Напомним, что регистрация интернет-ресурсов в качестве сетевых изданий в Беларуси носит добровольный характер. Статус СМИ дает некоторые преимущества, в частности возможность на законных основаниях присутствовать в порядке, определенном законодательством Республики Беларусь, в районах вооруженных конфликтов или чрезвычайных ситуаций, на массовых мероприятиях, в местах других общественно важных событий и передавать оттуда информацию. Однако TUT.BY был зарегистрирован как СМИ лишь в январе 2019 года, до этого — с момента основания в 2000 году — портал работал без этого статуса.

По приказу министра, с 1 октября TUT.BY утратит статус СМИ. При этом мы по-прежнему будем работать как интернет-ресурс без статуса СМИ.

Напомним, что регистрация интернет-ресурсов в качестве сетевых изданий в Беларуси носит добровольный характер. Статус СМИ дает некоторые преимущества, в частности возможность на законных основаниях присутствовать в порядке, определенном законодательством Республики Беларусь, в районах вооруженных конфликтов или чрезвычайных ситуаций, на массовых мероприятиях, в местах других общественно важных событий и передавать оттуда информацию. Однако TUT.BY был зарегистрирован как СМИ лишь в январе 2019 года, до этого — с момента основания в 2000 году — портал работал без этого статуса.`,
        likesCount: 3,
        commentsCount: 33,
        isLiked: false,
    },
    {
        id: 4,
        tag: 'job',
        img: './public/news2.jpg',
        date: new Date(2020, 10, 4, 10, 58),
        title: '3Просто немного другой заголовк статьи3',
        text: `По приказу министра, с 1 октября TUT.BY утратит статус СМИ. При этом мы по-прежнему будем работать как интернет-ресурс без статуса СМИ.

Напомним, что регистрация интернет-ресурсов в качестве сетевых изданий в Беларуси носит добровольный характер. Статус СМИ дает некоторые преимущества, в частности возможность на законных основаниях присутствовать в порядке, определенном законодательством Республики Беларусь, в районах вооруженных конфликтов или чрезвычайных ситуаций, на массовых мероприятиях, в местах других общественно важных событий и передавать оттуда информацию. Однако TUT.BY был зарегистрирован как СМИ лишь в январе 2019 года, до этого — с момента основания в 2000 году — портал работал без этого статуса.

По приказу министра, с 1 октября TUT.BY утратит статус СМИ. При этом мы по-прежнему будем работать как интернет-ресурс без статуса СМИ.

Напомним, что регистрация интернет-ресурсов в качестве сетевых изданий в Беларуси носит добровольный характер. Статус СМИ дает некоторые преимущества, в частности возможность на законных основаниях присутствовать в порядке, определенном законодательством Республики Беларусь, в районах вооруженных конфликтов или чрезвычайных ситуаций, на массовых мероприятиях, в местах других общественно важных событий и передавать оттуда информацию. Однако TUT.BY был зарегистрирован как СМИ лишь в январе 2019 года, до этого — с момента основания в 2000 году — портал работал без этого статуса.`,
        likesCount: 1000000,
        commentsCount: 1000000,
        isLiked: true,
    },
];

export function addNews(newArticle) {
    const article = {
        ...newArticle,
        id: lastId,
    };
    lastId++;
    fullNews.push(article);

    const {text, ...fields} = article;
    news.push({
        ...fields,
        description: text.slice(0, 100)
    });
    return article;
}

export const allComments = [
    {
        id: 1,
        newsId: 1,
        text: 'текст комметария',
        user: {
            userId: 1,
            username: 'Иван Иванов',
            img: './public/user_logo3.jpg'
        },
        subComments: [
            {
                id: 1,
                commentId: 1,
                newsId: 1,
                userToAnswer: {
                    userId: 2,
                    username: 'Олег Викторов',
                    img: './public/user_logo2.jpg'
                },
                text: 'текс подкомментария',
                user: {
                    userId: 1,
                    username: 'Иван Иванов',
                    img: './public/user_logo3.jpg'
                },
            }
        ],

    },
    {
        id: 2,
        newsId: 1,
        text: 'текст комметария2',
        user: {
            userId: 1,
            username: 'Иван Иванов',
            img: './public/user_logo3.jpg'
        },
        subComments: [
            {
                id: 1,
                commentId: 1,
                newsId: 1,
                userToAnswer: {
                    userId: 2,
                        username: 'Олег Викторов',
                    img: './public/user_logo2.jpg'
                },
                text: 'текс подкомментария',
                user: {
                    userId: 1,
                    username: 'Иван Иванов',
                    img: './public/user_logo3.jpg'
                }
            }
        ],

    }
];

export function makeLike(newsId) {
    const oneNews = news.find(n => n.id === newsId);
    oneNews.isLiked = !oneNews.isLiked;
    const oneFullNews = fullNews.find(n => n.id === newsId);
    oneFullNews.isLiked = !oneFullNews.isLiked;
}

export function updateComment(id, text) {
    allComments.find(c => c.id === id).text = text;
}

export function updateSubComment(id, text) {
    allComments.find(c => c.subComments.find(sc => sc.id === id))
        .subComments.find(sc => sc.id === id).text = text;
}

export function addComment(text, newsId) {
    lastCommentId++;
    allComments.push({
        newsId,
        text,
        id: lastCommentId,
        user: {...loggedUser}
    });
}

export function addSubComment(newsId, text, user, answerTo) {
    const subComments = allComments.find(c => c.id === newsId).subComments;
    subComments.push({
        id: subComments[subComments.length - 1].id + 1,
        text,
        user,
        answerTo
    });
}

export const loggedUser = {
    id: 1,
    username: 'Дядя Володя',
    img: './public/user_logo.svg'
};