import React from 'react';
import { connect } from 'react-redux';

import '@styles/global.css';
import Layout from '@components/common/Layout';
import { requestData } from '@data/store/Actions';

class ComissionPage extends React.Component {
    componentDidMount() {
        console.log('Did mount: ', this.props);
        this.props.loadData();
    }

    render() {
        console.log('Render: ', this.props);
        const { ilustrations } = this.props;

        return <Layout></Layout>;
    }
}

const mapStateToProps = state => {
    return { data: state };
};

const mapDispatchToProps = dispatch => {
    return {
        loadData: () => {
            dispatch(requestData());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComissionPage);
