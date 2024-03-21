import React from 'react';
import '../Style/Participation.css';
import { Link } from 'react-router-dom';
import reglament from '../Files/reglament.pdf';
import { useTranslation } from 'react-i18next';

function Participation() {
  const { t } = useTranslation();
  return (
    <div className="participation">
      <h4>{t('participation-title')} </h4>
      <p>{t('participation-introduction')} </p>
      <h4 style={{ backgroundColor: 'transparent', paddingLeft: 0, fontSize: '35px' }}>
        {t('particapation-reasons')}
      </h4>
      <h5>{t('participation-reason-1-title')} </h5>
      <p>{t('participation-reason-1-body')} </p>
      <h5>{t('participation-reason-2-title')} </h5>
      <p>{t('participation-reason-2-body')} </p>
      <h5>{t('participation-reason-3-title')} </h5>
      <p>{t('participation-reason-3-body')} </p>
      <h5>{t('participation-reason-4-title')} </h5>
      <p>{t('participation-reason-4-body-title')} </p>
      <p className="participation-list">{t('participation-reason-4-body-p1')}</p>
      <p className="participation-list">{t('participation-reason-4-body-p2')}</p>
      <p className="participation-list">{t('participation-reason-4-body-p3')}</p>
      <p className="participation-list">{t('participation-reason-4-body-p4')}</p>
      <h5>{t('participation-reason-5-title')}</h5>
      <p>{t('participation-reason-5-body')} </p>
      <h4>{t('participation-excuses-title')} </h4>
      <h5>{t('participation-excuses-p1-title')} </h5>
      <p>{t('participation-excuses-p1-body')} </p>
      <h5>{t('participation-excuses-p2-title')} </h5>
      <p>{t('participation-excuses-p2-body')} </p>
      <h5>{t('participation-excuses-p3-title')} </h5>
      <p>{t('participation-excuses-p3-body')} </p>
      <h4>{t('participation-questions-title')} </h4>
      <h5>{t('participation-questions-p1-title')} </h5>
      <p>{t('participation-questions-p1-body')} </p>
      <h5>{t('participation-questions-p2-title')} </h5>
      <p>{t('participation-questions-p2-body')} </p>
      <h5>{t('participation-questions-p3-title')} </h5>
      <p>{t('participation-questions-p3-body')} </p>
      <h5>{t('participation-questions-p4-title')} </h5>
      <p>
        {t('participation-questions-p4-body')}{' '}
        <Link className="file-link" to={reglament} target="_blank" download>
          {t('participation-questions-p4-body-link')}
        </Link>{' '}
      </p>
      <h5>{t('participation-questions-p5-title')}</h5>
      <p>{t('participation-questions-p5-body')}</p>
      <h5>{t('participation-questions-p6-title')}</h5>
      <p>{t('participation-questions-p6-body')} </p>
    </div>
  );
}

export default Participation;
