let funds = 50;
var round = 0;

// the loop game
while (funds > 1 && funds < 100) {
  round++;
  console.log(`${round}`);

  console.log(`\tstarting funds: ${funds}`);
  const bets = {
      crown: 0
    , anchor: 0
    , heart: 0
    , spade : 0
    , diamond: 0
  };
    // place bets
    let totalBet = rand(1, funds);

    if (totalBet === 7) {
      totalBet = funds;
      bets.heart = totalBet;
    }
    else {
      let remaining = totalBet;
      do {
        let bet = rand(1, remaining);
        let face = randomFace();
        bets[face] = bets[face] + bet;
        remaining = remaining - bet;
      } while (remaining > 0);
    }
    funds = funds - totalBet;

    console.log('\tbets: ' +
    Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') +
    ` (total: ${totalBet} pence)`);

    // roll dice
    let hand = [];
    for(let roll=0; roll < 3; roll++){
      hand.push(randomFace());
    }
    console.log(`\thand: ${hand.join(', ')}`);

    // collect winnings
    let winnings = 0;
    for(let die=0; die < hand.length; die++){
      let face = hand[die];
      if (bets[face] > 0) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funs: ${funds}`);
// helper functions
// return a random intenger in the range [m, n](inclusive)
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}

// randomly returns a strings representing one of the six
// crown and anchor faces

function randomFace() {
  return ['crown','anchor','heart','spade','club','diamond'][rand(0,5)];
}
