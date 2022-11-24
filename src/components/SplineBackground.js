// import React from 'react'

// export function SplineBackground() {
//   return (
//     <>
//       <iframe
//         className='background w-screen h-screen p-0 m-0 inset-0 absolute'
//         src='https://my.spline.design/cloud-6eabc52448ff40d54c2a2e812a09dfaa/'
//         frameBorder='0'
//         title='Spline Cloud Background'
//       ></iframe>
//     </>
//   )
// }

import Spline from '@splinetool/react-spline'

export function SplineBackground() {
  return (
    <Spline scene='https://prod.spline.design/ptvxEHJoIsLsDpTw/scene.splinecode' />
  )
}
