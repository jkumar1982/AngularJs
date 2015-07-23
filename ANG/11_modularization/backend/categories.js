module.exports = function (locale) {
    locale = locale || 'en';

    var categories = {
        en: [
            {
                id: 1,
                label: 'Politic',
                subcategories: [
                    {
                        id: 11,
                        label: 'National'
                    },
                    {
                        id: 12,
                        label: 'International'
                    }
                ]
            },
            {
                id: 2,
                label: 'Economy',
                subcategories: [
                    {
                        id: 21,
                        label: 'Markets'
                    },
                    {
                        id: 22,
                        label: 'Stocks'
                    },
                    {
                        id: 23,
                        label: 'Finance'
                    }
                ]
            },
            {
                id: 3,
                label: 'Sports',
                subcategories: [
                    {
                        id: 31,
                        label: 'Soccer'
                    },
                    {
                        id: 32,
                        label: 'Motor'
                    },
                    {
                        id: 33,
                        label: 'Tennis'
                    }
                ]
            }
        ],
        de: [
            {
                id: 1,
                label: 'Politik',
                subcategories: [
                    {
                        id: 11,
                        label: 'National'
                    },
                    {
                        id: 12,
                        label: 'International'
                    }
                ]
            },
            {
                id: 2,
                label: 'Ekonomie',
                subcategories: [
                    {
                        id: 21,
                        label: 'Märkte'
                    },
                    {
                        id: 22,
                        label: 'Börse'
                    },
                    {
                        id: 23,
                        label: 'Finanz'
                    }
                ]
            },
            {
                id: 3,
                label: 'Sports',
                subcategories: [
                    {
                        id: 31,
                        label: 'Fussball'
                    },
                    {
                        id: 32,
                        label: 'Motor'
                    },
                    {
                        id: 33,
                        label: 'Tennis'
                    }
                ]
            }
        ]
    }

    return categories[locale];
};

