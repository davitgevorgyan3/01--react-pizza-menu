const Order = ({openHour , closeHour}) => {
  return (
    <div>
        <p>
            We are open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
        </p>
        <button className="btn">Order</button>
    </div>
  )
}

export default Order