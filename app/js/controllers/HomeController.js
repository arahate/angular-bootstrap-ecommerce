'use strict';

homeapp.controller ('HomeController',
    function ($scope) {
        $scope.navbar = {
            shopcartitemcount: 2,
            shopcartprice : 499
        }
        $scope.leftmenu ={

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
)