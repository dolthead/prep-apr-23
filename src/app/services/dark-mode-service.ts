// dark mode service

let mode = 'auto';

function getMode() {
    const dlMode = localStorage.getItem('dark-light-mode');
    if (dlMode) {
      mode = dlMode;
    }
    updateMode(mode);
    return mode;
}

function updateMode(newMode: string) {
    mode = newMode;
    document.body.classList.remove('dark');
    document.body.classList.remove('light');
    if (mode !== 'auto') {
      document.body.classList.add(mode);
    }
    localStorage.setItem('dark-light-mode', mode);
  }

  export default {
    getMode,
    updateMode,
  };
