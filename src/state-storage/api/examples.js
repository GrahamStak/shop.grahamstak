
    var PrintfulClient = require('./printfulclient.js');
    let img;
    //
    // Replace this with your API key
    //
    var key = 'sl1u5jnc-67y2-hvp4:zh5t-76ye8ona9vuv';

    /**
     * Callback for success
     * data - result element from the API response
     * info - additional data about the request and response
     */
    var ok_callback = function(data, info){
        console.log('SUCCESS');
        console.log(data);
        makeOrder(data.sync_variants[0].files[1].preview_url)
        //If response includes paging information, show total number available
        if(info.total_items){
            console.log('Total items available: '+info.total_items);
        }
    }
    
    var makeOrder = function (img){
            pf.post('orders',
            {
                recipient:  {
                    name: 'John Doe',
                    address1: '19749 Dearborn St',
                    city: 'Chatsworth',
                    state_code: 'CA',
                    country_code: 'US',
                    zip: '91311'
                },
                items: [
                    // {
                    //     variant_id: 1, //Small poster
                    //     name: 'Get me out of here', //Display name
                    //     retail_price: '19.99', //Retail price for packing slip
                    //     quantity: 1,
                    //     files: [
                    //         {url: 'https://i.stack.imgur.com/E2Q3H.jpg?s=328&amp;g=1'}
                    //     ]
                    // },
                    {
                    variant_id: 1118,
                    external_id: '@5ad3ae60a190d3',
                    quantity: 1,
                    name: 'Grand Canyon T-Shirt', //Display name
                    retail_price: '29.99', //Retail price for packing slip
                    files: [
                            {url:img}, //Front print
                            {type: 'back', url: 'https://d1yg28hrivmbqm.cloudfront.net/files/4d7/4d740c4eeb6db875b6aeaadd8f9c70ca_preview.png'}, //Back print
                            {type: 'preview', url: 'https://d1yg28hrivmbqm.cloudfront.net/files/4d7/4d740c4eeb6db875b6aeaadd8f9c70ca_preview.png'} //Mockup image
                    ],
                    options: [ //Additional options
                            {id: 'remove_labels', value: true}
                    ]
                    }
                ]
            }
        ).success(order_callback).error(error_callback);
    }

    var order_callback = function(data, info){
        console.log('SUCCESS');
        console.log(data);
        //If response includes paging information, show total number available
        if(info.total_items){
            console.log('Total items available: '+info.total_items);
        }
    }

    /**
     * Callback for failure
     * data - error message
     * info - additional data about the request
     */
    var error_callback = function(message, info){
        console.log('ERROR ' + message);
        //Dump raw response
        console.log(info.response_raw);
    }

    ///Construct client
    var pf = new PrintfulClient(key);

    module.exports = pf

    //
    //Uncomment any of the following examples to test it
    //

    //Get information about the store
    // pf.get('store').success(ok_callback).error(error_callback);

    //Get product list
    //pf.get('products').success(ok_callback).error(error_callback);

    //Get variants for product 10
    //pf.get('products/10').success(ok_callback).error(error_callback);

    //Get information about Variant 1007
    // pf.get('sync/products/@5ad3ae60a190d3').success(ok_callback).error(error_callback);

    //Select 10 latest orders and get the total number of orders
    //pf.get('orders',{limit: 10}).success(ok_callback).error(error_callback);

    //Select order with ID 12345 (Replace with your order's ID)
    //pf.get('orders/12345').success(ok_callback).error(error_callback);

    //Select order with External ID 9900999 (Replace with your order's External ID)
    //pf.get('orders/@9900999').success(ok_callback).error(error_callback);

    //Confirm order with ID 12345 (Replace with your order's ID)
    //pf.post('orders/12345/confirm').success(ok_callback).error(error_callback);

    //Cancel order with ID 12345 (Replace with your order's ID)
    //pf.delete('orders/23479').success(ok_callback).error(error_callback);

    //Create an order

    

    //Create an order and confirm immediately
/*
    pf.post('orders',
        {
            recipient:  {
                name: 'John Doe',
                address1: '19749 Dearborn St',
                city: 'Chatsworth',
                state_code: 'CA',
                country_code: 'US',
                zip: '91311'
            },
            items: [
                {
                    variant_id: 1, //Small poster
                    name: 'Niagara Falls poster', //Display name
                    retail_price: '19.99', //Retail price for packing slip
                    quantity: 1,
                    files: [
                        {url: 'http://example.com/files/posters/poster_1.jpg'}
                    ]
                }
            ]
        },
        {confirm: 1}
    ).success(ok_callback).error(error_callback);
*/

    //Calculate shipping rates for an order
/*
    pf.post('shipping/rates',{
        recipient: {
            country_code: 'US',
            state_code: 'CA'
        },
        items: [
           {variant_id: 1,  quantity: 1}, //Small poster
           {variant_id: 1118, quantity: 2} //Alternative T-Shirt
        ]
    }).success(ok_callback).error(error_callback);
*/
