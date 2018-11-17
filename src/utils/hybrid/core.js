/**
 * Created by fengmu qin on 2018/9/5.
 */
function setupWebViewJavascriptBridge() {
    return new Promise(function (resolve) {
        let callback = function () {
            resolve(window['WebViewJavascriptBridge']);
        };

        if(window.WebViewJavascriptBridge){
            return resolve(window['WebViewJavascriptBridge']);
        }
        document.addEventListener('WebViewJavascriptBridgeReady', callback, false);
        if (window['WVJBCallbacks']) {
            return window['WVJBCallbacks'].push(callback);
        }
        window['WVJBCallbacks'] = [callback];
        let WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function () {
            document.documentElement.removeChild(WVJBIframe);
        },0);
    })
}

let BridgeRegister = (function () {
    function BridgeRegister() {
        let _this = this;
        this.initBridge = setupWebViewJavascriptBridge().then((bridge) => {
            console.log(bridge);
            _this.bridge = bridge;
            return bridge;
        })
    }
    BridgeRegister.prototype.registerHandler = function (methodName) {
        const _this = this;
        return new Promise( (resolve, reject) => {
            const fn =  (data,rspCallBack) => {
                try {
                    const res = typeof data === 'string' ? JSON.parse(data) : data;
                    resolve(res);
                }catch (e){
                    reject(e);
                }
                rspCallBack();
            };
            if(_this.bridge){
                _this.bridge.registerHandler(methodName,fn);
            }else{
                _this.initBridge.then(()=>{
                    _this.bridge.registerHandler(methodName,fn);
                })
            }
        });
    };
    BridgeRegister.prototype.callHandler = function (methodName,params) {
        const _this = this;
        return new Promise((resolve,reject) =>  {
            const fn = (response) => {
                try{
                    const res = typeof response === 'string' ? JSON.parse(response) : response;
                    resolve(res);
                }catch (e){
                    reject(e);
                }
                if(_this.bridge){
                    _this.bridge.callHandler(methodName,params,fn);
                }else{
                    _this.initBridge.then(()=>{
                        _this.bridge.callHandler(methodName,params,fn);
                    });
                }
            }
        });
    };
    return BridgeRegister;
}());

export { BridgeRegister };