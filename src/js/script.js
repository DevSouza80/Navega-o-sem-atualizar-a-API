$(function(){
    verificarCliqueMenu();

    function verificarCliqueMenu() {
        $('a').click(function(){


            var href = $(this).attr('href');

            $.ajax({
                'beforeSend': function() {
                    console.log("Estamos chamando o beforeSend!");
                },
                'url':href,
                'error': function(jqXHR, textStatus, errorThrown) {
                    if(jqXHR.statusText == 'Not Found') {
                        console.log("Página não encontrada.");
                    }
                },
                'success': function(data) {
                    $(data).appendTo('#container').fadeIn();
                }
            })

            return false;
        })
    }
});