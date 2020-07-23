$('button').click(function(evt){    
    evt.preventDefault();    
    let y= $('#textBox').val();
    if (y!=""){
        $('ul').append(`<li> ${y}</li>`);
    }
    let a= "Cascading Style Sheets (CSS)";
    let b= "Hypertext Markup Language (HTML)";

    let checkAExist=$('li').filter(function(){
        return $(this).text()== a
    })

    let checkBExist=$('li').filter(function(){
        return $(this).text()== b
    })

    if ($('#cssBox').is(':checked') && !checkAExist.length){
        $('ul').append(`<li>${a}</li>`);
    }
    if ($('#htmlBox').is(':checked') && !checkAExist.length){
        $('ul').append(`<li>${b}</li>`);
    }
    $('form').trigger("reset");
    $('li').click(function(evt2){
        //alert('You are removing ${$(this).text()}');
        $(this).remove();
    })
})

