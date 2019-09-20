module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Add Description',
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
            name: 'snowflake',
            label: 'Snowflake',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options:
            {
                limit: 1
            }
        },
        {
            name: 'snowFriends',
            label: 'Snow Friends',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options:
            {
                limit: 1
            }
        },
        {
            name: 'se7en',
            label: 'Se7en Logo',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options:
            {
                limit: 1
            }
        },
        {
            name: 'blueTree',
            label: 'Blue tree',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options:
            {
                limit: 1
            }
        }
    ]
}