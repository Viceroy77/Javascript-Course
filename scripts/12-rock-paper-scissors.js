let score = JSON.parse(localStorage.getItem('score'))
|| {
        wins: 0,
        losses: 0,
        ties: 0
}; 

updateScoreElement();
/*
if (!score) {
    score ={
        wins: 0,
        losses: 0,
        ties: 0
    };
}
    */
 
    let  isAutoPlaying = false;
    let intervalId;

    //const autoPlay = () => {

    //};

   
    function autoPlay() {
        if (!isAutoPlaying) {
           intervalId = setInterval (() => {
                const playerMove = pickComputerMove();
                playGame(playerMove);
            }, 1000);
            isAutoPlaying = true;
        } else {
            clearInterval(intervalId);
            isAutoPlaying = false;
        }
        
    }

    document.querySelector('.js-autoplay')
    .addEventListener('click', () => {autoPlay()})

    document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('rock')});

        document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('paper')});

        document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('scissors')});


        document.body.addEventListener('keydown', (event) => {
            if (event.key ==='r') {
        playGame('rock')
            }else if (event.key === 'p') {
                playGame('paper');
            }
            else if (event.key ==='s') {
                playGame('scissors')
            }
        });

    function playGame(playerMove) {
        const computerMove = pickComputerMove(); 
       


           let result = '';

            if (playerMove ==='Scissors') {
                    if (computerMove === 'Rock') { result = 'You lose.';}
                    else if (computerMove === 'Paper')  {
                    result = 'You win.';}
                    else if (computerMove ==='Scissors') {
                        result = 'Tie.';
                    }

                    
            } else if (playerMove === 'Paper') {
                if (computerMove === 'Rock') { result = 'You win.';}
                else if (computerMove === 'Paper')  {
                result = 'Tie.';}
                else if (computerMove ==='Scissors') {
                    result = 'You lose.';
                }
            }
                
                else if (playerMove === 'Rock') {
                    if (computerMove === 'Rock') { result = 'Tie.';}
            else if (computerMove === 'Paper')  {
            result = 'You lose.';}
            else if (computerMove ==='Scissors') {
                result = 'You win.';
            }
            
            


                }

                if (result === 'You win.') {
                    score.wins += 1;
                } else if (result=== 'You lose.') {
                    score.losses += 1;
                } else if (result === 'Tie.') {
                    score.ties += 1; 
                }

                localStorage.setItem('score', JSON.stringify (score));

                updateScoreElement();

              document.querySelector('.js-result').innerHTML = result;

                    document.querySelector('.js-moves').innerHTML = ` You 
                <img src="Images/${playerMove}-emoji.png" alt="" class="move-icon">
                <img src="Images/${computerMove}-emoji.png" alt="" class="move-icon"> 
                Computer`
                    ;                 
                        };


            function updateScoreElement() {
                scoreElement =  () => {`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`}

                document.querySelector('.js-reset-score')
                            .addEventListener ('click',  () => {
                                scoreElement()
                            } ) ;
            }

            
            
            
            function pickComputerMove(){
                randomNumber = Math.random();

            computerMove = '';
            if (randomNumber >=0 && randomNumber < 1/3) 
            { computerMove = 'Rock';}  else if (randomNumber >= 1/3 && randomNumber < 2/3 ) 
            { computerMove = 'Paper';} else if (randomNumber >= 2 / 3 && randomNumber < 1) 
            { computerMove ='Scissors';} 

                return computerMove; 

            }