import React from "react";

function PopupWithSubmit() {
  return (
    <section className="popup" id="popupWithSubmit">
      <div className="popup__container">
        <form
          className="form form-submit"
          id="form-submit"
          action="URL"
          noValidate
        >
          <button
            className="popup__close"
            type="button"
            id="popupSubmitClose"
          />
          <h2 className="form__heading form-submit__question">Вы уверены?</h2>
          <button className="popup-submit__button" id="yes" type="submit">
            Да
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithSubmit;
