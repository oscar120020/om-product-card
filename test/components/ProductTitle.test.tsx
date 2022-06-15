
import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard, ProductTitle } from '../../src/components'
import { product1 } from '../data/products'

describe("ProductTitle", () => {
    test('debe mostrar el componente correctamente con el titulo personalizado', () => { 
        const wrapper = renderer.create(
            <ProductTitle title='custom title' />
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe mostrar el componente ProductCard con el ProductTitle sin props', () => { 
        const wrapper = renderer.create(
            <ProductCard
                product={product1}
            >   
                {
                    () => (
                        <ProductTitle/>
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})