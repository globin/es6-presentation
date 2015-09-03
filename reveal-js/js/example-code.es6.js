/* global hljs */
import Reveal from 'reveal.js/js/reveal.js';

class ExampleCode {
    constructor(node) {
        this.node = node;
    }

    get name() {
        return this.node.getAttribute('data-example-code');
    }

    render() {
        this.renderSource().then(this.renderRunButton.bind(this));
    }

    renderSource() {
        return new Promise(resolve => {
            fetch(`js/${this.name}.es6.js`).then(response => response.text()).then(source => {
                const strippedSource = source.split('// --SNIP--\n')[0].replace('/* eslint-disable */\n', '');
                const preEl = document.createElement('pre');
                const codeEl = document.createElement('code');
                codeEl.textContent = strippedSource;

                this.node.appendChild(preEl);
                preEl.appendChild(codeEl);

                hljs.highlightBlock(codeEl);

                resolve();
            });
        });
    }

    renderRunButton() {
        const button = document.createElement('button');
        button.addEventListener('click', this.runExampleCode.bind(this));
        button.textContent = 'Run Code';
        this.node.appendChild(button);
    }

    runExampleCode() {
        System.import(`js/${this.name}.js`).then(
            this.renderResult.bind(this, false),
            this.renderResult.bind(this, true)
        );
    }

    renderResult(errored, result) {
        const codeEl = this.node.querySelector('code');

        codeEl.textContent = [].concat(
            codeEl.textContent,
            errored
                ? result
                : Object.keys(result).reduce((acc, key) => {
                    return acc.concat(`${key} = ${JSON.stringify(result[key], null, '    ')}`);
                }, [])
        ).join('\n');

        hljs.highlightBlock(codeEl);
        codeEl.scrollTop = codeEl.clientHeight;

        this.node.querySelector('button').disabled = true;
    }

    static createExamples() {
        const exampleNodes = document.querySelectorAll('[data-example-code]');

        for (const exampleNode of exampleNodes) {
            new ExampleCode(exampleNode).render();
        }
    }
}

Reveal.addEventListener('ready', ExampleCode.createExamples);
