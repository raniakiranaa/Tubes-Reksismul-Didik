import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Arrow } from '/public/icons/arrow'

export const Button = (props) => {
    let custom, arrowCust, size;

    if (props.type === "small") {
        custom = "bg-blue-2 medium-16 text-white py-2 px-3"
        arrowCust = "fill-white"
        size = "w-10"
    } else if (props.type === "small-secondary") {
        custom = "bg-transparent text-blue-2 medium-16 py-2 px-3 border border-blue-2"
        arrowCust = "fill-blue-2"
        size = "w-10"
    } else if (props.type === "medium") {
        custom = "bg-blue-2 medium-24 text-white py-4 px-6"
        arrowCust = "fill-white"
        size = "w-12"
    } else if (props.type === "medium-secondary") {
        custom = "bg-transparent text-blue-2 py-4 px-6 medium-24 border border-blue-2"
        arrowCust = "fill-blue-2"
        size = "w-12"
    } else if (props.type === "large") {
        custom = "bg-blue-2 medium-32 text-white py-4 px-8"
        arrowCust = "fill-white"
        size = "w-16"
    } else if (props.type === "large-secondary") {
        custom = "bg-transparent text-blue-2 medium-32 py-4 px-8 border border-blue-2"
        arrowCust = "fill-blue-2"
        size = "w-16"
    }

    return (
        <Link href={props.linkPage}>
            <div className={`flex items-center justify-center ${custom} rounded-full hover:shadow-lg`}>
                {props.title === 'Back' ? (
                    <div className="flex flex-row items-center mr-6">
                        <div className={`pr-4 ${size}`}>
                            <Arrow fillClassName={arrowCust} flipHorizontal={ true }/>
                        </div>
                        {props.title}
                    </div>
                ): (
                    <div className='flex flex-row items-center ml-6'>
                        {props.title}
                        <div className={`pl-4 ${size}`}>
                            <Arrow fillClassName={arrowCust} flipHorizontal={ false }/>
                        </div>
                    </div>
                )} 
            </div>
        </Link>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf([
        "small",
        "small-secondary",
        "medium",
        "medium-secondary",
        "large",
        "large-secondary",
    ]),
    linkPage: PropTypes.string,
    title: PropTypes.string.isRequired,
};