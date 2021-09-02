import React from 'react';
import css from "./footer.module.css"

export const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={`${css.content} container`}>
                <div className={css.footer__logo}>
                    <img src="/img/logo.svg" alt=""/>

                </div>
                <p className={css.list}>О нас

                </p>
                <ul className={css.list}>Контакты
                    <a href="tel:+996703838228" className={css.item}>+996 703 838 228</a>
                    <a href="mailto:aidemday@gmail.com" className={css.item}>aidemday@gmail.com</a>


                </ul>
                <ul  className={css.list}> Социальные сети
                    <div className={css.social__link}>
                        <img src="/images/face.png" alt="Facebook"/>
                        <img src="/images/twit.png" alt="Twitter"/>
                        <img src="/images/insta.png" alt="Instagram"/>
                        <img src="/images/link.png" alt="Linkedin"/>

                    </div>
                </ul>
            </div>
            <p className={css.copyright}> Copyright © 2021 Gift me</p>

        </footer>
    );
};


