import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

export const CardStack = (props) => {

    return (
        <Link href={ props.linkPage }>
            <div className="rounded-xl overflow-hidden transition-shadow duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer"  style={{ width: '350px', height: '443px' }}>
                <Image src={props.image} className="w-full" alt="pic" layout="fixed"/>
                <div className="px-6 pt-8 pb-12">
                    <div className="bold-24 text-xl mb-2">
                        { props.title }
                    </div>
                    <p className="text-sub-text regular-14 text-base" style={{ textAlign: "justify" }}>
                        { props.description }
                    </p>
                </div>
            </div>
        </Link>
    );
}

CardStack.propTypes = {
    linkPage: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};