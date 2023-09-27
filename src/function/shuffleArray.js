export const  shuffleNTimes= (n,array)=> {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(n/10 * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }



  