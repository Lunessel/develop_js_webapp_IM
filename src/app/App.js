import './App.css';
import {useEffect} from "react";
import eruda from "eruda";
import AdminProfilePage from "../pages/AdminProfilePage/AdminProfilePage";
import {Helmet} from "react-helmet";
const tg = window.Telegram.WebApp;


function App() {

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
            <AdminProfilePage />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit magnam modi, non nostrum officiis tempora. Eveniet explicabo ipsa molestias non officia. Aliquam beatae doloremque molestias placeat quae quasi repudiandae veniam.
        </div>
    );
}

export default App;
