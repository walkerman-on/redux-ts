import React from "react"

export const Input = (props:any, { placeholder}: any ) => {
	return <input {...props} className="input" placeholder={placeholder} />
}