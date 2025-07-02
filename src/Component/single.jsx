import { Link } from "react-router-dom";

const Single = ({ title, start, linkText, products }) => {

  const product = products[start];

  return (
    <div className='bg-white  px-5 pt-5 pb-4 text-black'>
      <p className='text-[24px] font-semibold pb-5'>{title}</p>

      <Link to={`/product/${product.id}`}>
        <img
          className='w-[370px] h-[290px] cursor-pointer hover:scale-105 transition-transform duration-200'
          src={product.image}
          alt={product.name}
        />
      </Link>

      <div className='mt-3'>
        <Link className='text-xs text-[#4077ae] hover:text-[#284a67]' to="/kitchen">
          {linkText}
        </Link>
      </div>
    </div>
  );
};
export default Single