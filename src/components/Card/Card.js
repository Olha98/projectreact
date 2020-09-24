import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Trash } from '../../assests/images/Card/trash.svg';
import { ReactComponent as TelegramIcon } from '../../assests/images/Card/telegram.svg';
import CardForm from './CardForm';
import {
  cardsSelectors,
  errorSelector,
  spinnerSelector,
} from '../../redux/selectors';

import style from './Card.module.css';

const Card = ({ cards }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  // let number, month, year;
  if (!cards.length) {
    cards.push({ number: 'xxxx xxxx xxxx xxxx', timeExpiration: '' });
  }
  const { number, timeExpiration } = cards[0];
  // number = cards[0].number;
  // const timeExpiration = new Date(cards[0].timeExpiration);
  // month = timeExpiration.getMonth();
  // year = timeExpiration.getFullYear();

  return (
    <>
      <p className={style.sectionTitle}>Мои карты</p>
      <div className={style.card}>
        <p className={style.cardName}>Моя карта</p>
        <p className={style.cardNumber}>{number}</p>
        <p className={style.cardExpireDate}>
          Истекает {timeExpiration}
          {/* Истекает {cards.length ? `${month} / ${year}` : ''} */}
        </p>
        <button className={style.cardDeleteButton}>
          <Trash className={style.trashIcon} />
        </button>
      </div>
      <div className={style.cardsButtons}>
        <button
          className={['btnTransparentWhiteBorder', style.buttonAdd].join(' ')}
          onClick={() => setIsShowModal(prev => !prev)}
        >
          + Добавить карту
        </button>
        <button
          className={['btnTransparentWhiteBorder', style.buttonPay].join(' ')}
        >
          Оплатить
        </button>
      </div>
      {isShowModal && <CardForm close={setIsShowModal} />}
      <div className={style.supportContainer}>
        <div className={style.supportPic}>{/* <SupportPic /> */}</div>
        <div className={style.supportInfo}>
          <p className={style.supportInfoTitle}>
            Напишите нам, если у Вас возникли вопросы:
          </p>
          <p className={style.supportInfoEmail}>info@dishi.com</p>
          <div className={style.supportInfoTelegram}>
            <TelegramIcon />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  cards: cardsSelectors.getCards(state),
  isLoading: spinnerSelector.isLoading(state),
  error: errorSelector.getError(state),
});

export default connect(mapStateToProps)(Card);
