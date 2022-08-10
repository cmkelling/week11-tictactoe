
    var player = X;
    var table = $('table');
    var messages = $('message');
    var turn = 1;
    displayNextPlayer(turn, player);

    //checks turn
    $('table').Click(function() {
        if(turn == 1) {
            $('.turn').text("Player X's turn");
            $(this).addClass('fa fa-check');
                turn = 2;
        } else {
            $('.turn').text("Play O's turn");
            $(this).addClass("fa fa-times")
            turn = 1;
        }
    })