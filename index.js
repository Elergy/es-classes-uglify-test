const TestClass = require('./test-class');
const testObject = require('./test-object');

const objectOfTestClass = new TestClass();

testObject.testMethod();
objectOfTestClass.testMethod();
