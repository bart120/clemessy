import React from 'react';
import { Button } from 'reactstrap';

class Home extends React.Component {
    state = { data: '' };
    i = 0;
    sw = new WebSocket('wss://echo.websocket.org/');

    componentDidMount() {
        this.sw.onopen = () => {
            this.sw.send('hello');
        };

        this.sw.onmessage = (event) => {
            this.setState({ data: event.data });
            if (Notification.permission === 'granted') {
                const notif = new Notification(event.data);
            }

            if (Notification.permission !== 'denied') {
                Notification.requestPermission((perm) => {
                    //Notification.permission = perm;
                });
                if (Notification.permission === 'granted') {
                    const notif = new Notification(event.data);
                }
            }
        }
    }

    componentWillUnmount() {
        this.sw.close();
    }

    test() {
        this.i++;
        this.sw.send(`hello ${this.i}`);
    }

    render() {
        return (
            <>
                <div>Home</div>
                <div>{this.state.data}</div>
                <Button onClick={() => this.test()}>Test</Button>
            </>
        );
    }
}

export default Home;