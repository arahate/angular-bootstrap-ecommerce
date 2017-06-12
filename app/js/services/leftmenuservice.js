homeapp.factory('leftmenuservice',function() {
 return {
    leftmenu: {

            productcategories: [
                { display : 'Men' , items: [
                    {display : 'Clothing', items : [ 
                        { display : 'Formal' }  ,
                        { display : 'Casual' } ,
                        { display : 'Shoes'},
                        ]
                     }
                ]
            },
                { display :  'Women', items: [
                    { display : 'Formal'} ,
                    { display : 'Casual'},
                    { display : 'Shoes'},
                    { display : 'Jwellery'},
                    { display : 'Bridal' },
                ] 
            },
                { display :  'Kids', items: [
                    { display : 'Formal'} ,
                    { display : 'Casual'},
                    { display : 'Shoes'},
                    { display : 'Games'}
                    
                ] 
            }
           ]
        }

    }
}

);