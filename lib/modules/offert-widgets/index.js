module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Add new offert',
    addFields: [
        
        {
            name: 'title',
            label: 'Title',
            type: 'string',
            required: true
        },
        {
            name: 'paragraph',
            label: 'Pargraph',
            type: 'string',
            required: true
        },
        {
            name: 'url',
            type: 'url',
            label: 'URL for offert',
        },
        {
            name: 'label',
            type: 'string',
            label: 'Button Name',
        },
        {
            name: 'picture',
            label: 'Picture',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options:
            {
                limit: 1
            },
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
        }
        
    ]
}