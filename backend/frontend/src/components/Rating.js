import React from 'react'

function Rating({ value, text, color }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      
      <span key={i}>
        <i style={{ color }} className={
          value >= i
            ? 'fas fa-star'
            : value >= i - 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
        }>
        </i>
      </span>
    );
  }

  return (
    <div className='rating'>
      {stars}
      {text && <span>{text}</span>}
    </div>
  );
}

export default Rating;





// import React from 'react'

// function Rating({value, text, color}) {
//   return (
//     <div className='rating'>
//       <span>
//         <i style={{ color }} className={
//             value >= 1
//                 ? 'fas fa-star'
//                 : value >= 0.5
//                     ? 'fas fa-star-half-alt'
//                     : 'far fa-star'
//         }>

//         </i>
//       </span>
//       <span>
//         <i style={{ color }} className={
//             value >= 2
//                 ? 'fas fa-star'
//                 : value >= 1.5
//                     ? 'fas fa-star-half-alt'
//                     : 'far fa-star'
//         }>

//         </i>
//       </span>
//       <span>
//         <i style={{ color }} className={
//             value >= 3
//                 ? 'fas fa-star'
//                 : value >= 2.5
//                     ? 'fas fa-star-half-alt'
//                     : 'far fa-star'
//         }>

//         </i>
//       </span>
//       <span>
//         <i style={{ color }} className={
//             value >= 4
//                 ? 'fas fa-star'
//                 : value >= 3.5
//                     ? 'fas fa-star-half-alt'
//                     : 'far fa-star'
//         }>

//         </i>
//       </span>
//       <span>
//         <i style={{ color }} className={
//             value >= 5
//                 ? 'fas fa-star'
//                 : value >= 4.5
//                     ? 'fas fa-star-half-alt'
//                     : 'far fa-star'
//         }>

//         </i>
//       </span>
//     </div>
//   )
// }

// export default Rating
