function FindProxyForURL(url, host) {
    // 匹配 https://android.apis.google.com/* 或 https://android.googleapis.com/*
    if (shExpMatch(url, "*android.apis.google.com/*") || 
        shExpMatch(url, "*android.googleapis.com/*")) {
        return "PROXY 10.16.13.18:8080";
    }
    
    // 其他所有请求直连
    return "DIRECT";
}
