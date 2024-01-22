import React from 'react'

const InfoCard = ({data}) => {
    return (
        <div className="card card-width" style={{ border: 'none', paddingTop: "15px", paddingBottom: "15px" }}>
            <img src={data?.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">
                    <div>
                        <h3>Title:</h3>{data.title}
                    </div>
                </p>
            </div>
        </div>
    )
}

export default InfoCard