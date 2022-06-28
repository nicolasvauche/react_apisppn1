const Grid = ({ items }) => {
  return (
    <div className='app-grid'>
      {items.map(item => (
        <div className='grid-item' key={item.id}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Grid
