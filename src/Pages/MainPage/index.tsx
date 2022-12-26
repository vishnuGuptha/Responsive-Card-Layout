import Card from "Component/Card";
import React, { useEffect, useState } from "react";

interface IData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
}

const MainPage = () => {
  const mockData = {
    location: {
      name: "London",
      region: "City of London, Greater London",
      country: "United Kingdom",
      lat: 51.52,
      lon: -0.11,
      tz_id: "Europe/London",
      localtime_epoch: 1671939957,
      localtime: "2022-12-25 3:45",
    },
    current: {
      last_updated_epoch: 1671939000,
      last_updated: "2022-12-25 03:30",
      temp_c: 11,
      temp_f: 51.8,
      is_day: 0,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
        code: 1003,
      },
      wind_mph: 9.4,
      wind_kph: 15.1,
      wind_degree: 200,
      wind_dir: "SSW",
      pressure_mb: 1009,
      pressure_in: 29.8,
      precip_mm: 0.1,
      precip_in: 0,
      humidity: 82,
      cloud: 75,
      feelslike_c: 9.2,
      feelslike_f: 48.6,
      vis_km: 10,
      vis_miles: 6,
      uv: 1,
      gust_mph: 13.9,
      gust_kph: 22.3,
    },
  };

  const [datas, setDatas] = useState<IData>({
    location: {
      name: "",
      region: "",
      country: "",
      lat: 0,
      lon: 0,
      tz_id: "",
      localtime_epoch: 0,
      localtime: "",
    },
    current: {
      last_updated_epoch: 0,
      last_updated: "",
      temp_c: 0,
      temp_f: 0,
      is_day: 0,
      condition: {
        text: "",
        icon: "",
        code: 0,
      },
      wind_mph: 0,
      wind_kph: 0,
      wind_degree: 0,
      wind_dir: "",
      pressure_mb: 0,
      pressure_in: 0,
      precip_mm: 0,
      precip_in: 0,
      humidity: 0,
      cloud: 0,
      feelslike_c: 0,
      feelslike_f: 0,
      vis_km: 0,
      vis_miles: 0,
      uv: 0,
      gust_mph: 0,
      gust_kph: 0,
    },
  });

  useEffect(() => {
    getWeatherDatas();
  }, []);

  const getWeatherDatas = async () => {
    //   await fetch(
    //     "http://api.weatherapi.com/v1/current.json?key=b44db04756b747a4ae532925222512&q=Bangalore"
    //   )
    //     .then((res) => res.json())
    //     .then((data) => setDatas(data))
    //     .catch((err) => console.log(err));
    setDatas(mockData);
  };

  return (
    <div className="px-5 lg:pl-5 lg:px-0 flex flex-col w-full gap-y-2 sm:gap-5 md:gap-0 my-2 sm:flex-row pb-16 sm:fixed">
      <>{console.log(datas)}</>
      <div className="flex flex-col sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div className="font-bold max-w-full text-left flex items-center pb-2 lg:text-lg">
          Fixed Cards Column
        </div>
        <div className="sm:scrollbar-hide sm:overflow-scroll sm:h-[calc(100vh-49px-40px-40px-10px)] lg:h-[calc(100vh-70px-8px-36px-8px-46px)]">
          <div className="flex flex-col max-w-full gap-y-2 sm:gap-5 md:pr-[12px] lg:pr-[20px]">
            <Card type={"FixedCard"} />
            <Card type={"FixedCard"} />
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 md:w-2/3 lg:w-3/4 md:pl-[7px] lg:pl-[0px] xl:w-4/5 ">
        <div className="lg:text-lg font-bold max-w-full text-left flex items-center pb-2">
          Dynamic Cards Column
        </div>
        <div className="sm:h-[calc(100vh-49px-40px-40px-10px)] lg:sm:h-[calc(100vh-70px-8px-36px-8px-47px)] sm:scrollbar-hide sm:overflow-scroll">
          <div className="flex gap-y-2 flex-col md:flex-row md:flex-wrap sm:gap-5 lg:justify-start">
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
            <Card type={"DynamicCard"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
