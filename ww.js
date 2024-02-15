const removeCache = () => {
  const currentLocationHref = window.location.href;
  const targetEnv = ['e5test', 'e5test2', 'ehospital2'];
  const targetHos = ['ccscrbyyadmin', 'syeswyyadmin', 'sddxkqyyadmin'];
  const hid = sessionStorage.getItem('hospitalID') || sessionStorage.getItem('hospital_id') || localStorage.getItem('hospitalID') || localStorage.getItem('hospital_id');
  const isTarget = targetEnv.some(env => currentLocationHref.includes(env)) && targetHos.includes(hid);
  if (isTarget) {
    localStorage.clear();
    sessionStorage.clear();
  }
};

document.querySelector('body').addEventListener('click', removeCache);
