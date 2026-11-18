import {test} from 'node:test';import assert from 'node:assert/strict';import {validateAnswer,toggleTopic,summary} from '../src/flow.js';
test('blank text does not silently advance',()=>assert.ok(validateAnswer('   ',400)));
test('configured length limit enforced at the boundary',()=>{assert.equal(validateAnswer('a'.repeat(200),200),null);assert.ok(validateAnswer('a'.repeat(201),200))});
test('topic selection is reversible without duplicates',()=>{assert.deepEqual(toggleTopic(toggleTopic([],'Stress'),'Stress'),[])});
test('context is never inferred from the note',()=>assert.deepEqual(summary('Travel caused my delay',[]).topics,[]));
test('summary copies the selection instead of sharing mutable state',()=>{const input:('Stress')[]=['Stress'];const result=summary(' a note ',input);input.pop();assert.deepEqual(result.topics,['Stress']);assert.equal(result.note,'a note')});
