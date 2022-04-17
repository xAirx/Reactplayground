const rewire = require("rewire")
const store_context = rewire("../store-context")
const useStore = store_context.__get__("useStore")


beforeEach(() => {
    inst = new useStore()
    inst2 = new useStore()
})


// Describe the test
describe("useStore", () => {
    // Test the useStore function
    it("useStore.addToCart", () => {
        let inst2


        test("0", () => {
            inst2.addToCart()
        })

        expect(inst2.cartCount).toBe(1)
    },
        // Test the login function
        it("useStore.login", () => {
            let inst
            let inst2
            test("0", () => {
                let result = inst.login()
                expect(result).toBe("jack")
            })
        },
            // Test the logoit function
            it("useStore.logout", () => {
                let inst
                let inst2


                test("0", () => {
                    let result = inst.logout()
                    expect(result).toBe("")
                })
            },
                // Test the useUser function
                it("useStore.useUser", () => {
                    let inst
                    let inst2


                    test("0", () => {
                        let result = inst.useUser()
                        expect(result).toBe("")
                    }
                    )
                },
                    // Test the useCartCount function
                    it("useStore.useCartCount", () => {
                        let inst
                        let inst2


                        test("0", () => {
                            let result = inst.useCartCount()
                            expect(result).toBe(0)
                        }
                        )
                    })
                )
            )
        )
    )
})
