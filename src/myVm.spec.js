import * as vm from './myVm';

test('Returns Hello World', () => {
  expect(vm.myVm().helloWorld()).toBe('Hello World');
});
