
export const Heading = ({
  title,
  description,
  headingClass,
  descriptionnClass,
  ...props
}) => {
  return (
    <div {...props}>
      <h2 className={headingClass}>{title}</h2>
      <p className={descriptionnClass}>{description}</p>
    </div>
  )
}