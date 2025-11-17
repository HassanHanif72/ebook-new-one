import React from 'react'
import { Col } from 'react-bootstrap'

const SecFiveContent = ({ image, number, title, desc, reverse = false, whiteText }) => {
    return (
        <>
            {
                !reverse ? (
                    <>
                        <Col xl={5} lg={5} md={5}>
                            <div className="left-col">
                                <img src={image} alt="" className="w-100" />
                            </div>
                        </Col>
                        <Col xl={5} lg={5} md={5}>
                            <div className="right-col">
                                <div className="right-col-inner">
                                    <span className={whiteText ? 'text-white' : ''}>{number}</span>
                                    <h4 className={whiteText ? 'text-white' : ''}>{title}</h4>
                                    <p className={whiteText ? 'text-white' : ''}>{desc}</p>
                                </div>
                            </div>
                        </Col>
                    </>
                ) : (
                    <>
                        <Col xl={5} lg={5} md={5}>
                            <div className="left-col">
                                <div className="left-col-inner">
                                    <span className={whiteText ? 'text-white' : ''}>{number}</span>
                                    <h4 className={whiteText ? 'text-white' : ''}>{title}</h4>
                                    <p className={whiteText ? 'text-white' : ''}>{desc}</p></div>
                            </div>
                        </Col>
                        <Col xl={5} lg={5} md={5}>
                            <div className="right-col">
                                <img src={image} alt="" className="w-100" />
                            </div>
                        </Col>
                    </>
                )
            }

        </>
    )
}

export default SecFiveContent
