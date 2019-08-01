import axios from 'axios'
export default function api(url = '', params = {}, type = 'GET'){
    let promise;
    return new Promise((resolve, reject) => {
        // 判断请求类型
        if(type === 'GET')
        {
            let paramStr = '';
            Object.keys(params).forEach(key => {
                paramStr += key + '=' + params[key] + '&';
            });
            if (paramStr.length > 0 )
            {
                paramStr = paramStr.substring(0, paramStr.lastIndexOf('&'));
            }
            url += '?' + paramStr;
            promise = axios.get(url);
        }else if(type === 'POST') {
            promise = axios.post(url, params);
        }
        promise.then(res => {
            resolve(res.data);
        }).catch(err => {
            reject('服务端异常，请联系后台管理员--' + err);
        })
    })
}
