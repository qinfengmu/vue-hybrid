/**
 * Created by Administrator on 2018/9/5.
 */
import { BridgeRegister } from "./core"
let Hybrid =(function () {
    function Hybrid() {
        this.register = new BridgeRegister();
    }
    return Hybrid;
}());
export {Hybrid};