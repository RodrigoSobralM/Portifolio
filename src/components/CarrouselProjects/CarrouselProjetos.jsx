import React, { useEffect, useState } from "react";
import "./index.scss";

const CarrouselProjetos = () => {
  const descriptions = [
    "descrição 1",
    "descrição 2",
    "descrição 3",
    "descrição 4",
    "descrição 5",
  ];

  const [activePos, setActivePos] = useState(0);
  const [description, setDescription] = useState(descriptions[0]);

  useEffect(() => {
    const state = {};
    const carouselList = document.querySelector(".carousel__list");
    const carouselItems = document.querySelectorAll(".carousel__item");
    const elems = Array.from(carouselItems);

    carouselList.addEventListener("click", function (event) {
      var newActive = event.target;
      var isItem = newActive.closest(".carousel__item");

      if (!isItem || newActive.classList.contains("carousel__item_active")) {
        return;
      }

      update(newActive);
    });

    const update = function (newActive) {
      const newActivePos = parseInt(newActive.dataset.pos, 10);
    
      const current = elems.find((elem) => elem.dataset.pos == 0);
      const prev = elems.find((elem) => elem.dataset.pos == -1);
      const next = elems.find((elem) => elem.dataset.pos == 1);
      const first = elems.find((elem) => elem.dataset.pos == -2);
      const last = elems.find((elem) => elem.dataset.pos == 2);
    
      current.classList.remove("carousel__item_active");
    
      if (newActivePos < 0) {
        setActivePos(2);
      } else if (newActivePos > 2) {
        setActivePos(-2);
      } else {
        setActivePos(newActivePos);
      }
    
      [current, prev, next, first, last].forEach((item) => {
        var itemPos = item.dataset.pos;
    
        item.dataset.pos = getPos(itemPos, newActivePos);
      });
    
      setDescription(descriptions[newActivePos]);
    };

    const getPos = function (current, active) {
      const diff = current - active;

      if (Math.abs(current - active) > 2) {
        return -current;
      }

      return diff;
    };
  }, []);

  return (
    <div className="geralProjects">
      <h1>Projects:</h1>
      <div className="carousel">
        <ul className="carousel__list">
          <li className="carousel__item" data-pos="-2">
            Em Breve
          </li>
          <li className="carousel__item" data-pos="-1">
            Em Breve
          </li>
          <li className="carousel__item" data-pos="0">
            Em Breve
          </li>
          <li className="carousel__item" data-pos="1">
            Em Breve
          </li>
          <li className="carousel__item" data-pos="2">
            Em Breve
          </li>
        </ul>
        <div className="carousel__descricaoProject">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarrouselProjetos;
