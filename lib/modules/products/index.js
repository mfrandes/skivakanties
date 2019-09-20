module.exports = {
    extend: 'apostrophe-pieces',
    name: 'product',
    label: 'Product',
    pluralLabel: 'Products',
    addFields: [
        {
            name: 'title',
            type: 'string',
            required: true,
            contextual: true
        },
        {
            name: 'pretyTitle',
            type: 'string',
            required: true,
            contextual: true

        },
        {
            name: 'name',
            label: 'Hotel Name',
            type: 'string',
            required: true
        },
        {
            name: 'location',
            label: 'Location',
            type: 'string',
            required: true
        },
        {
            name: 'city',
            label: 'City',
            type: 'string',
            required: true
        },
        {
            name: 'address',
            label: 'Address',
            type: 'string',
            required: true
        },
        {
            name: 'country',
            label: 'Country',
            type: 'string',
            required: true
        },
        {
            name: 'inDate',
            label: 'Check in date',
            type: 'date',
            pikadayOptions: {
            }
        },
        {
            name: 'outDate',
            label: 'Check out date',
            type: 'date',
            pikadayOptions: {
            }
        },
        {
            name: 'days',
            type: 'string',
            contextual: true,
            required: true
        },

        {
            name: 'price',
            label: 'Price',
            type: 'string',
            required: true
        },
        {
            name: 'currency',
            label: 'Select currency',
            required: true,
            type: 'select',
            choices: [
                {
                    label: 'Euro',
                    value: 'EUR'
                },
                {
                    label: 'Us Dollar',
                    value: 'USD'
                },
            ]
        },
        {
            name: 'priceDetails',
            label: 'Price Description',
            type: 'string',
            required: true
        },
        {
            name: 'select',
            label: 'Select star number',
            required: true,
            type: 'select',
            choices: [
                {
                    label: 'one star',
                    value: 1
                },
                {
                    label: 'two stars',
                    value: 2
                },
                {
                    label: 'tree stars',
                    value: 3
                },
                {
                    label: 'four stars',
                    value: 4
                },
                {
                    label: 'five stars',
                    value: 5
                },
                {
                    label: 'six stars',
                    value: 6
                }
            ]
        },
        {
            name: 'background',
            label: 'Background Image',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options:
            {
                limit: 1
            },
            required: true
        },
        {
            name: 'starIcon',
            label: 'Star Icon',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options:
            {
                limit: 1
            },
            required: true
        },
        {
            name: 'locationPin',
            label: 'Location Pin',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options:
            {
                limit: 1
            },
            required: true
        },
        {
            name: 'calendar',
            label: 'Calendar Icon',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options:
            {
                limit: 1
            },
            required: true
        }

    ],
    arrangeFields: [
        {
            name: 'contact',
            label: 'Contact',
            fields: ['name', 'location', 'city', 'address', 'country']
        },
        {
            name: 'period',
            label: 'Select period',
            fields: ['inDate', 'outDate']
        },
        {
            name: 'pricing',
            label: 'Pricing',
            fields: ['price', 'currency', 'priceDetails', 'select']
        },
        {
            name: 'media',
            label: 'Media',
            fields: ['background', 'starIcon', 'locationPin', 'calendar']
        },
        {
            name: 'admin',
            label: 'Administrative',
            fields: ['slug', 'published', 'tags']
        }

    ],
    construct: function (self, options) {
        self.beforeSave = function (req, piece, options, callback) {
            piece.title = 'Hotel' + ' ' + piece.name + ' in '+ piece.country;
            piece.pretyTitle = 'Hotel' + ' ' + piece.name ;
            piece.slug = piece.name;

            let dateIn = new Date(piece.inDate);
            let dateOut =  new Date(piece.outDate);
            let difDays = Math.abs(dateOut - dateIn);
            let days = Math.ceil(difDays / (1000*60*60*24));
            piece.days =  days;

            

            return callback();
        };
    }
};