import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const product = {
  id: "1",
  title: "Coffe Mug - Card!!",
  image: "coffee-mug.png",
}

const App = () => {
  return (
    <ProductCard
      product={product}
      initialValues={{
        count: 5,
        maxCount: 10,
      }}
    >
      {({ reset, count, increaseBy, isMaxCounterReached, maxCount }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
