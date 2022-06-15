
import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard, ProductImage } from '../../src/components'
import { product1 } from '../data/products'

describe("ProductImage", () => {
    test('debe mostrar el componente correctamente con la imagen personalizada', () => { 
        const wrapper = renderer.create(
            <ProductImage image='jugo de piña' />
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe mostrar el componente ProductImage sin props', () => { 
        const wrapper = renderer.create(
            <ProductCard
                product={product1}
            >   
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})