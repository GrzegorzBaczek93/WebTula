import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'gatsby';

import '@styles/burger-menu.css';
import ButtonWrapper from '@components/common/button-wrapper';
import HoverImageButton from '@components/common/hover-image-button';

class BurgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
        };
    }

    handleStateChange = state => {
        this.setState({ menuOpen: state.isOpen });
    };

    closeMenu = () => {
        this.setState({ menuOpen: false });
    };

    toggleMenu = () => {
        this.setState(state => ({ menuOpen: !state.menuOpen }));
    };

    render() {
        return (
            <div>
                <HoverImageButton
                    alt='Burger Menu'
                    className='bm-menu-icon'
                    unhoverSrc='burger_menu_icon.png'
                    hoverSrc='burger_menu_icon_light.png'
                    onClick={this.toggleMenu}
                />
                <Menu
                    right
                    disableAutoFocus
                    customBurgerIcon={false}
                    onStateChange={state => this.handleStateChange(state)}
                    isOpen={this.state.menuOpen}>
                    <Link to='/'>Home</Link>
                    <Link to='/work'>Work</Link>
                    <Link to='/comissions'>Comissions</Link>
                    <Link to='/about'>About</Link>
                    <ButtonWrapper url={'https://www.etsy.com/shop/tulamakes'}>
                        <span className='bm-item'>Shop</span>
                    </ButtonWrapper>
                </Menu>
            </div>
        );
    }
}

export default BurgerMenu;
