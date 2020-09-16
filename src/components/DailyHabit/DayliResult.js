import React, { useState } from "react";
import { connect } from "react-redux";
import updateDailyResul from "../../redux/operations/dailyResultOperation";
import modalBackDrop from "../ModalBackDrop/ModalBackDrop";
import style from "./DailyHabit.module.css";
import moment from "moment";
import "moment/locale/ru";

const DailyResult = ({ close, updateResult }) => {
  const [quantity, setQuantity] = useState(0);
  const changeQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  const submitQuantity = (e) => {
    e.preventDefault();
    // const date = Date.now();
    // console.log();
    // console.log(date.getdate());
    // console.log({ startedAt: moment().format(), data: [quantity] });
    updateResult({ startedAt: moment().format(), data: [quantity] });
  };
  return (
    <div className={style.dailyHabitWrapper}>
      <div>
        <h2 className={style.dailyHabitTitle}>
          Сколько сигарет за сегодня Вы выкурили?
        </h2>
        <p className={style.dailyHabitDescription}>
          Давайте вместе постараемся свести это число к нулю.
        </p>
      </div>
      <form onSubmit={(e) => submitQuantity(e)}>
        <div className={style.dailyHabitInputWrapper}>
          <p className={style.inputTitle}>Количество сигарет</p>
          <label>
            <input
              onChange={(e) => changeQuantity(e)}
              placeholder="_._шт"
              className={style.dailyResultInput}
            />
          </label>
        </div>
        <div className={style.dailyHabitBtns}>
          <button
            onClick={() => close()}
            type="button"
            className="buttonTransparent"
          >
            Отмена
          </button>
          <button type="submit" className="buttonTransparent">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default modalBackDrop(
  connect(null, { updateResult: updateDailyResul })(DailyResult)
);
