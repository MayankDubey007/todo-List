import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position:"absolute",
        my:"0",
        width:"100%"

    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; MyTodoList.Com
            </p>

        </footer>
    )
}
