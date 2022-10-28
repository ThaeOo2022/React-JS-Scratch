import React, { useState } from 'react'
const Accordion = ({ items }) => {
    const [activeIndex,SetActiveIndex]=useState(null);
    const TitleClick = (index) => {
        console.log('Title clicked', index);
        SetActiveIndex(index);
    }
    const renderitems = items.map((item, index) => {
        const active=index=== activeIndex? "active":"";
        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => TitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>

                </div>
            </React.Fragment>
        );
    });
    return (
        <div className="ui styled accordion">
            {renderitems}
            <h1>{activeIndex}</h1>
        </div>
    );
}
export default Accordion;