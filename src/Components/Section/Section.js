import "./Section.css";
import logo from "../logo-png.svg";
import AdsCard1 from "../Card1.svg";
import AdsCard2 from "../Card2.svg";
import AdsCard3 from "../Card3.svg";

import card1 from "../../Data/card1.svg";
import card2 from "../../Data/card2.svg";
import card3 from "../../Data/card3.svg";

import adscard1 from "../../Data/ads-card1.svg";
import adscard2 from "../../Data/ads-card2.svg";
import adscard3 from "../../Data/ads-card3.svg";

import cardData1 from "../../Data/Card.json";      // Наушники
import cardData2 from "../../Data/Card-ads.json";  // Беспроводные наушники

function Section() {
    const adsData = [
        { img: AdsCard1, title: "Стеклянные" },
        { img: AdsCard2, title: "Силиконовые" },
        { img: AdsCard3, title: "Кожаные" },
    ];

    // Rasm mapping – JSON dagi "img" qiymati shu obyekt orqali topiladi
    const images = {
        card1,
        card2,
        card3,
        adscard1,
        adscard2,
        adscard3
    };

    // Har bir kartani chizish uchun funksiya
    const renderCards = (data) => (
        <div className="cards-data">
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card-img">
                        <img src={images[item.img]} alt={item.name} />
                        <i className="fas fa-heart"></i>
                    </div>
                    <div className="card-info">
                        <h2>
                            {item.name}
                            <span>
                                {item.value_arzon !== "none" ? (
                                    <>
                                        <p>{item.value_arzon} ₸</p>
                                        <del>{item.value} ₸</del>
                                    </>
                                ) : (
                                    <p>{item.value} ₸</p>
                                )}
                            </span>
                        </h2>
                        <h3>
                            <i className="fas fa-star"></i> {item.star}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="section">
            {/* Yuqoridagi reklama bo‘limi */}
            <div className="section-ads">
                <h2>Аксессуары для iPhone 13 Pro Max</h2>
                <img src={logo} alt="logo" />
            </div>

            {/* Чехол turlari */}
            <div className="ads-card">
                <h2>Чехлы</h2>
                <div className="ads-data">
                    {adsData.map((item, index) => (
                        <div className="data-card" key={index}>
                            <img src={item.img} alt={item.title} />
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Наушники */}
            <div className="cards">
                <h2>Наушники</h2>
                {renderCards(cardData1)}
            </div>

            {/* Беспроводные наушники */}
            <div className="card-ads2">
                <h2>Беспроводные наушники</h2>
                {renderCards(cardData2)}
            </div>
        </div>
    );
}

export default Section;
