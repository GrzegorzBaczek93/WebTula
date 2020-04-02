import React from 'react'
import { connect } from "react-redux"

import '@styles/global.css'
import Layout from '@components/common/Layout'
import { requestData } from '@data/store/Actions';

class ComissionPage extends React.Component {

  componentDidMount() {
    console.log('Did mount: ', this.props);
    this.props.loadData();
  }

  render() {
    console.log('Render: ', this.props);
    const { ilustrations } = this.props;

    return (
      <Layout>
        Hi, I'm Tula, I’m an illustrator and an graphic designer living in the 
a tree house, where read books with my dog named Sisi. I create children illustration for books, whimsical family portraits and magical bookmarks inspired by animals nad my favorite books.  When I’m not drawing, I read or watch Harry Potter for 100th time, ride bike and take photos to make memories last longer.
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return { data: state }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => { dispatch(requestData()) }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ComissionPage);
