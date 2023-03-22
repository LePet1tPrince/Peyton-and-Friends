import React from 'react'

export default function OtherPatterns(props) {
    const {
        inventory,
    } = props;
  return (
    <div>
        {JSON.stringify(inventory)}
        {inventory.map(item => {
          return <div key={item.id} className="row">
            <div className="col-3">
                <img className="other-images" src={item.image}/>
            </div>
            </div>

        })}
    </div>
  )
}
