import React ,{useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import Product from '../Components/Product'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import Paginate from '../Components/Paginate'
import { listProducts } from '../actions/productActions'
import { useParams } from 'react-router-dom'
import Meta from '../Components/Meta'
import ProductCarousel from '../Components/ProductCarousel'

 const HomeScreen = () => {
  let { keyword } = useParams()

  let { pageNumber} = useParams() || 1

 const dispatch = useDispatch()

const productList =useSelector(state => state.productList)
const { loading, error, products , page, pages} = productList

  useEffect(() =>{
     dispatch(listProducts(keyword, pageNumber))
  },[dispatch, keyword, pageNumber])

  
  return (
    <>
     <Meta />
    {!keyword ? (<ProductCarousel /> ) : (
    <Link to='/' className='btn btn-light'> Go Back</Link>)}
      <h1>Latest Products</h1>
      {loading ? (<Loader />)
      : error ? (<Message variant='danger'>{error}</Message>
      ):(
        <>
        <Row>
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={3} xl={2}>
               <Product product={product} />
            </Col>
        ))}
      </Row>
      <Paginate 
       pages={pages}
       page={page} 
       keyword={keyword ? keyword : ''}

       />
      </>
      ) }
    </>
  )
}

export default HomeScreen
