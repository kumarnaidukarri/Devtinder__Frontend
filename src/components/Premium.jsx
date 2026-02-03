// Premium Component used to show Buy 'Membership Plans' using 'Payment Gateway'.

const Premium = () => {
  return (
    <div>
      <h1 className="my-4 mb-8"> Premium Page </h1>

      {/* DaisyUI component - Divider horizontal */}
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-auto grow place-items-center  px-4 py-12 gap-4 justify-center">
          <h1 className="font-bold text-xl"> Silver Membership </h1>
          <ul>
            <li> - Chat with other people</li>
            <li> - 100 Connection requests per day </li>
            <li> - No Blue tick mark </li>
            <li> - 1 Month </li>
          </ul>
          <button className="btn btn-secondary"> Buy Silver </button>
        </div>

        <div className="divider divider-horizontal">OR</div>

        <div className="card bg-base-300 rounded-box grid h-auto grow place-items-center px-4 py-12 justify-center">
          <h1 className="font-bold text-xl"> Gold Membership </h1>
          <ul>
            <li> - Chat with other people</li>
            <li> - Infinite Connection requests per day </li>
            <li> - Blue tick mark </li>
            <li> - 3 Months </li>
          </ul>
          <button className="btn btn-primary"> Buy Gold </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
