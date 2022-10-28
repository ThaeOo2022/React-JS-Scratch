import React from 'react'
const Accordion = ({ items }) => {
    const renderitems = items.map((item) => {
        return (
            <React.Fragment key={item.title}>
                <div className="title active">
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="contect active">
                    <p>{item.content}</p>

                </div>
            </React.Fragment>
        );
    });
    return (
        <div className="ui styled accordion">
            {renderitems}
        </div>
    );
}
export default Accordion;