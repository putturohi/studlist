import React from 'react'
const Studentcard = (props)=>{
    const {id,name,email} = props.student;
return(
    <div className="item">
        <div className="content">
    <div className="header"> {name}</div>
    <div> {email} </div>
    </div>

</div>
);
};
export default Studentcard;
