/* Stylesheets */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'codemirror/lib/codemirror.css';
import './stylesheets/style.scss';

/* scripts */
import CodeMirror from 'codemirror/lib/codemirror.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';

/* library declare */
import esBuilder from '../src';
window.esBuilder = esBuilder;


/* declare */
const inputTextArea = document.getElementById('input');
const outputTextArea = document.getElementById('output');
const inputEditor = CodeMirror.fromTextArea(inputTextArea, {
    lineNumbers: true
});

const outputEditor = CodeMirror.fromTextArea(outputTextArea, {
    lineNumbers: true,
    readOnly: true,
});

/* methods */
const onChange = () => {
    const code = inputEditor.getValue().trim();
    try {
        const newOutput = eval(code);
        const json = JSON.stringify(newOutput, null, 4);
        outputEditor.setValue(json);
    } catch (err) {
        outputEditor.setValue(err.toString());
        console.error('invalid input', err);
    }
};

/* binding */
inputEditor.on('change', onChange);

/* run */
inputEditor.setValue(`esBuilder()
    .option()
    .indices(['20170701', '20170702'], true, true)
    .type('employee')
    .body()
    .from()
    .size(10)
    .query()
    .bool()
    .boolMust({
        "term": { "name": "kimchy" }
    })
    .boolNot({
        "term": { "name": "bob" }
    })
    .boolShould({
        "term": { "department": "RD" }
    })
    .boolFilter({
        "term": { "name": "john" }
    })
    .aggs()
    .appendAggs('by_gender', 'terms', {
        "field": "gender"
    })
    .subAggs()
    .forkAggs()
    .appendAggs('by_city', 'terms', {
        "field": "city"
    })
    .subAggs()
    .appendAggs('all_name', 'terms', {
        "field": "name"
    })
    .mergeAggs()
    .appendAggs('by_language', 'terms', {
        "field": "language"
    })
    .subAggs()
    .appendAggs('all_name', 'terms', {
        "field": "name"
    })
    .build();`);

