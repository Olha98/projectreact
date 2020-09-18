import React, { Component } from 'react';
import { connect } from 'react-redux';
import modalBackDrop from '../ModalBackDrop/ModalBackDrop';
import Spinner from '../Spinner/Spinner';
import subscribeSelectors from '../../redux/selectors/subscribeSelector';
import subscribeActions from '../../redux/actions/subscribeActions';
import styles from './Card.module.css';

class CardForm extends Component {
  state = {
    name: 'Моя карта',
    number: '',
    monthExpiration: '',
    yearExpiration: '',
    error: null,
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.addCard(this.state);
    if (this.props.error) {
      return;
    }
    this.props.closeModal();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { number, monthExpiration, yearExpiration, error } = this.state;
    const { isLoading } = this.props;
    return (
      <section className={styles.modalCardForm}>
        <header
          className={styles.sectionHeader}
          style={{ marginBottom: `${error ? '20px' : '40px'}` }}
        >
          <h2 className={styles.title}>Введите данные по платежной карте:</h2>
          {error && (
            <h3 className={styles.error}>
              Извините, произошла ошибка: {error.message}{' '}
            </h3>
          )}
        </header>
        {isLoading && <Spinner />}
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Номер карты
            <input
              className={styles.input}
              type="number"
              name="number"
              value={number ? number : ''}
              placeholder="xxxx-xxxx-xxxx-xxxx"
              required
              onChange={this.handleChange}
            />
          </label>
          Когда истекает срок вашей карты?
          <label className={styles.label}>
            месяц:
            <input
              className={styles.input}
              type="number"
              name="monthExpiration"
              value={monthExpiration ? monthExpiration : ''}
              placeholder="номер месяца"
              required
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            год:
            <input
              className={styles.input}
              type="number"
              name="yearExpiration"
              value={yearExpiration ? yearExpiration : ''}
              required
              placeholder="год"
              onChange={this.handleChange}
            />
          </label>
          <button
            className="btnTransparentWhiteBorder"
            type="submit"
            style={{ margin: '0 auto' }}
          >
            Сохранить
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  // error: subscribeSelectors.getError(state),
  isLoading: state.loading,
});

const mapDispatchToProps = {
  addCard: subscribeActions.addCardSuccess, // если добавят поле на бэке, то взять метод из Operations
};

export default modalBackDrop(
  connect(mapStateToProps, mapDispatchToProps)(CardForm),
);
