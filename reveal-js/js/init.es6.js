import Reveal from 'reveal.js/js/reveal.js';
import hljs from 'highlightjs/highlight.pack.min.js';

window.Reveal = Reveal;

Reveal.addEventListener('ready', () => {
    const hljsNodes = document.querySelectorAll('pre code');

    for (const node of hljsNodes) {
        hljs.highlightBlock(node);
    }
});

Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [
        {
            src: 'lib/js/classList.js',
            condition: function () {
                return !document.body.classList;
            }
        },
        {
            src: 'plugin/markdown/marked.js',
            condition: function () {
                return !!document.querySelector('[data-markdown]');
            }
        },
        {
            src: 'plugin/markdown/markdown.js',
            condition: function () {
                return !!document.querySelector('[data-markdown]');
            }
        },
        {
            src: 'plugin/zoom-js/zoom.js',
            async: true
        },
        {
            src: 'plugin/notes/notes.js',
            async: true
        }
    ]
});

window.addEventListener('mousedown', (e) => {
    const runButton = Reveal.getCurrentSlide().querySelector('button:not([disabled])');
    if (runButton && e.which === 2) {
        runButton.click();

        return;
    }

    switch (e.which) {
        case 2:
            Reveal.next();
            break;
        case 3:
            Reveal.prev();
            break;
        default:
            break;
    }
});

window.addEventListener('contextmenu', (evt) => {
    evt.preventDefault();
});
