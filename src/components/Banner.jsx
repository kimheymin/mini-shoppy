import React, { useEffect, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function Banner() {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000); // 5초마다 이미지 전환
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative">
      <img src={images[currentImage]} alt={currentImage} />
      <div className="flex justify-between text-6xl opacity-25 cursor-pointer text-black">
        <GrPrevious className="absolute top-1/2" onClick={goToPrevImage} />
        <GrNext className="absolute right-0 top-1/2" onClick={goToNextImage} />
      </div>
    </div>
  );
}
