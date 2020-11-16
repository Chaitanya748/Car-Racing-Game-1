class Game {
    constructor() {

    }
    getState() {
        var dvref = database.ref('gamestate')
        dvref.on('value', function (data) {
            gamestate = data.val () ;
        } )
    }
    updateState (state) {
        database.ref('/').update({
         gamestate:state
        });
    }
    start() {
        if (gamestate===0) {
         player = new Player();
         var playerCountref = await database.ref ('playercount').once("value");
         if (playerCountref.exists()) {
            playercount = playerCountref.val();
            player.getCount();
         }
        }
        form = new Form ();
        form.display();
    }
    play() {

    }
    end() {

    }
}