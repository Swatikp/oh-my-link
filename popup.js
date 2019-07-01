// To get currently active link if using chrome browser and creating its qr code
if (chrome) {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        console.log(tabs[0]);
        let qrcode = new QRCode("qrcode", {
            text: tabs[0].url,
            width: 200,
            height: 200,
            colorDark: "#2E1515",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    });
}
// To get currently active link if using firefox browser and creating its qr code
else {
    browser.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        console.log(tabs[0]);
        let qrcode = new QRCode("qrcode", {
            text: tabs[0].url,
            width: 200,
            height: 200,
            colorDark: "#2E1515",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    });
}