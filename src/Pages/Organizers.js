import './../Style/Organizers.css';
import moutcourtOrganizers from './../Images/moutcourt_organizers.jpeg';
import { useTranslation } from 'react-i18next';

const Organizers = () => {
  const { t } = useTranslation();
  return (
    <div className="organizers-container">
      <h4 className="organizers-title">{t('about-organizers')}</h4>
      <p>
        {t('about-organizers-p1-moot')}{' '}
        <span style={{ fontWeight: 'bold' }}>{t('about-organizers-p1-name')}</span>
        {t('about-organizers-p1-location')}
      </p>
      <div className="organizers-image">
        <img src={moutcourtOrganizers} alt="moutcourt_organizers" />
      </div>
      <p>{t('about-organizers-p2')}</p>
      <p>{t('about-organizers-p3')}</p>
      <p>{t('about-organizers-p4')}</p>
      <p>{t('about-organizers-p5')}</p>
      <p>{t('about-organizers-p6')}</p>
    </div>
  );
};

export default Organizers;
