// Importing required CSS styling for the Card component
import "../Style/home.css";

// Defining the Props interface to specify the types of props expected by the Card component
interface Props {
  name: string;       // Name of the item
  price: number;      // Price of the item
  imgsrc: string;     // Image source URL for the item
  category: string;   // Category of the item
}

// Defining the Card functional component with destructured props
const Card = ({ name, price, imgsrc, category }: Props) => {
  return (
    <div className="item">
      {/* Displaying the item image */}
      <img src={imgsrc} alt={`${name}`} />

      {/* Displaying the item name */}
      <h4>{name}</h4>

      {/* Displaying the item category */}
      <p>{category}</p>

      {/* Displaying the item price */}
      <ul>
        <li>
          <i className="fa fa-dollar-sign">{price}</i>
        </li>
      </ul>
    </div>
  );
};

// Exporting the Card component for use in other parts of the application
export default Card;
