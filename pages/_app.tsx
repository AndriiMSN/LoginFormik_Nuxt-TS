// Core
import {store} from "../store/store";
import {Provider} from "react-redux";
import {useSelector} from "react-redux";
import {currentTheme} from "../store/slices/theme";
// Styles
import 'normalize.css';
import '../styles/index.sass';
import 'swiper/swiper.scss';
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../styles/Theme/global";
import Head from "next/head";

const Theme = (props) => {
    return (
        <ThemeProvider theme={useSelector(currentTheme).theme}>
            {props.children}
        </ThemeProvider>
    )
}

function MyApp({Component, pageProps}) {

    return (
        <>
            <Provider store={store}>
                <Theme>
                    <GlobalStyle/>
                    <Head >
                        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    </Head>
                    <Component {...pageProps} />
                </Theme>
            </Provider>
        </>
    )
}

export default MyApp


