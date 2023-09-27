const DonationPageCard = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
    description,
    price,
  } = donation || {};
  return (
    <div>
      <div
        style={{ background: card_bg_color }}
        className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            alt="image"
            className="h-[207px] w-full object-cover"
          />
        </div>
        <div className="p-4">
          <div>
            <h2
              style={{
                background: category_bg_color,
                color: text_button_bg_color,
              }}
              className="text-center text-sm px-16 font-medium w-1/3 py-2 rounded-lg pl-2"
            >
              {category}
            </h2>
          </div>
          <h4 className="mb-2 text-[#0B0B0B]  block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p
            style={{ color: text_button_bg_color }}
            className="mb-8 block font-sans text-base font-semibold leading-relaxed text-gray-700 antialiased"
          >
            ${price}
          </p>

          <button
            style={{ background: text_button_bg_color }}
            className="text-white px-4 py-2 rounded-md"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationPageCard;
