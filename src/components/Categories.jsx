import React from "react";

function Categories() {
  return (
    <div className="px-4 w-full h-[8vh] overflow-x-scroll scrollbar-none">
      <div className="w-[150%] h-full flex items-center justify-start space-x-3">
        {[
          "All",
          "Mixes",
          "Arijit Singh",
          "Hindi Songs",
          "Yo Yo Honey Singh",
          "Cartoon",
          "Gaming",
          "BGMI",
          "Hum aapke hai kaun",
          "Star Plus",
          "Bollywood songs",
          "English Songs",
          "South Movies",
          "Hindi movies",
          "Akshay Kumar hit songs",
        ].map((value, index) => {
          return (
            <button
              key={index}
              className="w-fit dark:bg-neutral-800 bg-neutral-200 text-md px-2 py-1.5 rounded-lg cursor-pointer"
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
