import firebase from './firebase';

const Token = () => {

    const messaging = firebase.messaging();

    Notification.requestPermission()
        .then((permission) => {
            if (permission === "granted") {
                console.log("Permission is ", permission);

                messaging.getToken()
                    .then((currentToken) => {
                        if (currentToken) {
                            console.log("Token =>\n", currentToken);
                        } else {
                            console.log('No registration token available.', currentToken);
                        }
                    }).catch((err) => {
                        console.log('An error occurred while retrieving token. ', err);
                    });
            }
        })
}

export default Token;