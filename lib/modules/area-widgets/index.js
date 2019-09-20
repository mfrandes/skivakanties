module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Area',
    addFields: [
        {
            name: 'title',
            label: 'Title',
            type: 'string',
            required: true
        },
        {
            name: 'one',
            type: 'area'
        }

    ]
};
