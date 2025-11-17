import React from 'react'
import { Col } from 'react-bootstrap'

const secFourContent = [
    {
        heading: "Article Writing",
        desc: `Let our skilled writers at Ghostwriting Squad
                    breathe life into your ideas with captivating
                    and informative articles tailored to your
                    needs.`
    },
    {
        heading: "Article Writing",
        desc: `Let our skilled writers at Ghostwriting Squad
                    breathe life into your ideas with captivating
                    and informative articles tailored to your
                    needs.`
    },
    {
        heading: "Article Writing",
        desc: `Let our skilled writers at Ghostwriting Squad
                    breathe life into your ideas with captivating
                    and informative articles tailored to your
                    needs.`
    },
    {
        heading: "Article Writing",
        desc: `Let our skilled writers at Ghostwriting Squad
                    breathe life into your ideas with captivating
                    and informative articles tailored to your
                    needs.`
    },
    {
        heading: "Article Writing",
        desc: `Let our skilled writers at Ghostwriting Squad
                    breathe life into your ideas with captivating
                    and informative articles tailored to your
                    needs.`
    },
    {
        heading: "Article Writing",
        desc: `Let our skilled writers at Ghostwriting Squad
                    breathe life into your ideas with captivating
                    and informative articles tailored to your
                    needs.`
    }
]

const SecFourBoxContent = () => {
    return (
        <>
            {
                secFourContent?.map((item, i) => (
                    <Col xl={4} lg={4} md={4} key={i}>
                        <div className="sec-four-box">
                            <i className="ri-checkbox-circle-fill"></i>
                            <h4>{item.heading}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </Col>
                ))
            }
        </>
    )
}

export default SecFourBoxContent
