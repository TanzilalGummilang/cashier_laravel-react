export default function TableProduct({ products }) {
  // console.log(products)
  return (

    <div className="overflow-x-auto">
      <table className="table table-compact lg:w-1/2 text-left">

        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>


        <tbody>
          {products.map((data, i) => {
            return (
              <tr key={i}>
                <th>{i+1}</th>
                <td>{data.name}</td>
                <td>{data.price}</td>
              </tr>
            )
          })}
        </tbody>

        <tfoot>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </tfoot>

      </table>
    </div>
  )
}