$(document).ready(function(){
        
    $('#carrossel').slick({
        prevArrow: false,
        nextArrow: false,
        dots: false,
        autoplay: true,
        speed: 300,
        centerMode: true,
        variableWidth: true
    });
    $('.options').click(function(){
        $('nav').slideToggle();
    })
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    
    $('.produtos button').click(function(){
        const destino = $('#contato');
        let nomeVeiculo = $(this).parent().find('h3').text();
        
        $('#veiculo').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            veiculo:{
                required: true
            },
        },
        messages:{
            nome: 'Digite seu nome completo'
        },
        submitHandler: function(nomeVeiculo){
            alert(`Seu BMW ${nomeVeiculo} está à sua espera !`);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Há ${camposIncorretos} campos incorretos !`);
            }
        }
    })
})
