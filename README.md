
# OM-Product-Card

### Esto es una prueba de paquete en NPM

### Oscar Martinez

## Ejemplo

```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "om-product-card";
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 5,
    maxCount: 10,
  }}
>
  {
    ({reset, count, increaseBy, isMaxCounterReached, maxCount}) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }
</ProductCard>
```