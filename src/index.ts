import MathExt from './math';
import Accumulator from './registers/Accumulator';
import ProgramCounter from './registers/ProgramCounter';
import StackPointer from './registers/StackPointer';
import StatusRegister from './registers/StatusRegister';
import Xindex from './registers/Xindex';
import Yindex from './registers/Yindex';

Accumulator.populate();
ProgramCounter.populate();
StackPointer.populate();
StatusRegister.populate();
Xindex.populate();
Yindex.populate();

console.log('Accumulator', Accumulator.get());
console.log('ProgramCounter', ProgramCounter.get());
console.log('StackPointer', StackPointer.get());
console.log('StatusRegister', StatusRegister.get());
console.log('Xindex', Xindex.get());
console.log('Yindex', Yindex.get());
