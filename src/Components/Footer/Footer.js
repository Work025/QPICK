import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <h2>QPICK</h2>
            <div className="footer-links">
                <p>Избранное</p>
                <p>Корзина</p>
                <p>Контакты</p>
            </div>
            <div className="footer-lang">
                <p>Условия сервиса</p>
                <div className="lang-select">
                    <i className="fas fa-globe"></i>
                    <span>Каз</span>
                    <span>Рус</span>
                    <span>Eng</span>
                </div>
            </div>
            <div className="footer-contact">
                <i className="fa-brands fa-vk"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-telegram"></i>
                <i className="fa-brands fa-whatsapp"></i>
            </div>
        </div>
    )
}

export default Footer;