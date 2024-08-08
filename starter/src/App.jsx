import { useState, useEffect } from 'react'
import Loading from './component/Loading'
import Tours from './component/Tours'
const App = () => {
  const [tours, setTours] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [refetch, setRefetch] = useState(false)
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id))
  }
  async function getData() {
    const url = 'https://www.course-api.com/react-tours-project'
    setIsLoading(true)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const json = await response.json()
      setTours(json)
    } catch (error) {
      console.error(error.message)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <h1 className="title">Our Tours</h1>
        <button
          type="button"
          className="btn"
          style={{ marginTop: '30px', marginInline: 'auto' }}
          onClick={() => getData()}
        >
          Refetch
        </button>
      </main>
    )
  }
  return (
    <main>
      <h1 className="title">Our Tours</h1>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
export default App
