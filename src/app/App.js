import './App.css';
import {useEffect} from "react";
import eruda from "eruda";
import AdminProfilePage from "../pages/AdminProfilePage/AdminProfilePage";
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
            <AdminProfilePage />
        </div>
    );
}

export default App;
