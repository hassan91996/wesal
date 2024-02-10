import React from 'react'
import './PageError.css'
import { Container } from 'react-bootstrap'

const PageError = () => {
    return (
        <div className='error-con py-3 py-lg-5'>
            <Container className='py-3 text-center why-data'>
                <h1 className='mb-3'>404</h1>
                <h5>Page Not Found</h5>
            </Container>
        </div>
    )
}

export default PageError