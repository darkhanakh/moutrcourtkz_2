import React, { useState } from "react";
import { db, firebase } from "../db.js";

function RegistrationTeam() {
  async function sendInfo(e) {
    e.preventDefault();

    const studentsRef = db.collection("participantsIndividual");
    if (
      name != "" &&
      schoolName != "" &&
      grade != "" &&
      contacts != "" &&
      checkbox1 &&
      checkbox2 &&
      checkbox3
    ) {
      setError(false);
      setName("");
      setSchoolName("");
      setGrade("");
      setMentors("");
      setContacts("");
      setRegistered(true);
      await studentsRef.add({
        name: name,
        schoolName: schoolName,
        grade: grade,
        mentors: mentors,
        contacts: contacts,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } else {
      console.log("empty field");
      setError(true);
      setRegistered(false);
    }
  }

  const [name, setName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [grade, setGrade] = useState("");
  const [mentors, setMentors] = useState("");
  const [contacts, setContacts] = useState("");
  const [registered, setRegistered] = useState(false);
  const [checkbox1, setCheckbox1] = useState("");
  const [checkbox2, setCheckbox2] = useState("");
  const [checkbox3, setCheckbox3] = useState("");
  const [error, setError] = useState(false);

  return (
    <div className="reg individual">
      <h3>Регистрация без команды</h3>
      <p></p>
      {registered ? (
        <div>
          <form onSubmit={sendInfo} className="reg-form">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ФИО участника*"
            />
            <input
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              placeholder="Наименование школы*"
            />
            <input
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="Классы обучения*"
            />
            <input
              value={mentors}
              onChange={(e) => setMentors(e.target.value)}
              placeholder="Тренеры (если имеются)"
            />
            <input
              value={contacts}
              onChange={(e) => setContacts(e.target.value)}
              placeholder="Контактные данные (телефон,эл.почта участников команды, тренеров)*"
            />
            <span className="invisible-padding" />
            <div className="checkbox-container">
              <input
                checked={checkbox1}
                onChange={(e) => setCheckbox1(e.target.checked)}
                className="checkbox"
                type="checkbox"
              />
              <p className="checkbox-p">
                «Отправлением настоящей регистрационной формой подтверждаем
                участие в Moot Court for High School Правовой конкурс «Игровой
                судебный процесс для учеников старшей школы»»
              </p>
            </div>
            <div className="checkbox-container">
              <input
                checked={checkbox2}
                onChange={(e) => setCheckbox2(e.target.checked)}
                className="checkbox"
                type="checkbox"
              />
              <p className="checkbox-p">
                «Даю свое согласие на обработку и использование персональных
                данных»
              </p>
            </div>
            <div className="checkbox-container">
              <input
                checked={checkbox3}
                onChange={(e) => setCheckbox3(e.target.checked)}
                className="checkbox"
                type="checkbox"
              />
              <p className="checkbox-p">
                Отправлением настоящей регистрационной формы подтверждаю свое
                ознакомление с Регламентом конкурса
              </p>
            </div>
            <button type="submit" className="form-btn">
              Отправить заявку
            </button>
          </form>
          <h6 className="feedback-text" id="success-text">
            Вы успешно зарегистрировались на Moot Court Kazakhstan for High
            School!
          </h6>
        </div>
      ) : (
        <div>
          <form onSubmit={sendInfo} className="reg-form">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ФИО участника*"
            />
            <input
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              placeholder="Наименование школы*"
            />
            <input
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="Классы обучения*"
            />
            <input
              value={mentors}
              onChange={(e) => setMentors(e.target.value)}
              placeholder="Тренеры (если имеются)"
            />
            <input
              value={contacts}
              onChange={(e) => setContacts(e.target.value)}
              placeholder="Контактные данные (телефон,эл.почта участников команды, тренеров)*"
            />
            <span className="invisible-padding" />
            <div className="checkbox-container">
              <input
                checked={checkbox1}
                onChange={(e) => setCheckbox1(e.target.checked)}
                className="checkbox"
                type="checkbox"
              />
              <p className="checkbox-p">
                «Отправлением настоящей регистрационной формой подтверждаем
                участие в Moot Court for High School Правовой конкурс «Игровой
                судебный процесс для учеников старшей школы»»
              </p>
            </div>
            <div className="checkbox-container">
              <input
                checked={checkbox2}
                onChange={(e) => setCheckbox2(e.target.checked)}
                className="checkbox"
                type="checkbox"
              />
              <p className="checkbox-p">
                «Даю свое согласие на обработку и использование персональных
                данных»
              </p>
            </div>
            <div className="checkbox-container">
              <input
                checked={checkbox3}
                onChange={(e) => setCheckbox3(e.target.checked)}
                className="checkbox"
                type="checkbox"
              />
              <p className="checkbox-p">
                Отправлением настоящей регистрационной формы подтверждаю свое
                ознакомление с Регламентом конкурса
              </p>
            </div>
            <button type="submit" className="form-btn">
              Отправить заявку
            </button>
            {error ? (
              <h6 className="feedback-text" id="error-text">
                Ошибка: заполните нужные поля
              </h6>
            ) : (
              ""
            )}
          </form>
        </div>
      )}
    </div>
  );
}

export default RegistrationTeam;
