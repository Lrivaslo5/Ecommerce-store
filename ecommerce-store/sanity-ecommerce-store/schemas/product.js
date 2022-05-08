export default { // Sanity Schema is represeneted as a javascript object - we are creating a produt schema 
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true, // helps us position image uploaded
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',  //URL (unique String)
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number', 
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        },
    ],
};