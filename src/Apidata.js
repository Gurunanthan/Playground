// import React from 'react'
// import { useState } from 'react'
// const Apidata = () => {
//   const [items,setItems]=useState([
//     {
//         id:1,
//         item:'rice',
//         varitey:['ponni','samba','seeragasamba','ir20'],
//         brand:[{
//           firstclass:'maharaja',
//           secondclass:'royal'
//         }],
//         serialno:1201
//     },
//     {
//         id:2,
//         item:'wheat',
//         varitey:['maida','sooji','ration'],
//         brand:[{
//           firstclass:'indiagate',
//           secondclass:'royal'
//         }],
//         serialno:1202
//     },
//     {
//         id:3,
//         item:'millet',
//         varitey:['horsegram','ragi','bengal gram'],
//         brand:[{
//           firstclass:'pilsbury',
//           secondclass:'royal'
//         }],
//         serialno:1301
//     }

//   ])
//   return (
//     <div><br></br>
//       <h2>Api data</h2>
//       <table>
//         {items.map((items)=>(
//             <tr>
//                 <td>{items.id} {items.item}</td>
//                 <td>{items.varitey[0]}</td>
//                 <td>{items.varitey[1]}</td>
//                 <td>{items.varitey[2]}</td>
//                 <td>{items.brand[0].firstclass}</td>
//             </tr>
            
//         ))}

//       </table>
//     </div>
//   )
// }

// export default Apidata






import React from 'react'
import { useState } from 'react'
const Apidata = () => {
  // const api=([
  //   {
  //     id:1,
  //     available:true,
  //     item:"Rice",
  //     color:"blue"
  //   },
  //   {
  //     id:2,
  //     available:false,
  //     item:"Wheat",
  //     color:"green"
  //   },
  //   {
  //     id:3,
  //     available:true,
  //     item:"millets",
  //     color:"yellow"
  //   },
  //   {
  //     id:4,
  //     available:false,
  //     item:"grains",
  //     color:"red"
  //   }
  // ])
  // const [items,setItems]=useState(api);
  const [items,setItems] = useState([
    {
      id:1,
      available:true,
      item:"Rice",
      color:'blue'
    },
    {
      id:2,
      available:false,
      item:"Wheat",
      color:'green'
    },
    {
      id:3,
      available:true,
      item:"millets",
      color:'yellow'
    },
    {
      id:4,
      available:false,
      item:"grains",
      color:"red"
    }
  ])
  
  return (
    <div className='App container'>
      <h1>Apidata</h1>
      <ul>
        {items.map((items)=>(
          <li key={items.id}>
            {items.item}
              <input type="checkbox" defaultChecked={items.available} style={{background:`${items.color}`}}></input>
          </li>

        ))}

      </ul>
      
    </div>
  )
}

export default Apidata