const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init() {
  // Write your JavaScript code inside the init() function

  function createSpy(){
    console.log('spy created')
  }

  document.addEventListener('keydown', (e) => {
    const key = event.key;
    if(key == code[index]){
      index++;
      if(index == code.length){
        createSpy();
        window.alert("spy created");
        index = 0;
      }
    }
    else {
      window.alert('a')
      index = 0;
    }
  });

  function onKeyDownHandler(e){
    const key = parseInt(e.detail || e.which || e.detail || e.location);

    if (key == code[index]){
      index++;
      if(index == code.length){
        window.alert("Hurray!");
        createSpy();
        index = 0;
      }
    }
    else{
      index = 0;
    }
  }
}