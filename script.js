const toggleBtn = document.getElementById('toggleAnim');
const animateBtn = document.getElementById('animateBtn');
const logo = document.getElementById('logo');

const animationEnabled = localStorage.getItem('animationEnabled') !== 'false';

function updateAnimationSetting(enabled) {
  localStorage.setItem('animationEnabled', enabled);
  toggleBtn.textContent = enabled ? 'Disable Animation' : 'Enable Animation';
}

updateAnimationSetting(animationEnabled);

toggleBtn.addEventListener('click', () => {
  const isEnabled = localStorage.getItem('animationEnabled') !== 'false';
  updateAnimationSetting(!isEnabled);
});

animateBtn.addEventListener('click', () => {
  const isEnabled = localStorage.getItem('animationEnabled') !== 'false';
  if (isEnabled) {
    logo.classList.remove('spin');
    void logo.offsetWidth;
    logo.classList.add('spin');
  } else {
    alert("Animation is disabled. Enable it to see the effect.");
  }
});
document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('themeColor');


    function storeThemePreference(theme) {
        try {
            localStorage.setItem('userTheme', theme);
            console.log(`Theme preference '${theme}' stored.`);
        } catch (e) {
            console.error('Failed to store theme in localStorage:', e);
        }
    }

    function retrieveThemePreference() {
        try {
            const theme = localStorage.getItem('userTheme');
            if (theme) {
                console.log(`Retrieved theme preference: '${theme}'.`);
            } else {
                console.log('No theme preference found in localStorage.');
            }
            return theme;
        } catch (e) {
            console.error('Failed to retrieve theme from localStorage:', e);
            return null;
        }
    }

    function applyTheme(theme) {
        document.body.classList.remove('theme-scarlet', 'aqua', 'lilac');

        if (theme && theme !== 'default') {
            document.body.classList.add(`theme-${theme}`);
            console.log(`Theme '${theme}' applied.`);
        } else {
            console.log('Default theme applied.');
        }
    }

    // Event listener for theme selector
    themeSelector.addEventListener('change', (event) => {
        const selectedTheme = event.target.value;
        storeThemePreference(selectedTheme);
        applyTheme(selectedTheme);
    });

    // On page load, retrieve and apply stored theme
    const savedTheme = retrieveThemePreference();
    if (savedTheme) {
        applyTheme(savedTheme);
        themeSelector.value = savedTheme;
    }
});


