import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <h1 className="header-h1">QPICK</h1>
                <p className="header-p"><i className="fas fa-mobile"></i>Выбрать модель телефона</p><i className="fas fa-chevron-down"></i>
            </div>
            <div className="header-links">
                <div className="items">
                    <a href="7501527588:AAGSRxW4NsLWSA6EgHunk24lBBLHGnBs_Pk" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-telegram"></i>
                    </a>
                </div>
                <div className="items"><i className="fas fa-heart"></i></div>
                <div className="items"><i className="fas fa-cart-shopping"></i></div>
            </div>
        </div>
    )
}

export default Header;