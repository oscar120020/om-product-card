import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard } from '../../src/components'
import { product1 } from '../data/products'

const { act } = renderer

describe("ProductCard", () => {
    test('debe mostrar el componente correctamente ', () => { 
        const wrapper = renderer.create(
            <ProductCard  product={product1}>
            {
                () => (
                    <h1>Product Card</h1>
                )
            }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe incrementar el contador', () => { 
        const wrapper = renderer.create(
            <ProductCard  product={product1}>
            {
                ({count, increaseBy}) => (
                    <>
                        <h1>Product Card</h1>
                        <span>{count}</span>
                        <button onClick={() => increaseBy(2)} ></button>
                    </>
                )
            }
            </ProductCard>
        )

        let tree: any = wrapper.toJSON();
        expect(tree).toMatchSnapshot();

        act(() => {
            tree.children[2].props.onClick()
        })

        tree = wrapper.toJSON();
        expect(tree.children[1].children[0]).toEqual("2")
        
    })
})