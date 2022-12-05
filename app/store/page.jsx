import { ListOfProducts } from './ListOfProducts'
import { MainStore } from './MainStore'

export default function StoreHomePage () {
  return (
    <div className='container-md'>
      <MainStore />
      <ListOfProducts />
    </div>
  );
}
