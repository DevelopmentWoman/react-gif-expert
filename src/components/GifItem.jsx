

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
