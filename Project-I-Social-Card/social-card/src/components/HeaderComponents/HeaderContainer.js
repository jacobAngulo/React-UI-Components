import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent';
import './Header.css';

function HeaderContainer() {
    return (
        <div className="header">
            <ImageThumbnail />
            <section className="title-content">
                <HeaderTitle />
                <HeaderContent />
            </section>
        </div>
    )
}

export default HeaderContainer;