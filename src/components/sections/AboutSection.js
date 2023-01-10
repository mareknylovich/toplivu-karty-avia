import SignImage from '../../assets/images/painting.png'
import DirectorImage from '../../assets/images/director.jpg'

function AboutSection() {
    return (
        <section className="About section">
            <div className="About__inner container">
                <div className="About__content">
                    <div className="About__info">
                        <p className="About__text">
                            Wir sind der Meinung, dass Avia sich vor allem um den Kunden kümmert. Zu Ehren unseres Geburtstages wollen wir unseren Kunden kleine Träume erfüllen. Leider können wir nicht allen Menschen diese Möglichkeit bieten, aber wir geben den ersten 1000 Teilnehmern eine Garantie für ihre Worte.
                        </p>
                        <div className="About__info-footer">
                            <div className="About__info-sign">
                                <img src={SignImage} alt=""/>
                            </div>
                            <div className="About__info-sign-name">
                                <span>Mario Tonini</span> <br/>
                                <small>President Avia</small>
                            </div>
                        </div>
                    </div>
                    <div className="About__image">
                        <img src={DirectorImage} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
