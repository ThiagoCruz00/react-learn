// function Filho({ children }) {
//   return (
//     <div className="filho">
//       {children}
//     </div>
//   )
// }


// Uso da promp de tipo number

// function Filho({idade}) {
//   return(
//     <p>{idade}</p>
//   )
// }

// function Filho({ approved }) {
//   return (
//     <>
//       {approved ? (
//         <>
//           <p>aprovado</p>
//           <img src="https://pbs.twimg.com/tweet_video_thumb/Fys8siuWIAM11Pe.jpg" alt="" />
//         </>
//       ) : (
//         <>
//           <p>reprovado</p>
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQbB8X1K3GNhUCGjtFx4AzZbBI4TM3g-0m-A&s" alt="" />
//         </>
//       )}

//     </>
//   )
// }

// Isso é verdadeiro ou falso ? retorno : (se não) retorno


// function Filho({onAlert}) {
//   return(
//     <button onClick={onAlert} >Click Aqui</button>
//   )
// }



function Filho({nome = "Mundo"}) {
  return <p>Olá, {nome}!</p>
}

export default function App() {
  
  const handleAlert = () => alert("Receba seu doce")

  return (
    <Filho nome = "Ana" />

  )
}