import links from "../../assets/links";
import "./index.css";

const Gallery = () => {
  return (
    <div className="Gallery">
      {links.map((link) => (
        <div key={link.id}>
          <img src={link.url} alt="" />
          <p>{link.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
