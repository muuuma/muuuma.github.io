/**
 * 创意工匠 Github 官网脚本文件
 */

/**
 * 初始化网站
 */
;(function(window, document, $){
    /**
     * 判断是否是以Https协议访问
     */
    if (window.location.protocol != "https:"){
        window.location.href = "https://" + window.location.hostname;
    }
    /**
     * 判断是否预载入jQuery库文件
     */
    if (typeof jQuery === 'undefined'){
        throw new Error('Before required jQuery\'s library.')
    }

})(window, document, function (el){
        return document.querySelectorAll(el);
});