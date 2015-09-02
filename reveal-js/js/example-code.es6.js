/* global Reveal, hljs */

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
                const strippedSource = source.split('// --SNIP--\n')[0];
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
        System.import(`js/${this.name}.js`).then(this.renderResult.bind(this));
    }

    renderResult(result) {
        const codeEl = this.node.querySelector('code');

        codeEl.textContent = Object.keys(result).reduce((acc, key) => {
            return acc.concat(`// ${key} = ${result[key]}`);
        }, []).concat('', codeEl.textContent).join('\n');

        hljs.highlightBlock(codeEl);
    }

    static createExamples() {
        const exampleNodes = document.querySelectorAll('[data-example-code]');

        for (const exampleNode of [...exampleNodes]) { // hack for chrome not iterating over NodeList
            new ExampleCode(exampleNode).render();
        }
    }
}

Reveal.addEventListener('ready', ExampleCode.createExamples);
