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

     else if(option=='Program'){
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

        else if(option=='Program'){
         $('#form-control_1_1').prop('disabled',true);
         $('#form-control_1_2').prop('disabled',true);
         $('#form-control_1_3').prop('disabled',true);

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

     else if(option=='Program'){
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

        else if(option=='Program'){
         $('#form-control_2_1').prop('disabled',true);
         $('#form-control_2_2').prop('disabled',true);
         $('#form-control_2_3').prop('disabled',true);

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

    if(option=='Program'){
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

         else if(option=='Program'){
         $('#form-control_3_1').prop('disabled',true);
         $('#form-control_3_2').prop('disabled',true);
         $('#form-control_3_3').prop('disabled',true);

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

    else if(option=='Program'){
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

        else if(option=='Program'){
         $('#form-control_4_1').prop('disabled',true);
         $('#form-control_4_2').prop('disabled',true);
         $('#form-control_4_3').prop('disabled',true);

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

    else if(option=='Program'){
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

        else if(option=='Program'){
         $('#form-control_5_1').prop('disabled',true);
         $('#form-control_5_2').prop('disabled',true);
         $('#form-control_5_3').prop('disabled',true);

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

     else if(option=='Program'){
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

        else if(option=='Program'){
         $('#form-control_6_1').prop('disabled',true);
         $('#form-control_6_2').prop('disabled',true);
         $('#form-control_6_3').prop('disabled',true);

        }

        else{
         $('#form-control_6_1').prop('disabled',true);
         $('#form-control_6_2').prop('disabled',true);
         $('#form-control_6_3').prop('disabled',true);
        }                });
});


$("#button1").click(function(){
 $('#button1').removeClass('btn-danger');
 $('#button1').addClass('btn-success');
 $('#button2').removeClass('btn-default');
 $('#button2').addClass('btn-danger');

});

$("#button2").click(function(){
 $('#button2').removeClass('btn-danger');
 $('#button2').addClass('btn-success');
 $('#button3').removeClass('btn-default');
 $('#button3').addClass('btn-danger');

});

$("#button3").click(function(){
 $('#button3').removeClass('btn-danger');
 $('#button3').addClass('btn-success');
 $('#button4').removeClass('btn-default');
 $('#button4').addClass('btn-danger');

});

$("#button4").click(function(){
 $('#button4').removeClass('btn-danger');
 $('#button4').removeClass('btn-warning');
 $('#button4').addClass('btn-success');
 $('#button5').removeClass('btn-default');
 $('#button5').addClass('btn-danger');

});

$("#button5").click(function(){
 $('#button5').removeClass('btn-danger');
 $('#button5').removeClass('btn-warning');
 $('#button5').addClass('btn-success');
 $('#button6').removeClass('btn-default');
 $('#button6').addClass('btn-danger');
 document.getElementById("pilot-pue").innerHTML = '<i><b><u>PUE Reduction</u></b>:&nbsp;'+ '11%'+ '</i>';
 document.getElementById("pilot-overheating").innerHTML = '<i><b><u>Over-heating</u></b>:&nbsp;'+ 'No'+ '</i>';
 document.getElementById("pilot-ITsaving").innerHTML = '<i><b><u>IT Saving</u></b>:&nbsp;'+ 'k$ 40'+ '</i>';
 document.getElementById("pilot-coolingsaving").innerHTML = '<i><b><u>Cooling Saving</u></b>:&nbsp;'+ 'k$ 435'+ '</i>';


});

$("#button6").click(function(){
 $('#button6').removeClass('btn-danger');
 $('#button6').addClass('btn-success');
 $('#button7').removeClass('btn-default');
 $('#button7').addClass('btn-danger');

});
$("#button7").click(function(){
 $('#button7').removeClass('btn-danger');
 $('#button7').addClass('btn-success');
 $('#button8').removeClass('btn-primary');
 $('#button8').addClass('btn-danger');

 document.getElementById("op-pue").innerHTML = '<i><b><u>Average PUE Reduction</u></b>:&nbsp;'+ '11%'+ '</i>';
 document.getElementById("op-ITsaving").innerHTML = '<i><b><u>Accum. IT Saving</u></b>:&nbsp;'+ 'k$ 39'+ '</i>';
 document.getElementById("op-coolingsaving").innerHTML = '<i><b><u>Accum. Cooling Saving</u></b>:&nbsp;'+ 'k$ 433'+ '</i>';
 document.getElementById("op-total").innerHTML = '<i><b><u>Accum. Total Saving</u></b>:&nbsp;'+ 'k$ 472'+ '</i>';

});
 $("#button8").click(function(){
 $('#button8').removeClass('btn-danger');
 $('#button8').addClass('btn-success');

});



