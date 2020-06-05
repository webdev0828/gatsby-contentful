import React from "react"

const Content = ({ children }) => {
    return (
        <section style={{ padding: '9rem 0' }}>
            <div className="container-fluid">
                {children}
            </div>
        </section>
    )
}

export default Content
