module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Header',
    addFields: [
        {
            type: 'url',
            name: 'video',
            label: 'Enter video URL',
        },
        {
            name: 'image',
            label: 'Background image',
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