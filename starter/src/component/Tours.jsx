import Tour from './Tour'
const Tours = ({ tours, removeTour }) => {
  return (
    <section className='tours'>
     
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />
      })}
    </section>
  )
}

export default Tours
