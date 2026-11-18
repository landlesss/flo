import {test} from 'node:test';import assert from 'node:assert/strict';import {searchArticles} from '../src/library.js';
test('Russian topic finds the same endometriosis articles',()=>assert.deepEqual(searchArticles('эндометриоз').map(a=>a.id),searchArticles('endometriosis').map(a=>a.id)));
test('case and whitespace normalized',()=>assert.deepEqual(searchArticles('  ENDOMETRIOSIS  '),searchArticles('endometriosis')));
test('topic and filter apply together',()=>assert.deepEqual(searchArticles('endometriosis','Diagnosis').map(a=>a.id),['diagnosis']));
test('multi-word query requires all words',()=>assert.deepEqual(searchArticles('late period').map(a=>a.id),['late']));
test('unmatched input returns empty and clearing restores library',()=>{assert.equal(searchArticles('xyz123').length,0);assert.equal(searchArticles('').length,6)});
