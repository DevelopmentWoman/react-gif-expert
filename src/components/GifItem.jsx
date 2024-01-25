import PropTypes from 'prop-types'

export const GifItem = ({title,url})=>{

  // let {title, id} = image
  console.log(title)

  return (
    <div ClassName="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}


GifItem.PropTypes={
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}


