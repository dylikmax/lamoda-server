const SORTS = [
    {
        id: 'cheapFirst',
        name: 'Cheap first',
        fn: (pr1, pr2) => pr1.price - pr2.price,
    },
    {
        id: 'expensiveFirst',
        name: 'Expensive first',
        fn: (pr1, pr2) => pr2.price - pr1.price,
    },
    {
        id: 'popularFirst',
        name: 'Popular first',
        fn: (pr1, pr2) => pr2.rating - pr1.rating,
    }
]

module.exports = SORTS