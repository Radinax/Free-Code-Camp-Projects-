$(document).ready(function(){
    let aiIs, humanPlayerIs, aiMovement, playXmode, playOmode, turnCount=0;
    let board=[
        ['','',''],
        ['','',''],
        ['','','']
    ];
    function hide(c){
        document.getElementById(c).style.display = "none";
    }
    function show(c){
        document.getElementById(c).style.display = "block";
    }
    function initialStatus(){
        hide('playX');
        hide('playO');
        hide('reset');
        disableCell('rows');
    }
    function disableCell(c){
        if(document.getElementsByClassName(c).length != 0){
            // It's a class
            let elems = document.getElementsByClassName(c);
            for(let i = 0; i < elems.length; i++) {
                elems[i].disabled = true;
            }
        }
        else if (document.getElementById(c) != null){
            // It's an id
            document.getElementById(c).disabled = true;
        }
        
    }
    function enableCell(c){
        if(document.getElementsByClassName(c).length != 0){
            // It's a class
            const elems = document.getElementsByClassName(c);
            for(let i = 0; i < elems.length; i++) {
                elems[i].disabled = false;
            }
        }
        else if (document.getElementById(c) != null){
            // It's an id
            document.getElementById(c).disabled = false;
        }
    }
    function onePlayerMode(){
        //Getting the ID's and give the buttons some functionality.
        let onePlayerId = document.getElementById('one-player');
        onePlayerId.addEventListener('click', function(){
            show('playX');
            show('playO');
            document.getElementById('gameScore').innerHTML = 'Select which player you want to be.';
        });
        let playerXId = document.getElementById('playX');
        playerXId.addEventListener('click', function(){
            hide('playO');
            hide('playX');
            hide('one-player');
            show('reset');
            disableCell('playX');
            enableCell('rows');
            let youArePlayerX = document.getElementById('gameScore');
            youArePlayerX.innerHTML = 'Its your turn!';
            aiIs = 'O';
            humanPlayerIs = 'X';
        });
        let playerOId = document.getElementById('playO');
        playerOId.addEventListener('click', function(){
            hide('playX');
            hide('playO');
            hide('one-player');
            disableCell('playO');
            let youArePlayerO = document.getElementById('gameScore');
            youArePlayerO.innerHTML = 'Ai is thinking..';
            aiIs = 'X';
            humanPlayerIs = 'O';
            aiMovement = aiMove();
            board[aiMovement.i][aiMovement.j]=aiIs;
            let a = document.getElementById(''+[aiMovement.i]+[aiMovement.j]);
            setTimeout(()=>{
                a.innerHTML = aiIs;
                document.getElementById('gameScore').innerHTML = 'Its your turn!';
                turnCount++;
                enableCell('rows');
                disableCell(''+[aiMovement.i]+[aiMovement.j]);
            }, 1000);
        });
        let cellsArray = document.getElementsByClassName('rows');
        winningConditionsCheck();
        //Checks every spot to see which one was clicked and goes on from there.
        for(let i = 0; i < cellsArray.length; i++){
            //enableCell('rows');
            cellsArray[i].onclick = function(){
                turnCount++;
                //Checking if the game ended before doing anything else.
                winningConditionsCheck();
                //disableCell('rows');
                document.getElementById('gameScore').innerHTML = 'Ai is thinking..';
                const cellId = this.id;
                this.innerHTML = humanPlayerIs;
                disableCell(cellId);
                //Updates the board variable.
                board.map(c=> { 
                    if (c = cellId) {
                        const index1=cellId.charAt(0);
                        const index2=cellId.charAt(1);
                        board[index1][index2]= humanPlayerIs;        
                    }
                });
                //The function gives us an object with the index of the best move.
                aiMovement = aiMove();
                board[aiMovement.i][aiMovement.j] = aiIs;
                let a = document.getElementById(''+ [aiMovement.i] + [aiMovement.j] );
                disableCell('' + [aiMovement.i] + [aiMovement.j] );
                setTimeout(() => {
                    a.innerHTML = aiIs;
                    turnCount++;
                    winningConditionsCheck();
                    document.getElementById('gameScore').innerHTML = 'Its your turn!';
                }, 1000);
            };
        }
    }
    function winningConditionsCheck(){
        //Checks if the AI won or not.
        if ( winCheck(board,aiIs) ) {
            let scoreLose = document.getElementById('gameScore');
            setTimeout(() => {
                scoreLose.innerHTML = 'YOU LOSE!';
                setTimeout(()=>
                    reset()
                , 1500);
            }, 900);
            disableCell('rows');
        }else if (turnCount === 9){
            let scoreDraw = document.getElementById('gameScore');
            setTimeout(() => {
                scoreDraw.innerHTML = 'Draw...';
                setTimeout(()=>
                    reset()
                , 1500);
            }, 900);
            disableCell('rows');
        }
    }
    function winCheck(arr,player){
        //Checks player vs AI winning scenarios
        if (
            (arr[0][0] == player && arr[0][1] == player && arr[0][2] == player) ||
            (arr[1][0] == player && arr[1][1] == player && arr[1][2] == player) ||
            (arr[2][0] == player && arr[2][1] == player && arr[2][2] == player) ||
            (arr[0][0] == player && arr[1][0] == player && arr[2][0] == player) ||
            (arr[0][1] == player && arr[1][1] == player && arr[2][1] == player) ||
            (arr[0][2] == player && arr[1][2] == player && arr[2][2] == player) ||
            (arr[0][0] == player && arr[1][1] == player && arr[2][2] == player) ||
            (arr[0][2] == player && arr[1][1] == player && arr[2][0] == player)
            ){
                return true;
            }else{
                return false;
            }
    }
    function winningMove(grid) {
        //Used with the AI to check a winning spot
        // Horizontal
        for (let i = 0; i < 3; i++) {
            if (grid[i][0] !== '' &&
                grid[i][0] === grid[i][1] &&
                grid[i][0] === grid[i][2]) {
                    return grid[i][0];
                }
        }
        // Vertical
        for (let j = 0; j < 3; j++) {
            if (grid[0][j] !== '' &&
                grid[0][j] === grid[1][j] &&
                grid[0][j] === grid[2][j]) {
                return grid[0][j];
            }
        }
        // Diagonal - top left
        if (grid[0][0] !== '' &&
            grid[0][0] === grid[1][1] &&
            grid[0][0] === grid[2][2]) {
            return grid[0][0];
        }
        // Diagonal - bottom left
        if (grid[2][0] !== '' &&
            grid[2][0] === grid[1][1] &&
            grid[2][0] === grid[0][2]) {
            return grid[2][0];
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (grid[i][j] === '') {
                    return false;
                }
            }
        }
    
        return null;
    }
    function minimax(arr,depth,player){
        //The AI using a recursive algorithm called Minimax
        //Creating a perfect copy.
        function copyBoard(boardArr){
            return [
                copyRow(boardArr[0]),
                copyRow(boardArr[1]),
                copyRow(boardArr[2])
            ];
        }
        function copyRow(row){
            return [row[0],row[1],row[2]];
        }
        var gameState = winningMove(arr);
        if(gameState == false){
            let moves=[];
            for(let i=0; i<3; i++){
                for(let j=0; j<3; j++){
                    //Using the perfect copy to check hypothetical scenarios.
                    let copyOfArr = copyBoard(arr);
                    if(copyOfArr[i][j] !== '') continue;
                    copyOfArr[i][j] = player;
                    //Applying the recursive function.
                    let score = minimax(copyOfArr, depth + 1, ((player === humanPlayerIs) ? aiIs : humanPlayerIs));
                    moves.push({
                        score:score,
                        index:{
                            i:i,
                            j:j
                        }
                    });
                }
            }
            //Checking the best moves that came from the resulting object "moves"
            if (player === aiIs) {
                let max = moves.reduce(function(a, b) { return a.score >= b.score ? a : b }, {});
                if (depth === 0) {
                    return max.index;
                } else {
                    return max.score;
                }
            } else {
                let min = moves.reduce(function(a, b) { return a.score <= b.score ? a : b }, {});
                if (depth === 0) {
                    return min.index;
                } else {
                    return min.score;
                }
            }
        } else if (gameState === null) {
            return 0;
        }else if (gameState === humanPlayerIs) {
            return depth-10;
        }else if(gameState === aiIs){
            return 10-depth;
        }
    }
    function aiMove(){
        return minimax(board,0,aiIs);
    }
    function resetButton(){
        let resetButton = document.getElementById('reset');
        resetButton.addEventListener('click', reset);
    }
    function reset(){
        initialStatus();
        board=[
            ['','',''],
            ['','',''],
            ['','','']
        ];
        let cellsArray = document.getElementsByClassName('rows');
        for(let i = 0; i < cellsArray.length; i++){
            cellsArray[i].innerHTML = '';
        }
        show('one-player');
        enableCell('playX');
        enableCell('playO');
        document.getElementById('gameScore').innerHTML = 'Press the start button to play again!';
        turnCount = 0;
        aiIs = null;
        humanPlayerIs = null;
    }
    function workFlow(){
        initialStatus();
        onePlayerMode();
        resetButton();
    }
    window.onload = workFlow();
});