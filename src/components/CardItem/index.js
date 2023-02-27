import './index.css'

const CardItem = props => {
  const {w} = props
  const {title, description, imgUrl, className} = w
  return (
    <li>
      <div className={className}>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imgUrl} />
      </div>
    </li>
  )
}

export default CardItem
