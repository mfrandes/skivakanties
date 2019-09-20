module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Add details',
    addFields: [

        {
            name: 'title',
            label: 'Title',
            type: 'string',
            required: true
        },
        {
            name: 'icon',
            label: 'Icon',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options:
            {
                limit: 1
            },
            required: true
        },
        {
            name: 'details',
            label: 'Details',
            type: 'area',
            options: {
                widgets: {
                    'apostrophe-rich-text': {
                        toolbar: ['Bold', 'Italic', 'Styles'],
                        styles: [
                            { name: 'Title', element: 'h3' },
                            { name: 'Meta', element: 'p' }
                        ]
                    }
                }
            }
        }   
    ]

}