import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import InputMask from "react-input-mask";
import { Field, reduxForm } from "redux-form";

import style from "./Profile.module.css";
// import { ReactComponent as OpenedEye } from "../../assests/images/profile/openedEye.svg";
// import { ReactComponent as ClosedEye } from "../../assests/images/profile/closedEye.svg";
import PasswordForm from "./PasswordForm";
import {
  requiredField,
  maxLengthCreator,
  minLengthCreator,
} from "./utils/validators";
// import Input from "./utils/FormsControls";

const minLengthCreator2 = minLengthCreator(2);

class Profile extends Component {
  state = {
    changePassword: false,

    formErrors: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",
    },
  };

  renderPasswordForm = () => {
    this.setState((prevState) => ({
      changePassword: !prevState.changePassword,
    }));
  };
  // ------------------

  handleChange = (e) => {
    const { name, defaultValue } = e.target;
    this.setState({ [name]: defaultValue });
    // () => {
    // this.validateField(name, defaultValue);
    // }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { changePassword } = this.state;

    const { firstname, lastname, phone, email, avatar } = this.props;

    return (
      <>
        <div className={style.container}>
          <div className={style.wrapperHeader}>
            <h2 className={style.title}>Личный кабинет</h2>
          </div>

          <div className={style.wrapperMain}>
            <h3 className={style.titleInfo}>Личная информация</h3>

            <div className={style.wrapperForm}>
              <div className={style.wrapperFirstColumn}>
                <form onSubmit={this.handleSubmit} className={style.form}>
                  <label className={style.label}>
                    <span className={style.titleInput}>Имя</span>
                    <input
                      type="text"
                      name="firstname"
                      // value={firstname}
                      defaultValue={firstname}
                      // validate={[requiredField, minLengthCreator2]}
                      // component={input}
                      onChange={this.handleChange}
                      className={style.input}
                    />
                  </label>
                  <label className={style.label}>
                    <span className={style.titleInput}>Фамилия</span>
                    <input
                      type="text"
                      name="lastname"
                      // value={defaultValue}
                      defaultValue={lastname}
                      onChange={this.handleChange}
                      className={style.input}
                    />
                  </label>
                  <label className={style.label}>
                    <span className={style.titleInput}>Телефон</span>
                    {/* <input
                      type="tel"
                      name="phone"
                      defaultValue={phone}
                      onChange={this.handleChange}
                      className={style.input}
                    /> */}
                    <InputMask
                      type="tel"
                      name="phone"
                      defaultValue={phone}
                      // {...phone}
                      mask="+3\8099 999 99 99"
                      maskChar="_"
                      className={style.input}
                      placeholder="+380__ ___ __ __"
                    />
                  </label>
                  <label className={style.label}>
                    <span className={style.titleInput}>E-mail</span>
                    <input
                      type="email"
                      name="email"
                      defaultValue={email}
                      onChange={this.handleChange}
                      className={style.input}
                    />
                  </label>
                  <button
                    type="submit"
                    onClick={this.handleSubmit}
                    className={style.btnSaveChange}
                  >
                    Сохранить изменения
                  </button>
                </form>
                <button
                  onClick={this.renderPasswordForm}
                  className={style.buttonChangePassword}
                >
                  Изменить пароль
                </button>
              </div>

              <div className={style.wrapperSecondColumn}>
                <NavLink
                  exact
                  className={style.avatarWrapper}
                  to="/profile/avatar"
                >
                  <img
                    src={avatar}
                    alt="avatar"
                    width="108"
                    higth="108"
                    className={style.avatar}
                  />
                </NavLink>
                <NavLink
                  exact
                  className={style.editAvatar}
                  to="/profile/avatar"
                >
                  Выбрать другой аватар
                </NavLink>
                <div className={style.subscription}>
                  <span className={style.subscriptionName}>Basic</span>
                </div>
                <button
                  type="submit"
                  onSubmit={this.handleSubmit}
                  className={style.button}
                >
                  Изменить подписку
                </button>
              </div>
            </div>

            {changePassword && <PasswordForm />}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    firstname: state.user.firstName,
    lastname: state.user.lastName,
    phone: state.user.phone,
    email: state.user.email,
    avatar: state.user.avatar,
  };
};

const mapDispatchToProps = {
  // firstname: actionc.firstName,
  // lastname: state.user.lastName,
  // phone: state.user.phone,
  // email: state.user.email,
  // avatar: state.user.avatar,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);