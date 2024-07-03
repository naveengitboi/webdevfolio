  const TextEffect= (e) => {
    const originalValue = e.target.dataset.initial;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lettersArray = e.target.innerText.split("");
    let iterations = 0;
    const intervalId = setInterval(() => {
      e.target.innerText = lettersArray
        .map((item, index) => {
          if (index < iterations) {
            return originalValue[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      if (iterations >= originalValue.length) {
        clearInterval(intervalId);
      }
      iterations += 1;
    }, 100);
  };


  export default TextEffect
