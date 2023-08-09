function add(a, b) {
  return a + b;
}
function runTestsWithParams(a,b,expectedResult,testName) {
  test(testName, () => {
    expect(add(a, b)).toBe(expectedResult);
  });
}
describe('testRunner',()=>{
  runTestsWithParams(1,2,3,"add 1 + 2");
  runTestsWithParams(3,4,7,"add 3 + 4");
  runTestsWithParams(1,1,2,"add 1 + 1");
})
