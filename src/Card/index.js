import React from 'react';

const Title = (props) => <div className="card-title">{props.children}</div>;
const Body = (props) => <div className="card-body">{props.children}</div>;

const Card = ({children}) => <div className="card card-block">
    {children}
</div>;

Card.Body = Body;
Card.Title = Title;

console.log(Card.name);

export default Card;