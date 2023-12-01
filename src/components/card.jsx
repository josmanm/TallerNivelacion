import './card.scss'
const Card = ({product,navigate}) => {
  return (
    <figure onClick={()=>navigate(product.title)}>
        <img src={product.thumbnail} alt="" />
    </figure>
  )
}

export default Card;