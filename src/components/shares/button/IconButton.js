import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import sound from '/public/images/word/sound.svg';

export const RoundIconButton = (props) => {
    return (
        <button
            className="bg-body-text hover:bg-sub-text rounded-full flex items-center justify-center"
            onClick={props.onClick}
            style={{ width: '60px', height: '60px' }} 
        >
            <Image src={ sound } alt="sound" width={30} height={30}/>
        </button>
    );
};

RoundIconButton.propTypes = {
    onClick: PropTypes.func,
};
