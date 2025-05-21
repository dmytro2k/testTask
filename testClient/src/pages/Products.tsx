import { useState, type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../state/store'
import ProductCard from '../components/Product/ProductCard'
import Modal from '../components/Modal/Modal'

type ProductsProps = {

}

const Products: FC<ProductsProps> = ({}) => {
  const [isModalOpen,setIsModalOpen] = useState(false)
  const products = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch()

  const clickAddBtn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    setIsModalOpen(prev => !prev)
  }

  const clickConfirmBtn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

  }

  const clickCancelBtn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    return setIsModalOpen(prev => !prev)
  }

  return <div>
    <h2>Products: </h2>
    <div>
      <button onClick={clickAddBtn}>add</button>
    </div>
    {products.map(product =>
      <ProductCard>
        <ProductCard.Image src={product.productImageUrl} alt={product.productName}/>
        <ProductCard.Name>{product.productName}</ProductCard.Name>
        <ProductCard.Info count={product.productCount} size={product.productSize} weight={product.productWeight} />
      </ProductCard>
    )}
    <Modal isOpen={isModalOpen}>
      <div>
        <Modal.Button onClick={clickConfirmBtn}>Confirm</Modal.Button>
        <Modal.Button onClick={clickCancelBtn}>Cancel</Modal.Button>
      </div>
    </Modal>
  </div>
}

export default Products