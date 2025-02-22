import React from "react";

const CardItem = ({
  image,
  title,
  subtitle,
  desc,
  linkText,
  linkUrl,
  className,
}) => {
  return (
    <div className={`overflow-hidden flex flex-col gap-6 ${className}`}>
      <img
        className="w-full object-cover h-[400px] max-w-[400px] rounded-[8px]"
        src={image}
        alt={title}
      />
      <div>
        <h3 className="text-xl font-medium" style={{ color: "#F2542D" }}>
          {title}
        </h3>
        <h4 className="text-[28px] font-medium" style={{ color: "#562C2C" }}>
          {subtitle}
        </h4>
        <p className="text-lg " style={{ color: "rgba(86, 44, 44, 0.80)" }}>
          {desc}
        </p>
      </div>
      <a
        href={linkUrl}
        className="rounded-4xl w-fit px-4 py-2 flex justify-center"
        style={{ border: "1.5px solid rgba(86, 44, 44, 0.30)" }}
      >
        {linkText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18.7504 6V15.75C18.7504 15.9489 18.6714 16.1397 18.5307 16.2803C18.3901 16.421 18.1993 16.5 18.0004 16.5C17.8015 16.5 17.6107 16.421 17.4701 16.2803C17.3294 16.1397 17.2504 15.9489 17.2504 15.75V7.81031L6.53104 18.5306C6.39031 18.6714 6.19944 18.7504 6.00042 18.7504C5.80139 18.7504 5.61052 18.6714 5.46979 18.5306C5.32906 18.3899 5.25 18.199 5.25 18C5.25 17.801 5.32906 17.6101 5.46979 17.4694L16.1901 6.75H8.25042C8.0515 6.75 7.86074 6.67098 7.72009 6.53033C7.57943 6.38968 7.50042 6.19891 7.50042 6C7.50042 5.80109 7.57943 5.61032 7.72009 5.46967C7.86074 5.32902 8.0515 5.25 8.25042 5.25H18.0004C18.1993 5.25 18.3901 5.32902 18.5307 5.46967C18.6714 5.61032 18.7504 5.80109 18.7504 6Z"
            fill="#0E9594"
          />
        </svg>
      </a>
    </div>
  );
};

export default CardItem;
