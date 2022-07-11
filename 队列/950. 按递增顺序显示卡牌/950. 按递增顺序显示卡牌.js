/**
 * @param {number[]} deck
 * @return {number[]}
 */
 var deckRevealedIncreasing = function(deck) {
  deck.sort((a,b) => a-b);
  let res = deck.slice().fill(0);
  res[0] = deck[0];
  let c = 0;
  for (let i=1; i<deck.length-1; i++) {
      let found = 0;
      while (true) {
          if (res[c] === 0) {
              found += 1;
              if (found === 2) {
                  res[c] = deck[i];
                  break;
              }
          }
          c = (c+1) % deck.length;
      }
  }
  for (let i=0; i< deck.length; i++) {
      if(res[i] === 0) res[i] = deck[deck.length-1];
  }
  return res;


};