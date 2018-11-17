/**
 * Created by Administrator on 2018/9/6.
 */
let Navigation = (function () {
    function Navigation(register) {
        this.register = register;
        this.register.registerHandler('testFunction').then((res)=>{
            console.log(res);
        });
    }
    Navigation.prototype.setTitle = function (title) {
        return this.register.callHandler('setTitle',{title:title})
    };
    return Navigation;
}());
export { Navigation }