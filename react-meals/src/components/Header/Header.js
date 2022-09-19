import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header_content">
        <a href="#" className="header_brand">ReactMeals</a>
        <div className="header_chart">
          &#128722; Your Chart <span className="header_chart-count">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;