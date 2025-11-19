'use client'
import { useModal } from '@/context/ModalContext'
import React from 'react'


const Button = () => {

    const { modalShow } = useModal();

    return (
        <div className="btn-sec">
            <button onClick={modalShow} className="btn btn-theme">Get Started </button>
        </div>
    )
}

export default Button
