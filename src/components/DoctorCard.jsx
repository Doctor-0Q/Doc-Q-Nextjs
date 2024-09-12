
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactStars from "react-rating-stars-component";

const DoctorCard = ({image,title,expereince,doctorId}) => {
  return (
  <Link href={`/find-doctors/${doctorId}`}>
    <div className="w-[100%] flex justify-center">
      <div className="w-[80%] max-[882px]:w-[100%] h-[80px] flex justify-between px-[30px] bg-[#DAEDFF] rounded-3xl">
        <div className="flex  items-center gap-3">
          <div>
            <Image
              src={image}
              height={100}
              width={50}
              alt="img"
              className="rounded-full h-[60px] w-[60px]"
            ></Image>
          </div>
         <div className="w-[180px]">
         <h1 className="text-[20px] font-semibold max-[547px]:text-[14px] ">{title}</h1>
         </div>
        </div>
        <div className="pt-[6px] max-[711px]:hidden ">
          <ReactStars
            count={5}
            size={42}
            value={3}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
        <div className="text-[20px] font-semibold pt-[29px] max-[547px]:text-[14px]">Experience : {expereince} years</div>
      </div>
    </div>
  </Link>
  );
};

export default DoctorCard;
