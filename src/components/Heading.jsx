
const Heading = ({
  title,
  description,
  titleClass,
  bold,
  boldClass,
  descriptionnClass,
  
}) => {
  return (
    <>
    
      <h2 className={titleClass}>{title}
      <span className={boldClass}>{bold}</span>
      </h2>
      <p className={descriptionnClass}>{description}</p>
    </>
    
  )
}


export default Heading