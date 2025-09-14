import React, { useState } from "react";
import MiniNav from "./MiniNav";
import { FiHome } from "react-icons/fi";
import {
  SiWikibooks,
  SiYoutubegaming,
  SiYoutubemusic,
  SiYoutubeshorts,
} from "react-icons/si";
import {
  MdHelpOutline,
  MdLocalMovies,
  MdOutlinedFlag,
  MdOutlineFeedback,
  MdSportsMartialArts,
  MdSubscriptions,
} from "react-icons/md";
import { FaRegUserCircle, FaYoutube } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";
import {
  IoMusicalNotes,
  IoNewspaperSharp,
  IoSettingsOutline,
} from "react-icons/io5";
import { RiLiveFill } from "react-icons/ri";
import { HiShoppingBag } from "react-icons/hi";
import { GiAmpleDress } from "react-icons/gi";
import { ImPodcast } from "react-icons/im";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { Link } from "react-router-dom";

function Sidebar() {
  const [explore, setExplore] = useState([
    { name: "Shopping", icon: <HiShoppingBag className="text-lg" /> },
    { name: "Music", icon: <IoMusicalNotes className="text-lg" /> },
    { name: "Movies", icon: <MdLocalMovies className="text-lg" /> },
    { name: "Live", icon: <RiLiveFill className="text-lg" /> },
    { name: "Gaming", icon: <SiYoutubegaming className="text-lg" /> },
    { name: "News", icon: <IoNewspaperSharp className="text-lg" /> },
    { name: "Sports", icon: <MdSportsMartialArts className="text-lg" /> },
    { name: "Courses", icon: <SiWikibooks className="text-lg" /> },
    { name: "Fashion & Beauty", icon: <GiAmpleDress className="text-lg" /> },
    { name: "Podcasts", icon: <ImPodcast className="text-lg" /> },
  ]);

  const [moreYouTube, setMoreYouTube] = useState([
    {
      name: "YouTube Premium",
      icon: <FaYoutube className="text-lg text-red-500" />,
    },
    {
      name: "YouTube Music",
      icon: <SiYoutubemusic className="text-lg text-red-500" />,
    },
    {
      name: "YouTube Kids",
      icon: <TbBrandYoutubeKids className="text-lg text-red-500" />,
    },
  ]);

  const [youTubeFeatures, setYouTubeFeatures] = useState([
    { name: "Settings", icon: <IoSettingsOutline className="text-lg" /> },
    { name: "Report history", icon: <MdOutlinedFlag className="text-lg" /> },
    { name: "Help", icon: <MdHelpOutline className="text-lg" /> },
    { name: "Send feedback", icon: <MdOutlineFeedback className="text-lg" /> },
  ]);

  return (
    <div className="w-[18vw] dark:bg-black h-[92vh] flex flex-col space-y-1 p-2 overflow-y-scroll">
      <div>
        <MiniNav name="Home" icon={<FiHome className="text-lg" />} />
        <MiniNav name="Shorts" icon={<SiYoutubeshorts className="text-lg" />} />
        <MiniNav
          name="Subscription"
          icon={<MdSubscriptions className="text-lg" />}
        />
      </div>

      <hr className=" text-neutral-500" />
      <div>
        <MiniNav name="You" icon={<FaRegUserCircle className="text-lg" />} />
        <MiniNav name="History" icon={<LuHistory className="text-lg" />} />
      </div>

      <hr className=" text-neutral-500" />
      {/* Sign in Section */}
      <div className="flex flex-col -space-y-2 mb-4">
        <div className="dark:text-white p-6">
          Sign in to like videos, comment, and subscribe.
        </div>
        <div className="ml-6 w-fit flex justify-center items-center space-x-1.5 border-2 dark:border-neutral-800 border-blue-100 cursor-pointer dark:hover:bg-blue-800 hover:bg-blue-100 p-1.5 px-2.5 rounded-full">
          <FaRegUserCircle className=" text-blue-400 text-xl" />
          <span className=" text-blue-400 text-sm">Sign in</span>
        </div>
      </div>

      <hr className=" text-neutral-500" />
      <div className="px-6 pt-3">
        <h4 className="dark:text-white font-semibold">Explore</h4>
      </div>
      <div>
        {explore.map((value, index, array) => {
          return <MiniNav key={index} name={value.name} icon={value.icon} />;
        })}
      </div>

      <hr className=" text-neutral-500" />
      <div className="px-6 pt-3 mb-2">
        <h4 className="dark:text-white font-semibold">More From YouTube</h4>
      </div>
      <div>
        {moreYouTube.map((value, index, array) => {
          return <MiniNav key={index} name={value.name} icon={value.icon} />;
        })}
      </div>

      <hr className=" text-neutral-500" />
      <div>
        {youTubeFeatures.map((value, index, array) => {
          return <MiniNav key={index} name={value.name} icon={value.icon} />;
        })}
      </div>

      <hr className=" text-neutral-500" />
      <div className="px-6 py-2">
        {[
          { name: "About", url: "/about" },
          { name: "Press", url: "/press" },
          { name: "Copyright", url: "/copyright" },
          { name: "ContactUs", url: "/contact-us" },
          { name: "Creaters", url: "/creaters" },
          { name: "Advertise", url: "/advertise" },
          { name: "Developers", url: "/developers" },
        ].map((a, b, c) => {
          return (
            <Link
              key={b}
              to={a.url}
              className="dark:text-neutral-300 font-semibold text-sm"
            >
              {" "}
              {a.name}{" "}
            </Link>
          );
        })}
      </div>

      <div className="px-6 py-2">
        {[
          { name: "Terms", url: "/terms" },
          { name: "Privacy", url: "/privacy" },
          { name: "Policy & Saftey", url: "/policy-and-saftey" },
          { name: "How YouTube works", url: "/how-yt-works" },
          { name: "Test new features", url: "/test-new-features" },
        ].map((a, b, c) => {
          return (
            <Link
              key={b}
              to={a.url}
              className="dark:text-neutral-300 font-semibold text-sm"
            >
              {" "}
              {a.name}{" "}
            </Link>
          );
        })}
      </div>
      <div className="px-6">
        <Link to='/google' className="dark:text-neutral-300 font-semibold text-sm">&copy; 2025, Google LLC</Link>
      </div>
    </div>
  );
}

export default Sidebar;
