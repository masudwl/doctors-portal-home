import React from 'react';
import '../Footer/footer.css';

const FooterInto = ({footerInto}) => {
    return (
        <div className="col-md-3 footer-info">
            <h4>{footerInto.title}</h4>
            <ul>
                <li><a href="#">Emergency Dental Care</a></li>
                <li><a href="#">Checkup</a></li>
                <li><a href="#">Treatment of Personal Desease</a></li>
                <li><a href="#">Tooth Extraction</a></li>
                <li><a href="#">Check up</a></li>
            </ul>
        </div>
    );
};

export default FooterInto;