import React from 'react';

const MIN_DESKTOP_WIDTH = 1000;
const WINDOW_RESIZE_LISTENER_NAME = 'resize';

const withSizeDetector = WrappedComponent => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isMobile: this.getInitialState(),
            };
        }

        componentDidMount() {
            window.addEventListener(
                WINDOW_RESIZE_LISTENER_NAME,
                this.handleWindowSizeChange
            );
        }

        componentWillUnmount() {
            window.removeEventListener(
                WINDOW_RESIZE_LISTENER_NAME,
                this.handleWindowSizeChange
            );
        }

        getInitialState = () => {
            return typeof window !== 'undefined' &&
                window.innerWidth < MIN_DESKTOP_WIDTH
                ? true
                : false;
        };

        handleWindowSizeChange = () => {
            const { isMobile } = this.state;

            if (window.innerWidth < MIN_DESKTOP_WIDTH && !isMobile) {
                this.setState({
                    isMobile: true,
                });
            } else if (window.innerWidth > MIN_DESKTOP_WIDTH && isMobile) {
                this.setState({
                    isMobile: false,
                });
            }
        };

        render() {
            const { isMobile } = this.state;

            return <WrappedComponent {...this.props} isMobile={isMobile} />;
        }
    };
};

export default withSizeDetector;
