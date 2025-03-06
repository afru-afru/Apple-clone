
import PropTypes from 'prop-types';
import "./cards.css"

const HighlightSection = ({
    leftLogo,
    leftDescription,
    leftLinks,
    rightLogo,
    rightDescription,
    rightTitle,
    leftBackground,
    rightBackground,
    sectionClassName,
    rightLinks
}) => {
    return (
        <section className={`${sectionClassName} highlight-wrapper`}>
            <div className="left-side-wrapper" style={{ backgroundImage: `url(${leftBackground})` }}>
                <div className="top-logo-wrapper">
                    <div className="logo-wrapper" style={{ fontSize:"20px" }}>
                        <img src={leftLogo} alt="Left Logo" />
                    </div>
                </div>
                <div className="description-wrapper">{leftDescription}</div>
                <div className="links-wrapper">
                    <ul>
                        {leftLinks.map((link, index) => (
                            <li key={index}><a href={link.href}>{link.text}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="right-side-wrapper" style={{ backgroundImage: `url(${rightBackground})` }}>
                <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                        <img src={rightLogo} alt="Right Logo" />
                    </div>
                </div>
                {rightTitle && <div className="product-title-small">{rightTitle}</div>}
                <div className="description-wrapper">{rightDescription}</div>
                <div className="links-wrapper">
                    {rightLinks && (
                        <ul>
                            {rightLinks.map((link, index) => (
                                <li key={index}><a href={link.href}>{link.text}</a></li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
};

HighlightSection.propTypes = {
    leftLogo: PropTypes.string.isRequired,
    leftDescription: PropTypes.string.isRequired,
    leftLinks: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
    rightLogo: PropTypes.string.isRequired,
    rightDescription: PropTypes.string.isRequired,
    rightTitle: PropTypes.string,  // Optional
    rightLinks: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ),
    leftBackground: PropTypes.string.isRequired,
    rightBackground: PropTypes.string.isRequired,
    sectionClassName: PropTypes.string.isRequired,
};

export default HighlightSection;