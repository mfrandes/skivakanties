module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Footer',
    addFields: [

        {
            name: 'title',
            label: 'Title',
            type: 'string',
            required: true
        },
        {
            name: 'paragraph',
            label: 'Paragraph',
            type: 'string',
            required: true
        },
        {
            name: 'smi1',
            label: 'Social Media Icon 1',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options:
            {
                limit: 1
            },
            required: true
        },
        {
            name: 'smi2',
            label: 'Social Media Icon 2',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options:
            {
                limit: 1
            },
            required: true
        },
        {
            name: 'backgroundImg',
            label: 'Background Img',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options:
            {
                limit: 1
            },
            required: true
        },
    ]
}