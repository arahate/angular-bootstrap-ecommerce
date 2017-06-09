'use strict';

eventapp.controller('EventController',
function EventController( $scope) {
    $scope.event=  {
        title: 'My First Angular App',
        trainer : 'Abhijit Rahate',
        date  :  '10/05/2017',
        time : '10:30',
        location : {
            address: 'Capgemini',
            city: 'Mumbai',
            state: 'Maharashtra'
        },
        sessions :[
            {
                name: 'NPM Primer',
                information:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada a tellus ultricies lobortis. Pellentesque et mattis nisl. Mauris pellentesque commodo justo, dignissim iaculis lacus aliquam id. Nullam consequat tincidunt urna, eget scelerisque dui dignissim vitae. Ut congue eget lacus at molestie. Pellentesque consequat mi eu quam vestibulum tempus sed id enim. Vivamus ornare, augue congue porta luctus, orci odio tristique tellus, at hendrerit nunc erat sit amet libero. Proin eu tincidunt ex, a eleifend orci. Etiam turpis erat, interdum quis sapien nec, consectetur sollicitudin turpis. Nunc aliquam, leo nec molestie bibendum, eros libero accumsan erat, eget aliquet odio turpis eget urna. Aenean semper ornare suscipit. Nullam congue mi odio, at egestas neque condimentum eget.',
                 votecount:0
            },
            {
                name:'Angular Basics',
                information:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada a tellus ultricies lobortis. Pellentesque et mattis nisl. Mauris pellentesque commodo justo, dignissim iaculis lacus aliquam id. Nullam consequat tincidunt urna, eget scelerisque dui dignissim vitae. Ut congue eget lacus at molestie. Pellentesque consequat mi eu quam vestibulum tempus sed id enim. Vivamus ornare, augue congue porta luctus, orci odio tristique tellus, at hendrerit nunc erat sit amet libero. Proin eu tincidunt ex, a eleifend orci. Etiam turpis erat, interdum quis sapien nec, consectetur sollicitudin turpis. Nunc aliquam, leo nec molestie bibendum, eros libero accumsan erat, eget aliquet odio turpis eget urna. Aenean semper ornare suscipit. Nullam congue mi odio, at egestas neque condimentum eget.',
                votecount:0
            } ,   
            {
                name: 'Angular hands on Lab',
                information:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada a tellus ultricies lobortis. Pellentesque et mattis nisl. Mauris pellentesque commodo justo, dignissim iaculis lacus aliquam id. Nullam consequat tincidunt urna, eget scelerisque dui dignissim vitae. Ut congue eget lacus at molestie. Pellentesque consequat mi eu quam vestibulum tempus sed id enim. Vivamus ornare, augue congue porta luctus, orci odio tristique tellus, at hendrerit nunc erat sit amet libero. Proin eu tincidunt ex, a eleifend orci. Etiam turpis erat, interdum quis sapien nec, consectetur sollicitudin turpis. Nunc aliquam, leo nec molestie bibendum, eros libero accumsan erat, eget aliquet odio turpis eget urna. Aenean semper ornare suscipit. Nullam congue mi odio, at egestas neque condimentum eget.',
                votecount:0
            }
        ]
    };

    $scope.upvotesession= function(session){
        session.votecount++;
    };
     $scope.downvotesession= function(session){
        session.votecount--;
    };
})