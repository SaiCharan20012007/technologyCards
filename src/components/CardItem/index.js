// Write your code here.
import './index.css'

const Tech = props => {
  const {techDetails} = props
  const {title, description, imgUrl, className} = techDetails
  return (
    <li className={className}>
      <h3 className="heading">{title}</h3>
      <p className="para">{description}</p>
      <img src={imgUrl} alt={title} />
    </li>
  )
}

export default Tech
