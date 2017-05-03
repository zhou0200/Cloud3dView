// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
//#to-top button appears after scrolling
var fixed = false;
$(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
        if (!fixed) {
            fixed = true;
            // $('#to-top').css({position:'fixed', display:'block'});
            $('#to-top').show("slow", function() {
                $('#to-top').css({
                    position: 'fixed',
                    display: 'block'
                });
            });
        }
    } else {
        if (fixed) {
            fixed = false;
            $('#to-top').hide("slow", function() {
                $('#to-top').css({
                    display: 'none'
                });
            });
        }
    }
});
// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
    var that = $(this);
    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
    var that = $(this);
    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);
    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");
    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);


// control parameters setting
            $(function() {
                var option = $('#form-control_1_4').find(":selected").text();
                if(option=='Auto'){
                     $('#form-control_1_1').prop('disabled',true);
                     $('#form-control_1_2').prop('disabled',true);
                     $('#form-control_1_3').prop('disabled',true);

                }
                else{
                     $('#form-control_1_1').prop('disabled',false);
                     $('#form-control_1_2').prop('disabled',false);
                     $('#form-control_1_3').prop('disabled',false);
                }

            });

            $(function() {
                $("#form-control_1_4").change(function() {
                    var option = $('#form-control_1_4').find(":selected").text();
                    if(option=='Manual'){
                     $('#form-control_1_1').prop('disabled',false);
                     $('#form-control_1_2').prop('disabled',false);
                     $('#form-control_1_3').prop('disabled',false);

                    }
                    else{
                     $('#form-control_1_1').prop('disabled',true);
                     $('#form-control_1_2').prop('disabled',true);
                     $('#form-control_1_3').prop('disabled',true);
                    }                });
            });

            $(function() {
                var option = $('#form-control_2_4').find(":selected").text();
                if(option=='Auto'){
                     $('#form-control_2_1').prop('disabled',true);
                     $('#form-control_2_2').prop('disabled',true);
                     $('#form-control_2_3').prop('disabled',true);

                }
                else{
                     $('#form-control_2_1').prop('disabled',false);
                     $('#form-control_2_2').prop('disabled',false);
                     $('#form-control_2_3').prop('disabled',false);
                }

            });

            $(function() {
                $("#form-control_2_4").change(function() {
                    var option = $('#form-control_2_4').find(":selected").text();
                    if(option=='Manual'){
                     $('#form-control_2_1').prop('disabled',false);
                     $('#form-control_2_2').prop('disabled',false);
                     $('#form-control_2_3').prop('disabled',false);

                    }
                    else{
                     $('#form-control_2_1').prop('disabled',true);
                     $('#form-control_2_2').prop('disabled',true);
                     $('#form-control_2_3').prop('disabled',true);
                    }                });
            });

            $(function() {
                var option = $('#form-control_3_4').find(":selected").text();
                if(option=='Auto'){
                     $('#form-control_3_1').prop('disabled',true);
                     $('#form-control_3_2').prop('disabled',true);
                     $('#form-control_3_3').prop('disabled',true);

                }
                else{
                     $('#form-control_3_1').prop('disabled',false);
                     $('#form-control_3_2').prop('disabled',false);
                     $('#form-control_3_3').prop('disabled',false);
                }

            });

            $(function() {
                $("#form-control_3_4").change(function() {
                    var option = $('#form-control_3_4').find(":selected").text();
                    if(option=='Manual'){
                     $('#form-control_3_1').prop('disabled',false);
                     $('#form-control_3_2').prop('disabled',false);
                     $('#form-control_3_3').prop('disabled',false);

                    }
                    else{
                     $('#form-control_3_1').prop('disabled',true);
                     $('#form-control_3_2').prop('disabled',true);
                     $('#form-control_3_3').prop('disabled',true);
                    }                });
            });

            $(function() {
                var option = $('#form-control_4_4').find(":selected").text();
                if(option=='Auto'){
                     $('#form-control_4_1').prop('disabled',true);
                     $('#form-control_4_2').prop('disabled',true);
                     $('#form-control_4_3').prop('disabled',true);

                }
                else{
                     $('#form-control_4_1').prop('disabled',false);
                     $('#form-control_4_2').prop('disabled',false);
                     $('#form-control_4_3').prop('disabled',false);
                }

            });

            $(function() {
                $("#form-control_4_4").change(function() {
                    var option = $('#form-control_4_4').find(":selected").text();
                    if(option=='Manual'){
                     $('#form-control_4_1').prop('disabled',false);
                     $('#form-control_4_2').prop('disabled',false);
                     $('#form-control_4_3').prop('disabled',false);

                    }
                    else{
                     $('#form-control_4_1').prop('disabled',true);
                     $('#form-control_4_2').prop('disabled',true);
                     $('#form-control_4_3').prop('disabled',true);
                    }                });
            });

            $(function() {
                var option = $('#form-control_5_4').find(":selected").text();
                if(option=='Auto'){
                     $('#form-control_5_1').prop('disabled',true);
                     $('#form-control_5_2').prop('disabled',true);
                     $('#form-control_5_3').prop('disabled',true);

                }
                else{
                     $('#form-control_5_1').prop('disabled',false);
                     $('#form-control_5_2').prop('disabled',false);
                     $('#form-control_5_3').prop('disabled',false);
                }

            });

            $(function() {
                $("#form-control_5_4").change(function() {
                    var option = $('#form-control_5_4').find(":selected").text();
                    if(option=='Manual'){
                     $('#form-control_5_1').prop('disabled',false);
                     $('#form-control_5_2').prop('disabled',false);
                     $('#form-control_5_3').prop('disabled',false);

                    }
                    else{
                     $('#form-control_5_1').prop('disabled',true);
                     $('#form-control_5_2').prop('disabled',true);
                     $('#form-control_5_3').prop('disabled',true);
                    }                });
            });

            $(function() {
                var option = $('#form-control_6_4').find(":selected").text();
                if(option=='Auto'){
                     $('#form-control_6_1').prop('disabled',true);
                     $('#form-control_6_2').prop('disabled',true);
                     $('#form-control_6_3').prop('disabled',true);

                }
                else{
                     $('#form-control_6_1').prop('disabled',false);
                     $('#form-control_6_2').prop('disabled',false);
                     $('#form-control_6_3').prop('disabled',false);
                }

            });

            $(function() {
                $("#form-control_6_4").change(function() {
                    var option = $('#form-control_6_4').find(":selected").text();
                    if(option=='Manual'){
                     $('#form-control_6_1').prop('disabled',false);
                     $('#form-control_6_2').prop('disabled',false);
                     $('#form-control_6_3').prop('disabled',false);

                    }
                    else{
                     $('#form-control_6_1').prop('disabled',true);
                     $('#form-control_6_2').prop('disabled',true);
                     $('#form-control_6_3').prop('disabled',true);
                    }                });
            });