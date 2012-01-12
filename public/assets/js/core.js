SM = {
    init: function() {
        $('#page-home').live('pagebeforecreate', function() {
            $('body').removeClass('loading');
        });
        
        $('#dialog-location-finder').live('pagecreate', function() {
            head.ready('googlemaps', function() {
                new google.maps.Map($('#map_canvas'), {
                    zoom: 8,
                    center: new google.maps.LatLng(-34.397, 150.644),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
            });
        });
    }
}