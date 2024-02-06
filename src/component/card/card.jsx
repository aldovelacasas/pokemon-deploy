/* eslint-disable react/prop-types */
import "./card.css";

function Card({ name, details }) {
  const abilities = details.abilities;
  const frontDefaultImage =
    details.sprites.other["official-artwork"].front_default;

  return (
    <div className="card">
      <div className="card-content">
        {frontDefaultImage && (
            <img
            src={frontDefaultImage}
            alt={`Imagen de ${name}`}
            className="pokemon-image"
            />
            )}
            <h2 className="pokemon-name">{name}</h2>
        <p>Base Experience: {details.base_experience}</p>
      </div>

      <div className="abilities">
        {/* <h3 className="abilities-heading">Abilities:</h3> */}
        <ul className="ability-list">
          {abilities.map((abilityData, index) => (
            <li key={index} className="ability">
              {abilityData.ability.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
