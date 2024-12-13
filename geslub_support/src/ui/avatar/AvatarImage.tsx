import React, { FC } from "react";

interface AvatarImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const AvatarImage: FC<AvatarImageProps> = ({ src, alt = "Avatar", className }) => {
  return (
    <img src={src} alt={alt} className={`w-full h-full object-cover ${className || ""}`} />
  );
};

export default AvatarImage;
