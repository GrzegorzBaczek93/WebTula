import React from 'react';

const withSizeDetector = WrappedComponent => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isMobile: this.getInitialState(),
            };
        }

        componentDidMount() {
            window.addEventListener('resize', this.handleWindowSizeChange);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.handleWindowSizeChange);
        }

        getInitialState = () => {
            return window.innerWidth < 1000 ? true : false;
        };

        handleWindowSizeChange = () => {
            const { isMobile } = this.state;

            if (window.innerWidth < 1000 && !isMobile) {
                this.setState({
                    isMobile: true,
                });
            } else if (window.innerWidth > 1000 && isMobile) {
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
