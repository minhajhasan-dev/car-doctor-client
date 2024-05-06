const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const {
    _id,
    customerName,
    customerEmail,
    img,
    date,
    dueAmount,
    serviceName,
    status,
  } = booking;

  return (
    <tr>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-square"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-xs font-semibold">{date}</div>
          </div>
        </div>
      </td>
      <td> {customerName}</td>
      <td>{customerEmail}</td>
      <td>{dueAmount}</td>
      <th>
        {status === "confirmed" ? (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn text-white btn-success btn-xs"
          >
            Confirmed
          </button>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-warning text-white px-4 py-1  btn-xs"
          >
            Pending
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
