import { Fragment } from "react";
import {
    useLogin,
    useLogout,
    useAddToCart,
    useUser,
    useCartCount,
    StoreContextProvider,
} from "./store-context";

const LoginSection = () => {
    const login = useLogin();
    const logout = useLogout();

    return (
        <Fragment>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </Fragment>
    );
};

const UserSection = () => {
    const user = useUser();
    return <Fragment>User: {user}</Fragment>;
};

const AddToCartSection = () => {
    const addToCart = useAddToCart();
    return (
        <Fragment>
            <button onClick={addToCart}>Add To Cart</button>
        </Fragment>
    );
};

const CartCountSection = () => {
    const cartCount = useCartCount();
    return <Fragment>Cart count: {cartCount}</Fragment>;
};

function ContextPage () {
    return (
        <Fragment>
            <LoginSection />
            <UserSection />
            <AddToCartSection />
            <CartCountSection />
        </Fragment>
    );
}

export default function ContextPageWrapper () {
    return (
        <StoreContextProvider>
            <ContextPage />
        </StoreContextProvider>
    );
}