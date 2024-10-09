import { useDispatch, useSelector } from 'react-redux';
import { clearcar } from "../features/cars/carsSlice";



function CarList() {
  const { cars} = useSelector((state)=>state.counter)
  const dispatch = useDispatch();



  const renderedCars = cars.map((cars, i) => {
    return (
      <div key={i} className='panel'>
        <p>
          {cars.name} - ${cars.price}
        </p>
        <button className='button' onClick={()=>dispatch(clearcar(cars.id))}>
          Sil
        </button>
      </div>
    )
  })

  return (
    <div className='car-list'>
      {renderedCars.length ? (
        renderedCars
      ) : (
        <div className='no-cars'>Başlamak için araba ekleyin</div>
      )}
    </div>
  )
}

export default CarList
