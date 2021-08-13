import Head from 'next/head';
import { Provider } from 'react-redux';
import { useStore } from '../store';

const App = ({ Component, pageProps }) => {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <Head>
                <title>HTTPOnly Auth</title>
                <meta name='viewport' content='width=device-width, inital-scale=1' />
                <link 
                    href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' 
                    rel='stylesheet' 
                    integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' 
                    crossorigin='anonymous'
                ></link>
                <script 
                    src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' 
                    integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' 
                    crossorigin='anonymous'
                ></script>
            </Head>
            <Component {...pageProps} />
        </Provider>
    );
};

export default App;
