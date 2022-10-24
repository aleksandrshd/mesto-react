import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({isOpen, onClose, onAddPlace, isLoading}) {

  function useValidation(value, validations) {

    const [isEmptyError, setIsEmptyError] = React.useState(true);
    const [minLengthError, setMinLengthError] = React.useState(false);
    const [maxLengthError, setMaxLengthError] = React.useState(false);
    const [isUrlError, setIsUrlError] = React.useState(false);
    const [inputValid, setInputValid] = React.useState(false);

    React.useEffect(() => {
      for (const validation in validations) {
        switch (validation) {
          case 'minLength':
            value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
            break;
          case 'maxLength':
            value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
            break;
          case 'isEmpty':
            value ? setIsEmptyError(false) : setIsEmptyError(true);
            break;
          case 'isUrl':
            const urlRegExp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
            urlRegExp.test(String(value).toLowerCase()) ? setIsUrlError(false) : setIsUrlError(true);
            break;
        }
      }
    }, [value]);

    React.useEffect(() => {
      if (isEmptyError || minLengthError || maxLengthError || isUrlError) {
        setInputValid(false);
      } else {
        setInputValid(true);
      }
    }, [isEmptyError, minLengthError, maxLengthError, isUrlError])

    return {
      isEmptyError,
      minLengthError,
      maxLengthError,
      isUrlError,
      inputValid
    }
  }

  function useInput(initialValue, validations) {
    const [value, setValue] = React.useState(initialValue);
    const [isDirty, setDirty] = React.useState(false);

    const valid = useValidation(value, validations);

    function onChange(event) {
      setValue(event.target.value);
    }

    function onBlur(event) {
      setDirty(true);
    }

    return {
      value,
      isDirty,
      onChange,
      onBlur,
      ...valid
    }
  }

  const title = useInput('', {isEmpty: true, minLength: 2, maxLength: 30});
  const link = useInput('', {isEmpty: true, isUrl: true});

  const [placeLink, setPlaceLink] = React.useState('');
  const [placeName, setPlaceName] = React.useState('');

  const [formValid, setFormValid] = React.useState(false);

  React.useEffect(() => {
    if (title.inputValid && link.inputValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [title.inputValid, link.inputValid])

  function handlePlaceLinkChange(event) {
    setPlaceLink(event.target.value);
  }

  function handlePlaceNameChange(event) {
    setPlaceName(event.target.value);
  }

  function handleSubmit(event) {

    event.preventDefault();

    onAddPlace(title.value, link.value);

  }

  return (
    <PopupWithForm name="card" title="Новое место"
                   isOpen={isOpen}
                   onClose={onClose}
                   onSubmit={handleSubmit}
                   buttonText={isLoading ? 'Сохранение ...' : 'Создать'}
                   formValid={formValid}>

      <input className="popup__input popup__input_type_title"
             type="text"
             name="title"
             placeholder="Название"
             required minLength="2"
        /*maxLength="30"*/
             value={title.value}
             onChange={title.onChange}
             onBlur={title.onBlur}/>
      <span className="popup__error">{(
        ((title.isDirty && title.isEmptyError) ? 'Название не может быть пустым' : '') ||
        ((title.isDirty && title.minLengthError) ? 'Название не может быть короче 2 символов' : '') ||
        ((title.isDirty && title.maxLengthError) ? 'Название не может быть длинее 30 символов' : '')
      )}</span>
      <input className="popup__input popup__input_type_link"
             type="url"
             name="link"
             placeholder="Ссылка на картинку"
             required
             value={link.value}
             onChange={link.onChange}
             onBlur={link.onBlur}/>
      <span className="popup__error">{
        ((link.isDirty && link.isUrlError) ? 'Url адрес введен некорректно' : '')
      }</span>

    </PopupWithForm>
  );

}

export default AddPlacePopup;