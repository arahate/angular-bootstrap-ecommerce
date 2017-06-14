
module.exports.pluckmodelnamefromurl = function ( seperator,urlstring) {
        var start_pos = urlstring.indexOf(seperator) + 1;
        var end_pos = urlstring.indexOf(seperator,start_pos);
        var text_to_get = urlstring.substring(start_pos,end_pos);
};