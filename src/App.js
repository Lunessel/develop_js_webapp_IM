import './App.css';
import {useEffect} from "react";
import eruda from "eruda";
const tg = window.Telegram.WebApp;


function App() {

    useEffect(() => {
        tg.ready();
    }, []);
    const onClose = () => {
        tg.close();
    }

    let el = document.createElement('div');
    document.body.appendChild(el);

    eruda.init({
        container: el,
        tool: ['console', 'elements']
    });
    console.log("initData")
    console.log(tg.initData)

    console.log("initDataUnsafe")
    console.log(tg.initDataUnsafe)
    console.log("tg")
    console.log(tg)

    return (
        <div>
            <p>This is web app for tg</p>
            <input type={"file"}/>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default App;
