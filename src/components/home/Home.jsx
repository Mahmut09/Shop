import Nav from "../nav/Nav";
import Header from "../header/Header";
import Container from "../container/Container";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const initialState = {
        cartIsOpen: false,
        containerIsOpen: false,
        loginIsOpen: false,
        aboutIsOpen: false,
        contactsIsOpen: false,
        paymentIsOpen: false,
        productDetailIsOpen: false,
    };

    const URL = useSelector(state => state.URL);
    const accessToken = useSelector(state => state.accessToken);
    const dispatch = useDispatch();

    const [state, setState] = useState(initialState);
    const [productCard, setProductCard] = useState(initialState)

    useEffect(() => {
        setState({ ...initialState, containerIsOpen: true });
    }, []);

    useEffect(() => {
        fetch(URL + "auth/me", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then(res => {
                if (res.status === 401) throw new Error("Unauthorized");
            })
            .catch(error => {
                dispatch({ type: "SET_ACCESS_TOKEN", payload: "" });
                dispatch({ type: "SET_USER_NAME", payload: "" });
                console.log("Не авторизован:", error);
            });
    }, [state]);


    const handleSetAbout = () => {
        setState({ ...initialState, aboutIsOpen: true });
    };

    const handleSetLogin = () => {
        setState({ ...initialState, loginIsOpen: true });
    };

    const handleSetCart = () => {
        setState({ ...initialState, cartIsOpen: true });
    };

    const handleSetContainer = () => {
        dispatch({ type: "SET_CATEGORY_NAME", payload: "" });
        setState({ ...initialState, containerIsOpen: true });
    };

    const handleSetContacts = () => {
        setState({ ...initialState, contactsIsOpen: true });
    };

    const handleSetPayment = () => {
        setState({ ...initialState, paymentIsOpen: true });
    };

    const handleSetProduct = (productId, card) => {
        setState({ ...initialState, productDetailIsOpen: true });
        setProductCard(card);
    };

    return (
        <div>
            <Nav
                handleSetContainer={handleSetContainer}
                handleSetAbout={handleSetAbout}
                handleSetContacts={handleSetContacts}
            />
            <Header
                handleSetContainer={handleSetContainer}
                handleSetCart={handleSetCart}
                handleSetLogin={handleSetLogin}
                handleSetPayment={handleSetPayment}
            />
            {
                <Container
                    containerIsOpen={state.containerIsOpen}
                    cartIsOpen={state.cartIsOpen}
                    loginIsOpen={state.loginIsOpen}
                    aboutIsOpen={state.aboutIsOpen}
                    contactsIsOpen={state.contactsIsOpen}
                    paymentIsOpen={state.paymentIsOpen}
                    selectedProductIsOpen={state.productDetailIsOpen}
                    handleSetCart={handleSetCart}
                    handleSetLogin={handleSetLogin}
                    handleSetContainer={handleSetContainer}
                    handleSetPayment={handleSetPayment}
                    handleSetProduct={handleSetProduct}
                    productCard={productCard}
                />
            }
        </div>
    );
};

export default Home;
