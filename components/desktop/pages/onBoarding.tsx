import Link from "next/link";
import { useEffect, useState } from "react";

const onBoardingImages = [
  "/onBoarding/01.gif",
  "/onBoarding/02.gif",
  "/onBoarding/03.mp4",
  "/onBoarding/04.mp4",
  "/onBoarding/05.gif",
  "/onBoarding/06.gif",
  "/onBoarding/07.gif",
];

interface IonBoarding {
  src: string;
  width: number;
  height: number;
  top: number;
  left: number;
}

const onBoarding: IonBoarding[] = [
  {
    src: "/onBoarding/02.gif",
    width: 632,
    height: 356,
    top: 124,
    left: 268,
  },
  {
    src: "/onBoarding/03.mp4",
    width: 1058,
    height: 591,
    top: 105,
    left: 568,
  },
  {
    src: "/onBoarding/04.mp4",
    width: 864,
    height: 421,
    top: 225,
    left: 193,
  },
  {
    src: "/onBoarding/05.gif",
    width: 1182,
    height: 663,
    top: 88,
    left: 362,
  },
  {
    src: "/onBoarding/06.gif",
    width: 700,
    height: 700,
    top: 172,
    left: 336,
  },
  {
    src: "/onBoarding/07.gif",
    width: 960,
    height: 540,
    top: 125,
    left: 428,
  },
];

