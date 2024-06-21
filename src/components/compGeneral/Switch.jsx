import React from 'react'

export const Switch = ({ handleStateServed, message, setServed }) => {

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input className="sr-only peer" type="checkbox" checked={message.atendido} onChange={(e) => {
                setServed(e.target.checked)
                handleStateServed(message)
            }} />
            <div className="peer rounded-full outline-none duration-100 after:duration-500 w-28 h-14 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['No'] after:absolute after:outline-none after:rounded-full after:h-12 after:w-12 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['Yes'] peer-checked:after:border-white">
            </div>

        </label>
    )
}
