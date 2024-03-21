import React, { useState, useEffect } from "react";
import { db } from "../db.js";
import "../Style/Results.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
function Results() {
  const [resData, setResData] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    if (db) {
      const allData = db
        .collection("results")
        .orderBy("createdAt")
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setResData(data);
        });

      return allData;
    }
  }, [db]);

  return (
    <div className="results">
      {resData == "" ? (
        <div className="results-null">
          <h5>{t("results")}</h5>
        </div>
      ) : (
        resData.map((results) => (
          <div className="stack">
            <h3>{results.title}</h3>
            <img className="main-img" src={results.featuredImage} />
            <p>{results.text}</p>
            <h4>Галерея</h4>
            <div className="gallery">
              {results.imagesURL.map((img, i) => (
                <div className="photo">
                  <img className="sub-img" src={img} />
                  <p className="sub-p">{results.imagesCaption[i]}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Results;