function DesktopOnBoarding() {
  const [visibleBoardings, setVisibleBoardings] = useState<IonBoarding[]>([
    {
      src: "/onBoarding/01.gif",
      width: 660,
      height: 660,
      top: 20,
      left: 20,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleBoardings.length < onBoarding.length) {
        setVisibleBoardings((prev) => [
          ...prev,
          onBoarding[visibleBoardings.length],
        ]);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [visibleBoardings.length]);

  return (
    <div
      className="h-screen text-white w-screen overflow-hidden"
      style={{
        backgroundImage: "url('/onBoarding/02.gif')",
        backgroundSize: "cover",
        aspectRatio: "16/9",
      }}
    >
      <div className="flex justify-between px-8 py-7 items-center text-white">
        <div>
          <svg
            width="242"
            height="33"
            viewBox="0 0 242 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M93.595 16.921C93.991 17.724 94.816 18.373 95.707 18.384C96.796 18.406 97.621 17.834 97.621 16.932C97.621 14.787 93.265 15.689 93.265 12.917C93.265 11.663 94.453 10.948 95.839 10.97C96.972 10.992 97.907 11.575 98.27 12.686L97.544 12.939C97.335 12.191 96.609 11.685 95.828 11.674C94.882 11.663 94.057 12.114 94.057 12.928C94.057 15.04 98.413 14.149 98.413 16.943C98.413 18.241 97.28 19.121 95.696 19.088C94.541 19.066 93.562 18.428 92.913 17.284L93.595 16.921ZM103.343 15.216C104.322 15.216 105.004 14.501 105.004 13.489C105.004 12.477 104.311 11.762 103.332 11.762H101.088L101.099 15.216H103.343ZM100.307 19V11.058H103.365C104.784 11.058 105.774 12.059 105.774 13.489C105.774 14.919 104.784 15.92 103.365 15.92H101.099V19H100.307ZM110.212 11.058L113.479 19H112.621L111.686 16.712H107.836L106.879 19H106.021L109.332 11.058H110.212ZM108.122 16.008H111.389L109.772 12.07L108.122 16.008ZM118.283 15.227C119.251 15.227 119.933 14.501 119.933 13.478C119.933 12.466 119.251 11.762 118.283 11.762H115.929V15.227H118.283ZM115.137 19V11.058H118.261C119.713 11.058 120.725 12.07 120.725 13.5C120.736 14.666 119.944 15.656 118.811 15.876L121.099 19H120.098L117.854 15.931H115.929V19H115.137ZM128.964 11.058L125.796 14.578L129.041 19H128.04L125.246 15.183L123.838 16.756V19H123.046V11.069H123.838V15.557L127.886 11.058H128.964ZM131.484 12.664C131.77 12.664 131.968 12.862 131.968 13.148C131.968 13.434 131.77 13.643 131.484 13.643C131.198 13.643 130.989 13.434 130.989 13.148C130.989 12.862 131.198 12.664 131.484 12.664ZM130.989 16.855C130.989 16.569 131.198 16.371 131.484 16.371C131.77 16.371 131.968 16.569 131.968 16.855C131.968 17.141 131.77 17.35 131.484 17.35C131.198 17.35 130.989 17.141 130.989 16.855ZM98.204 23.058V23.762H93.639V26.556H97.643V27.26H93.639V30.296H98.204V31H92.847V23.058H98.204ZM103.293 27.227C104.261 27.227 104.943 26.501 104.943 25.478C104.943 24.466 104.261 23.762 103.293 23.762H100.939V27.227H103.293ZM100.147 31V23.058H103.271C104.723 23.058 105.735 24.07 105.735 25.5C105.746 26.666 104.954 27.656 103.821 27.876L106.109 31H105.108L102.864 27.931H100.939V31H100.147ZM108.066 23.058H108.858V31H108.066V23.058ZM114.517 31.088C112.218 31.088 110.601 29.416 110.601 27.029C110.601 24.642 112.218 22.97 114.517 22.97C115.606 22.97 116.585 23.432 117.289 24.158L116.75 24.598C116.189 24.015 115.375 23.674 114.517 23.674C112.691 23.674 111.404 25.06 111.404 27.029C111.404 28.998 112.691 30.384 114.517 30.384C115.375 30.384 116.167 30.043 116.728 29.46L117.289 29.9C116.585 30.626 115.606 31.088 114.517 31.088ZM122.602 23.058L125.869 31H125.011L124.076 28.712H120.226L119.269 31H118.411L121.722 23.058H122.602ZM120.512 28.008H123.779L122.162 24.07L120.512 28.008ZM132.786 30.296C134.656 30.296 135.976 28.943 135.976 27.029C135.976 25.115 134.656 23.762 132.786 23.762H131.18V30.296H132.786ZM130.388 31V23.058H132.786C135.107 23.058 136.746 24.697 136.746 27.029C136.746 29.361 135.107 31 132.786 31H130.388ZM143.5 23.058V23.762H138.935V26.556H142.939V27.26H138.935V30.296H143.5V31H138.143V23.058H143.5ZM145.737 28.921C146.133 29.724 146.958 30.373 147.849 30.384C148.938 30.406 149.763 29.834 149.763 28.932C149.763 26.787 145.407 27.689 145.407 24.917C145.407 23.663 146.595 22.948 147.981 22.97C149.114 22.992 150.049 23.575 150.412 24.686L149.686 24.939C149.477 24.191 148.751 23.685 147.97 23.674C147.024 23.663 146.199 24.114 146.199 24.928C146.199 27.04 150.555 26.149 150.555 28.943C150.555 30.241 149.422 31.121 147.838 31.088C146.683 31.066 145.704 30.428 145.055 29.284L145.737 28.921ZM152.46 23.058H153.252V31H152.46V23.058ZM162.673 26.886C162.673 27.161 162.662 27.524 162.662 27.524C162.662 29.801 161.034 31.044 158.933 31.088C156.645 31.088 155.028 29.416 155.028 27.029C155.028 24.653 156.645 22.981 158.933 22.981C161.397 22.981 162.244 24.895 162.244 24.895L161.54 25.214C161.54 25.214 160.891 23.685 158.933 23.685C157.107 23.685 155.82 25.071 155.82 27.029C155.82 28.998 157.107 30.384 158.933 30.384C160.671 30.318 161.914 29.405 161.914 27.59H159.076V26.886H162.673ZM170.737 23.058V31H169.945L165.116 24.4V31H164.324V23.058H165.116L169.945 29.658V23.058H170.737ZM179.959 22.937L183.204 31.121H181.785L180.927 28.954H177.385L176.516 31.121H175.097L178.397 22.937H179.959ZM177.836 27.81H180.476L179.178 24.543L177.836 27.81ZM188.098 27.249C188.945 27.249 189.517 26.611 189.517 25.654C189.517 24.708 188.945 24.081 188.098 24.081H185.942V27.249H188.098ZM184.622 31.121V22.937H188.307C189.792 22.937 190.837 24.048 190.837 25.621C190.848 26.688 190.331 27.645 189.077 28.184L191.222 31.121H189.583L187.581 28.382H185.942V31.121H184.622ZM196.06 31.209C193.695 31.209 192.034 29.482 192.034 27.029C192.034 24.565 193.695 22.849 196.06 22.849C197.182 22.849 198.194 23.322 198.92 24.07L198.062 24.95C197.6 24.378 196.852 24.004 196.06 24.004C194.432 23.993 193.354 25.203 193.354 27.029C193.354 28.855 194.432 30.054 196.06 30.054C196.929 30.054 197.589 29.636 198.007 29.141L198.92 29.988C198.194 30.736 197.27 31.22 196.06 31.209ZM207.04 22.937V31.121H205.72V27.491H201.749V31.121H200.429V22.937H201.749V26.347H205.72V22.937H207.04ZM208.864 22.937H210.184V31.121H208.864V22.937ZM219.62 22.937L216.485 31.121H214.923L211.59 22.937H213.009L215.682 29.68L218.201 22.937H219.62ZM221.018 22.937H222.338V31.121H221.018V22.937ZM231.209 22.937V31.121H229.757L225.445 25.038V31.121H224.125V22.937H225.577L229.889 29.042V22.937H231.209ZM240.629 26.809V27.546C240.629 29.812 239.1 31.187 236.79 31.209C234.392 31.209 232.698 29.482 232.698 27.029C232.698 24.576 234.392 22.86 236.79 22.86C239.364 22.86 240.277 24.829 240.277 24.829L239.155 25.423C239.155 25.423 238.506 24.015 236.779 24.015C235.118 24.015 234.018 25.214 234.018 27.029C234.018 28.855 235.118 30.054 236.779 30.054C238.154 30.032 239.298 29.394 239.32 27.876H236.911V26.809H240.629Z"
              fill="white"
            />
            <g clipPath="url(#clip0_1699_2103)">
              <g opacity="0.8">
                <path
                  d="M81.1026 13.0969L82.265 32.4491H68.6914L68.45 20.3385L63.0492 23.4039L56.5843 32.4491H45.1836L67.9314 0.630859H79.3321L71.7942 11.1688H71.8747L89.6241 0.630859H103.001L81.1115 13.0969H81.1026Z"
                  fill="white"
                />
              </g>
              <g opacity="0.8">
                <path
                  d="M42.4286 0.630859H61.4656C71.5161 0.630859 70.765 6.61067 67.2777 11.4887C61.7964 19.1567 53.1677 22.8175 44.6909 22.8175H37.9578L31.0726 32.4491H19.6719L42.4286 0.630859ZM43.5911 14.9451H47.9814C50.8696 14.9451 53.9635 15.105 56.2973 11.8352C58.3539 8.96527 55.8412 8.76979 53.0335 8.76979H48.0083L43.5911 14.9451Z"
                  fill="white"
                />
              </g>
              <g opacity="0.8">
                <path
                  d="M16.7121 25.8384C18.4558 25.8384 21.4423 25.483 23.0965 23.164C24.3573 21.3958 23.2486 21.1204 19.2248 19.9386C18.8313 19.8231 18.429 19.6632 17.9193 19.5477C13.0192 18.0905 6.95669 16.5622 11.3381 10.4225C16.9983 2.51454 26.1278 0 33.8445 0C41.5613 0 47.4449 2.67447 41.8921 10.5024H30.8133C32.852 7.98788 30.8848 7.08158 28.7477 7.08158C27.2813 7.08158 24.6435 7.39257 23.3827 9.16963C22.2292 10.7779 24.9833 11.4087 28.0235 12.1995L31.0815 13.0614C35.4272 14.2431 39.5672 16.5178 35.5524 22.1422C29.6777 30.3611 18.9297 33 10.5781 33C6.42019 33 -4.83747 31.7027 2.36063 21.6357H14.0743C11.6243 25.0565 13.5199 25.8473 16.7211 25.8473L16.7121 25.8384Z"
                  fill="white"
                />
              </g>
            </g>
            <g clipPath="url(#clip1_1699_2103)">
              <g opacity="0.8">
                <path
                  d="M81.1026 13.0969L82.265 32.4491H68.6914L68.45 20.3385L63.0492 23.4039L56.5843 32.4491H45.1836L67.9314 0.630859H79.3321L71.7942 11.1688H71.8747L89.6241 0.630859H103.001L81.1115 13.0969H81.1026Z"
                  fill="white"
                />
              </g>
              <g opacity="0.8">
                <path
                  d="M42.4286 0.630859H61.4656C71.5161 0.630859 70.765 6.61067 67.2777 11.4887C61.7964 19.1567 53.1677 22.8175 44.6909 22.8175H37.9578L31.0726 32.4491H19.6719L42.4286 0.630859ZM43.5911 14.9451H47.9814C50.8696 14.9451 53.9635 15.105 56.2973 11.8352C58.3539 8.96527 55.8412 8.76979 53.0335 8.76979H48.0083L43.5911 14.9451Z"
                  fill="white"
                />
              </g>
              <g opacity="0.8">
                <path
                  d="M16.7121 25.8384C18.4558 25.8384 21.4423 25.483 23.0965 23.164C24.3573 21.3958 23.2486 21.1204 19.2248 19.9386C18.8313 19.8231 18.429 19.6632 17.9193 19.5477C13.0192 18.0905 6.95669 16.5622 11.3381 10.4225C16.9983 2.51454 26.1278 0 33.8445 0C41.5613 0 47.4449 2.67447 41.8921 10.5024H30.8133C32.852 7.98788 30.8848 7.08158 28.7477 7.08158C27.2813 7.08158 24.6435 7.39257 23.3827 9.16963C22.2292 10.7779 24.9833 11.4087 28.0235 12.1995L31.0815 13.0614C35.4272 14.2431 39.5672 16.5178 35.5524 22.1422C29.6777 30.3611 18.9297 33 10.5781 33C6.42019 33 -4.83747 31.7027 2.36063 21.6357H14.0743C11.6243 25.0565 13.5199 25.8473 16.7211 25.8473L16.7121 25.8384Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1699_2103">
                <rect width="103" height="33" fill="white" />
              </clipPath>
              <clipPath id="clip1_1699_2103">
                <rect width="103" height="33" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex space-x-4">
          <Link
            href="/"
            className="border-[1px] border-white flex justify-center text-[16px] px-5 py-2 font-['SUIT']"
          >
            <p className="font-['SUIT'] font-medium">GO TO MAIN PAGE</p>
          </Link>
          <Link
            href="/login"
            className="border-[1px] border-white flex justify-center text-[16px] px-5 py-2 "
          >
            <p className="font-['SUIT'] font-medium">LOG-IN</p>
          </Link>
        </div>
      </div>
      <div className="flex justify-center h-11 text-[14px] ">
        <p className="w-[35%] border-[1px] white flex justify-start py-2.5 pl-8 font-['SUIT'] font-semibold">
          INDEX
        </p>
        <p className="w-[30%] border-[1px] border-white text-center py-2.5 font-['SUIT'] font-semibold">
          SPARK: ERICA DESIGN ARCHIVING
        </p>
        <div className="w-[35%] border-[1px] border-white text-white bg-white py-2.5 overflow-hidden whitespace-nowrap relative">
          <p className="inline-block px-full relative animate-marquee font-['Pretendard'] font-normal text-black">
            2023학년도 개강을 맞아 여러분들의 발전을 위해 아카이빙 사이트를
            오픈했습니다. 스파크 많이 활용해주세요
          </p>
        </div>
      </div>
      {/*온보딩 영상*/}
      <div className="relative">
        {/*{visibleBoardings.map((item, index) => (*/}
        {/*  <div*/}
        {/*    key={index}*/}
        {/*    className="absolute"*/}
        {/*    style={{*/}
        {/*      top: `${item.top}px`,*/}
        {/*      left: `${item.left}px`,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    {item.src?.includes(".mp4") ? (*/}
        {/*      <video*/}
        {/*        src={item.src}*/}
        {/*        autoPlay*/}
        {/*        loop*/}
        {/*        muted*/}
        {/*        style={{*/}
        {/*          width: `${item.width}px`,*/}
        {/*          height: `${item.height}px`,*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    ) : (*/}
        {/*      <Image*/}
        {/*        src={item.src}*/}
        {/*        alt={"onBoardingImage"}*/}
        {/*        width={item.width}*/}
        {/*        height={item.height}*/}
        {/*      />*/}
        {/*    )}*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    </div>
  );
}

export default DesktopOnBoarding;
