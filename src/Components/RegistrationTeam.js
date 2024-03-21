import React, { useState } from "react";
import { db, firebase } from "../db.js";

function RegistrationTeam() {
  async function sendInfo(e) {
    e.preventDefault();

    const studentsRef = db.collection("participantsTeam");
    if (
      teamName !== "" &&
      schoolName !== "" &&
      grade !== "" &&
      participants !== "" &&
      contacts !== "" &&
      checkbox1 &&
      checkbox2 &&
      checkbox3
    ) {
      await studentsRef.add({
        teamName: teamName,
        schoolName: schoolName,
        grade: grade,
        participants: participants,
        mentors: mentors,
        contacts: contacts,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setError(false);
      setTeamName("");
      setSchoolName("");
      setGrade("");
      setParticipants("");
      setMentors("");
      setContacts("");
      setRegistered(true);
    } else {
      console.log("empty field");
      setError(true);
      setRegistered(false);
    }
  }

  const [teamName, setTeamName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [grade, setGrade] = useState("");
  const [participants, setParticipants] = useState("");
  const [mentors, setMentors] = useState("");
  const [contacts, setContacts] = useState("");
  const [registered, setRegistered] = useState(false);
  const [checkbox1, setCheckbox1] = useState("");
  const [checkbox2, setCheckbox2] = useState("");
  const [checkbox3, setCheckbox3] = useState("");
  const [error, setError] = useState(false);

  console.log(error);

  return (
    <div className="reg">
      <h3>Регистрация</h3>
      <a></a>
    </div>
  );
}

export default RegistrationTeam;
