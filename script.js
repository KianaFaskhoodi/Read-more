document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    const moreBtn = document.getElementById('moreBtn');
    const words = textElement.innerHTML.split(' ');
  
    if (words.length > 50) {
      textElement.innerHTML = `${words.slice(0, 50).join(' ')}<span id="hiddenText" class="hidden-text"> ${words.slice(50).join(' ')}</span>`;
      moreBtn.style.display = 'inline';
  
      moreBtn.addEventListener('click', () => {
        document.getElementById('hiddenText').style.display = 'inline';
        moreBtn.style.display = 'none';
      });
    }
  });