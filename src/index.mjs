import "./styles.css";

const themes={
  light:{
    '--bg-color': 'white',
    '--text-color': 'black'
  },
  dark:{
    '--bg-color': 'black',
    '--text-color': 'white'
  }
};

const themeToggle=document.getElementById('theme-toggle');
let currentTheme=localStorage.getItem('theme') || 'light';
applyTheme(currentTheme);


themeToggle.addEventListener('click', function(){
  if(currentTheme==='light'){
    currentTheme='dark';
themeToggle.innerText='Dark';
themeToggle.style.backgroundColor='green';
themeToggle.style.color='white';
  } else{
    currentTheme='light';
    themeToggle.innerText='Light';
    themeToggle.style.backgroundColor='yellow';
    themeToggle.style.color='black';
  };
  localStorage.setItem('theme', currentTheme);
  applyTheme(currentTheme);
})


function applyTheme(theme){
  const themeAttributes=themes[theme];
Object.keys(themeAttributes).forEach(key=>{
  document.documentElement.style.setProperty(key,themeAttributes[key]);
})
};



