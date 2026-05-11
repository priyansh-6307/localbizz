const fs = require('fs');
const { JSDOM } = require('jsdom');

const htmlContent = fs.readFileSync('../../www.museumofmoney.com/index.html', 'utf8');

const dom = new JSDOM(htmlContent);
const document = dom.window.document;

const scripts = document.querySelectorAll('script:not([src])');

let allScriptContent = '';

scripts.forEach(script => {
    let content = script.textContent;
    // Don't include GTM or Webflow config
    if (content.includes('dataLayer') || content.includes('__WEBFLOW_CURRENCY_SETTINGS')) return;

    allScriptContent += content + '\n\n';
});

// We need to replace DOMContentLoaded with a function
allScriptContent = `
window.initMuseumAnimations = function() {
    ${allScriptContent.replace(/document\.addEventListener\(['"]DOMContentLoaded['"],\s*function\s*\(\)\s*\{/g, '(() => {').replace(/document\.addEventListener\(['"]DOMContentLoaded['"],\s*\(\)\s*=>\s*\{/g, '(() => {')}
};
`;

fs.writeFileSync('../public/museum-animations.js', allScriptContent);
console.log('Extracted animations to public/museum-animations.js');
