// import * as React from 'react'

// // helpers
// const getExclamationMarks = (numChars: number) => {
//   return Array(numChars + 1).join('!')
// }

// // component
// export interface Props {
//   name: string
//   enthusiasmLevel?: number
// }

// const Hello = ({ name, enthusiasmLevel = 1 }: Props) => {
//   if (enthusiasmLevel <= 0) {
//     throw new Error('You could be a little more enthusiastic. :D')
//   }

//   return (
//     <div className="hello">
//       <div className="greeting">
//         Hello {name + getExclamationMarks(enthusiasmLevel)}
//       </div>
//     </div>
//   )
// }

// export default Hello