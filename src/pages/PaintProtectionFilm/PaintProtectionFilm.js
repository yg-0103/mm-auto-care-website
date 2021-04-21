import StealthSignature from 'containers/StealthSignature/StealthSignature';
import IconKeyFeature from 'containers/IconKeyFeature/IconKeyFeature';
import ServiceInfoType2 from 'containers/ServiceInfoType2/ServiceInfoType2';
import SubMainBanner from 'containers/SubMainBanner/SubMainBanner';
import SubPageTitle from 'containers/SubPageTitle/SubPageTitle';
import React from 'react';
import Video from 'containers/Video/Video';
import PaintProtectionFilmPackage from 'containers/PaintProtectionFilmPackage/PaintProtectionFilmPackage';
import PaintProtectionFilmOptions from 'containers/PaintProtectionFilmOptions/PaintProtectionFilmOptions';
import OurWorks from 'containers/OurWorks/OurWorks';
import GetAQuoteBanner from 'containers/GetAQuoteBanner/GetAQuoteBanner';

const carouselImgs = [
  {
    id: 1,
    path: 'assets/paintOurWorks_01.png'
  },
  {
    id: 2,
    path: 'assets/paintOurWorks_02.png'
  },
  {
    id: 3,
    path: 'assets/paintOurWorks_03.png'
  },
  {
    id: 4,
    path: 'assets/paintOurWorks_04.png'
  },
  {
    id: 5,
    path: 'assets/paintOurWorks_05.png'
  }
];

const PaintProtectionFilm = () => {
  return (
    <>
      <SubMainBanner
        title="Paint Protection Film"
        desc="LVS for your car"
        bgImg="assets/PaintProtectionBannerImage.png"
      />
      <SubPageTitle
        title="Paint Protection Film"
        desc="Meet Our Quality Services"
      />
      <ServiceInfoType2
        imageLabel="ceramic pro coating bottle"
        imagePath="./assets/paintProtectionServiceInfo.png"
        infoList={[]}
        mode="right"
        subTitle=" "
        title="Xpel
        Paint Protection Film
        North York"
      >
        Paint protection film is a thin but exceptionally durable polymer or
        polyurethane film that is the ultimate layer of protection. Not only
        does it keep your ride’s clear coat protected against chemicals, UV
        exposure, acid rain and road debris. If the vehicle’s paint is impacted
        by road debris, it can save you thousands of dollars in auto body
        repairs.
      </ServiceInfoType2>
      <IconKeyFeature />
      <StealthSignature />
      <Video />
      <PaintProtectionFilmPackage />
      <PaintProtectionFilmOptions />
      <OurWorks contents={carouselImgs} />
      <GetAQuoteBanner
        title="Get a Free Quote"
        desc="Book Youar Service button link to contact form."
        linkText="Get a Free Quote"
        styledmode="secondary"
        color="red_05"
      />
    </>
  );
};

export default PaintProtectionFilm;