import * as ko from 'knockout';

export { myVm };

function myVm() {
  const self = this;

  self.helloWorld = function () { return 'Hello World'; };

  return self;
}
