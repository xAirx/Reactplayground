const rewire = require("rewire")
const Example = rewire("../Example")
const useMutateTodo = Example.__get__("useMutateTodo")
// @ponicode
describe("useMutateTodo", () => {
    test("0", () => {
        let result = useMutateTodo()
        expect(result).toMatchSnapshot()
    })
})
