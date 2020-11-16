import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleAddName(e) {
    setName(e.target.value);
  }

  function handleAddLink(e) {
      setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="popupPlace"
      id="form-card"
      title="Новое место"
      isLoading={props.isLoading ? "Создание..." : "Создать"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__field">
        <input
          id="title-input"
          className="form__item form__item_title"
          type="text"
          name="title"
          placeholder="Название"
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleAddName}
          ref={nameRef}
          required
        />
        <span id="title-input-error" className="form__item-error" />
      </label>
      <label className="form__field form__field-info">
        <input
          id="url-input"
          className="form__item form__item_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          value={link}
          onChange={handleAddLink}
          ref={linkRef}
          required
        />
        <span id="url-input-error" className="form__item-error" />
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
