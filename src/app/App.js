import './App.css';
import {useEffect} from "react";
import eruda from "eruda";
import AdminProfilePage from "../pages/AdminProfilePage/AdminProfilePage";
import {Helmet} from "react-helmet";
import { useCookies } from 'react-cookie'
import ChannelPage from "../pages/ChannelPage/ChannelPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import RegisterChannelPage from "../pages/RegisterChannelPage/RegisterChannelPage";
const tg = window.Telegram.WebApp;


function App() {
    // const [cookies, setCookie] = useCookies(['access_token_h', 'refresh_token_hi'])
    // // alert(cookies)
    // console.log(cookies)
    // let expires = new Date()
    // expires.setTime(expires.getTime() + 1000000)
    // setCookie('access_token_hi', 'hello', { path: '/',  expires})
    // setCookie('refresh_token_hi', 'world', {path: '/', expires})

    // useEffect(() => {
    //     tg.expand()
    //     tg.ready();
    // }, []);
    // const onClose = () => {
    //     tg.close();
    // }

    // let el = document.createElement('div');
    // document.body.appendChild(el);
    //
    // eruda.init({
    //     container: el,
    //     tool: ['console', 'elements', 'application']
    // });

    return (
        <div className={"app"}>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            </Helmet>
            {/*<AdminProfilePage />*/}
            {/*<ChannelPage />*/}
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route index element={<AdminProfilePage />}/>
                    <Route path={'channels/:id'} element={<ChannelPage />}/>
                    <Route path={'register_channel'} element={<RegisterChannelPage />}/>

                </Route>
            </Routes>
        </div>
    );
}

export default App;
