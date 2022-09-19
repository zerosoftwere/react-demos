import './Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-background'></div>
      <div className='banner-content'>
        <h1 className='banner-title'>Delicious Food, Delivered To You</h1>
        <div className='banner-body'>
          <p>Choose your favorite meal from our broad selection if 
            available meals and enjoy a delicious lunch or dinner at home.</p>
            <p>All our meals are cooked with high-quarlity ingredients, just-in-time and of course by experienced chefs!</p>
        </div>
      </div>
    </div>
  )
};

export default Banner;