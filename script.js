const wakeLockCheckbox = document.querySelector('#wakeLockCheckbox');

  const requestWakeLock = async () => {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', (e) => {
        console.log(e);
        wakeLockCheckbox.checked = false;
      
        console.log('Wake Lock was released');                    
      });
      wakeLockCheckbox.checked = true;
      console.log('Wake Lock is active');      
    } catch (e) {      
      wakeLockCheckbox.checked = false;
      
      console.error(`${e.name}, ${e.message}`);
    } 
  };
  
  wakeLockCheckbox.addEventListener('change', () => {
    console.log('changed')
    if (wakeLockCheckbox.checked) {
      requestWakeLock();
    } else {
      wakeLock.release();
      wakeLock = null;
    }
  });