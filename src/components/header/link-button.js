import React from 'react';
import { Link } from 'gatsby';

import '@styles/header.css';

class LinkButton extends React.Component {
    render() {
        const { pathName, text } = this.props;
        return (
            <div className={`header_button_wrapper`}>
                <Link
                    className={`header_button`}
                    activeClassName={`header_button_selected`}
                    to={pathName}>
                    {text}
                </Link>
            </div>
        );
    }
}

export default LinkButton;
