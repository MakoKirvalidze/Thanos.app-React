import React from 'react';
import { useParams } from 'react-router-dom';

const facts = {
  1: "თანოსი პირველად გამოჩნდა 1973 წელს კომიქსში 'The Invincible Iron Man'.",
  2: "მას აქვს უსასრულობის ხელთათმანი, რომელიც აძლევს კოსმიურ ძალაუფლებას.",
  3: "თანოსის მიზანია სამყაროს მოსახლეობის ნახევრის განადგურება 'ბალანსის' დასამყარებლად.",
  4: "იგი არის ტიტანის პლანეტის მკვიდრი და Eternals-ის წევრი.",
  5: "MCU-ში თანოსს ასახიერებს მსახიობი ჯოშ ბროლინი."
};

function Fact() {
  let { factId } = useParams();
  const fact = facts[factId];

  return (
    <div className="fact">
      <h2>ფაქტი თანოსის შესახებ</h2>
      {fact ? (
        <p>{fact}</p>
      ) : (
        <p className="not-found">ფაქტი ვერ მოიძებნა. სცადეთ სხვა ნომერი 1-დან 5-მდე.</p>
      )}
    </div>
  );
}

export default Fact;