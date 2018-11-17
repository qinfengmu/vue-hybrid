/**
 * Created by Administrator on 2018/9/5.
 */
import { BridgeRegister } from "./core"
import { Navigation } from  "./apis/navigation"
let Hybrid =(function () {
    function Hybrid() {
        const register = new BridgeRegister();
        this.navigation = new Navigation(register);
    }
    return Hybrid;
}());
export { Hybrid };