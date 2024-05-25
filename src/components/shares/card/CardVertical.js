// import React from 'react';
// import Image from 'next/image';
// import PropTypes from 'prop-types';
// import Link from 'next/link';
// import { Button } from '@/components/shares/button'

// export const CardVertical = (props) => {
//   const isLink = props.linkPage ? true : false;

//   return (
//     <div className={`flex w-full max-w-lg mx-auto mb-4 rounded-2xl shadow-md ${isLink ? 'hover:shadow-lg' : ''} cursor-pointer`}>
//       {isLink ? (
//         <Link href={props.linkPage}  className="grid grid-cols-3 w-full h-full" style={{ width: '596px', height: '213px' }}>
//             <div className="col-span-1">
//               <Image src={props.image} className="rounded-lg h-full" alt="pic"/>
//             </div>
//             <div className="col-span-2 flex-grow flex flex-col justify-center p-6">
//               <h2 className="bold-24 text-xl mb-2">
//                 {props.title}
//               </h2>
//               <p className="text-sub-text regular-14 text-base" style={{ textAlign: "justify" }}>
//                 {props.description}
//               </p>
//             </div>
//         </Link>
//       ) : (
//         <div className="grid grid-cols-3 w-full h-full" style={{ width: '596px', height: '213px' }}>
//           <div className="col-span-1">
//             <Image src={props.image} className="rounded-lg h-full" alt="pic"/>
//           </div>
//           <div className="col-span-2 flex-grow flex flex-col justify-center p-6">
//             <h2 className="bold-24 text-xl mb-2">
//               {props.title}
//             </h2>
//             <p className="text-sub-text regular-14 text-base" style={{ textAlign: "justify" }}>
//               {props.description}
//             </p>
//             <p className="semibold-14 text-positive-2">
//                 Score: 100%

//             </p>
//             <div className="flex justify-between mt-4">
//               <Button type="small" title="Test" />
//               <div className="ml-1">
//                 <Button type="small-secondary" title="Evaluate" />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// CardVertical.propTypes = {
//   linkPage: PropTypes.string,
//   image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };


"use client"

import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '@/components/shares/button';

export const CardVertical = (props) => {
  const { linkPage, image, title, description } = props;
  const isLink = Boolean(linkPage);

  return (
    <div className={`flex w-full max-w-lg mx-auto mb-4 rounded-2xl shadow-md ${isLink ? 'hover:shadow-lg' : ''} cursor-pointer`}>
      {isLink ? (
        <Link href={linkPage} className="grid grid-cols-3 w-full h-full" style={{ width: '596px', height: '213px' }}>
          <div className="col-span-1">
            <Image src={image} className="rounded-lg h-full" alt="pic" />
          </div>
          <div className="col-span-2 flex-grow flex flex-col justify-center p-6">
            <h2 className="bold-24 text-xl mb-2">
              {title}
            </h2>
            <p className="text-sub-text regular-14 text-base" style={{ textAlign: "justify" }}>
              {description}
            </p>
          </div>
        </Link>
      ) : (
        <div className="grid grid-cols-3 w-full h-full" style={{ width: '596px', height: '213px' }}>
          <div className="col-span-1">
            <Image src={image} className="rounded-lg h-full" alt="pic" />
          </div>
          <div className="col-span-2 flex-grow flex flex-col justify-center p-6">
            <h2 className="bold-24 text-xl mb-2">
              {title}
            </h2>
            <p className="text-sub-text regular-14 text-base" style={{ textAlign: "justify" }}>
              {description}
            </p>
            <p className="semibold-14 text-positive-2">
              Score: 100%
            </p>
            <div className="flex justify-between mt-4">
              <Button type="small" title="Test" />
              <div className="ml-1">
                <Button type="small-secondary" title="Evaluate" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

CardVertical.propTypes = {
  linkPage: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};