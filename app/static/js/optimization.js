/**
 * Created by zhou0200 on 4/5/17.
 */

//optimization control parameters setting
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