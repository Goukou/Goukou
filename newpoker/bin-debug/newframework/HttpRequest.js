var HTTP;
(function (HTTP) {
    function url_request(url, data, method, waiting, success, err) {
        //let querydata = []
        // 从data中获取参数，如果是get，获取到的参数将添加到url之后，如果是post，将会直接发送。
        // if (method == egret.HttpMethod.GET) {
        //     for (let key in data) {
        //         if (data.hasOwnProperty(key) &&  typeof(data[key]) !== 'function' && key.charAt(0) !== '_'){
        //             if (typeof(data[key]) == 'object'){
        //                 querydata.push(key + "=" + encodeURIComponent(JSON.stringify(data[key])));
        //             } else {
        //                 querydata.push(key + "=" + encodeURIComponent(data[key]));
        //             }
        //         }
        //     }
        //     // 也是转换成字符串 判断get
        //     let querystring = querydata.length > 0 ? ('?' + querydata.join('&')) : '';
        //     url += querystring;
        //     data = null;
        // }
        // let timestamp = asStopWatch.GetInstance().GetNowMS() ;
        // if (waiting){
        //     // WaitingAlert.GetInstance().Show() ;
        // }
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url, method);
        request.send(data);
        console.log(url);
        console.log(method);
        console.log(data);
        request.addEventListener(egret.Event.COMPLETE, function () {
            if (waiting) {
                // WaitingAlert.GetInstance().Dismiss() ;
            }
            var response = request.response;
            response = response.replace(/:(\d{18,})/g, ':"$1"');
            if (success) {
                success.call(null, response);
            }
            //初始调用转换
        }, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, function (e) {
            if (waiting) {
                // WaitingAlert.GetInstance().Dismiss() ;
            }
            var error = {
                result: -1,
                // 数-1
                errorMessage: "IOERROR",
            };
            if (err) {
                err.call(null, error);
            }
        }, this);
    }
    HTTP.url_request = url_request;
})(HTTP || (HTTP = {}));
//# sourceMappingURL=HttpRequest.js.map