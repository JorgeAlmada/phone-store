function ProductCarouselComponent() {
  const productList = [
    {
      name: "PRODUCT 1",
      description: "This is the first product",
      price: 199.99,
      img: '/pexels-thepaintedsquare-583842.jpg'
    },
    {
      name: "PRODUCT 2",
      description: "This is the second product",
      price: 299.99,
      img: '/pexels-thepaintedsquare-583842.jpg'
    },
    {
      name: "PRODUCT 3",
      description: "This is the third product",
      price: 399.99,
      img: '/pexels-thepaintedsquare-583842.jpg'
    },
  ];

  return (
    <section className="flex w-full">
      <div className="container flex mx-auto">
        {productList.map((element) => (
          <div className="w-1/3 px-4 mt-8">
            <img
              src={element.img}
              className="w-full h-72"
            />
            <p className="font-bold text-3xl">{element.name}</p>
            <p className="font-light text-xs">{element.description}</p>
            <p className="font-bold mt-12">${element.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCarouselComponent;
