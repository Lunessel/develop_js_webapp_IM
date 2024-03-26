import './App.css';
import {useEffect} from "react";
import eruda from "eruda";
import AdminProfilePage from "../pages/AdminProfilePage/AdminProfilePage";
import {Helmet} from "react-helmet";
import { useCookies } from 'react-cookie'
import ChannelPage from "../pages/ChannelPage/ChannelPage";
const tg = window.Telegram.WebApp;


function App() {
    const [cookies, setCookie] = useCookies(['access_token', 'refresh_token'])
    alert(cookies)
    let expires = new Date()
    expires.setTime(expires.getTime() + (Date() * 1000))
    setCookie('access_token', 'hello', { path: '/',  expires})
    setCookie('refresh_token', 'world', {path: '/', expires})

    useEffect(() => {
        tg.expand()
        tg.ready();
    }, []);
    // const onClose = () => {
    //     tg.close();
    // }
    //
    // let el = document.createElement('div');
    // document.body.appendChild(el);
    //
    // eruda.init({
    //     container: el,
    //     tool: ['console', 'elements']
    // });
    // console.log("initData")
    // console.log(tg.initData)
    //
    // console.log("initDataUnsafe")
    // console.log(tg.initDataUnsafe)
    // console.log("tg")
    // console.log(tg)

    return (
        <div className={"app"}>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            </Helmet>
            {/*<AdminProfilePage />*/}
            <ChannelPage />
        </div>
    );
}

export default App;
