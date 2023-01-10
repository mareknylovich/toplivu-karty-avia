import PreviewImage from '../../assets/images/preview__image.jpeg'
import Countdown from 'react-countdown';

const renderer = ({ hours, minutes, seconds }) => {

    hours = hours <= 9 && hours >= 0 ? `0${hours}` : hours
    minutes = minutes <= 9 && minutes >= 0 ? `0${minutes}` : minutes
    seconds = seconds <= 9 && seconds >= 0 ? `0${seconds}` : seconds

    return (
        <div className="Preview__timer-area">
            <div className="Preview__timer-item">
                <span className="Preview__timer-value">
                    {hours}
                </span>
                <span className="Preview__timer-label">
                    stunden
                </span>
            </div>
            <div className="Preview__timer-item">
                <span className="Preview__timer-value">
                    {minutes}
                </span>
                <span className="Preview__timer-label">
                    minuten
                </span>
            </div>
            <div className="Preview__timer-item">
                <span className="Preview__timer-value">
                    {seconds}
                </span>
                <span className="Preview__timer-label">
                    sekunden
                </span>
            </div>
        </div>
    )
}

function PreviewSection() {

    function goToSection(query) {
        const element = document.querySelector(query)
        element.scrollIntoView({behavior: "smooth"});
    }

    return (
        <section className="Preview">
            <div className="Preview__inner container">
                <div className="Preview__content">
                    <div className="Preview__image">
                        <img src={PreviewImage} alt=""/>
                    </div>
                    <div className="Preview__info">
                        <h1 className="Preview__title title">
                            50% Rabatt auf PJSC <span>
                                <span>
                                    AV<i>i</i>A
                                </span>
                            </span> Benzin!

                        </h1>
                        <p className="Preview__text">
                            Kaufen Sie eine Tankkarte mit Guthaben für die Hälfte des Preises!
                        </p>
                        <div className="Preview__timer">
                            <div className="Preview__timer-title">
                                Bis zum Ende der Aktion:
                            </div>
                            <Countdown
                                zeroPadDays={2}
                                date={Date.now() + 1000 * 60 * 60 * 18}
                                renderer={renderer}
                            />
                        </div>
                        <button className="Preview__more button" onClick={goToSection.bind(null, '#products')}>
                            Kaufen
                        </button>
                    </div>
                </div>
                <div className="Preview__progress">
                    <div className="Preview__progress-title">
                        Insgesamt <b>1.000</b> <br/> teilnehmende Tankkarten, verbleibend: <b>39</b>
                    </div>
                    <div className="Preview__progress-line progress">
                        <div className="progress__content">
                            <div className="progress__current">
                                39
                            </div>
                            <div className="progress__max">
                                100
                            </div>
                        </div>
                        <div className="progress__fill" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PreviewSection;
