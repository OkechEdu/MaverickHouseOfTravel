import React from "react";

import { Button, Img, Input } from "components";

type BookingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Booking: React.FC<BookingProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[38px] items-center justify-start w-full">
          <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-full">
            <Button className="bg-gray-900 cursor-pointer flex-1 font-bold font-manrope py-3 rounded-[10px] text-center text-lg text-white-A700 w-full">
              Buy
            </Button>
            <Button className="bg-gray-300 cursor-pointer flex-1 font-bold font-manrope py-3 rounded-[10px] text-center text-gray-900 text-lg w-full">
              Sell
            </Button>
            <Button className="bg-gray-300 cursor-pointer flex-1 font-bold font-manrope py-3 rounded-[10px] text-center text-gray-900 text-lg w-full">
              Rent
            </Button>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Input
                name="textfieldlarge"
                placeholder="City/Street"
                className="font-manrope font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                suffix={
                  <Img
                    className="mt-auto mb-[5px] h-5 ml-[35px]"
                    src="images/img_location.svg"
                    alt="location"
                  />
                }
              ></Input>
              <Input
                name="textfieldlarge_One"
                placeholder="Property Type"
                className="font-manrope font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                suffix={
                  <Img
                    className="mt-auto mb-[5px] h-5 ml-[35px]"
                    src="images/img_sort.svg"
                    alt="sort"
                  />
                }
              ></Input>
              <Input
                name="textfieldlarge_Two"
                placeholder="Price Range"
                className="font-manrope font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                suffix={
                  <Img
                    className="mt-auto mb-[5px] h-5 ml-[35px]"
                    src="images/img_sort.svg"
                    alt="sort"
                  />
                }
              ></Input>
            </div>
            <Button className="bg-gray-900 cursor-pointer font-bold font-manrope py-[17px] rounded-[10px] text-center text-lg text-white-A700 w-full">
              Search
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Booking.defaultProps = {};

export default Booking;
