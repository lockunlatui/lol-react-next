import { LoLLogo, RiotLogo } from "@/components";
import { useWindowSize } from "@/hooks";
import styles from "@/styles/Header.module.scss";
import React from "react";
import { useState } from "react";

interface ISubMenu {
  id: string;
  name: string;
  link?: string;
}
interface INavigation {
  id: string;
  name: string;
  subMenu: ISubMenu[];
  link?: string;
}

const NavigationList: INavigation[] = [
  {
    id: "1",
    name: "trò chơi",
    subMenu: [],
  },
  {
    id: "2",
    name: "tin tức",
    subMenu: [
      {
        id: "2_1",
        name: "tất cả",
      },
      {
        id: "2_2",
        name: "cập nhật trò chơi",
      },
      {
        id: "2_3",
        name: "esports",
      },
      {
        id: "2_4",
        name: "đội ngũ phát triển",
      },
      {
        id: "2_5",
        name: "tiểu sử",
      },
      {
        id: "2_6",
        name: "truyền thông",
      },
      {
        id: "2_7",
        name: "cộng đồng",
      },
    ],
  },
  {
    id: "3",
    name: "chi tiết cập nhật",
    subMenu: [],
  },
  {
    id: "4",
    name: "esports",
    subMenu: [],
    link: "https://www.lolesports.com/",
  },
  {
    id: "6",
    name: "vũ trụ",
    subMenu: [],
    link: "https://universe.leagueoflegends.com/vn_VN/",
  },
  {
    id: "5",
    name: "hỗ trợ",
    subMenu: [],
    link: "https://lienminh.vnggames.com/ho-tro-khach-hang/",
  },
];

const NavigationListMobile: INavigation[] = [
  {
    id: "1",
    name: "trò chơi",
    subMenu: [],
  },
  {
    id: "2",
    name: "tin tức",
    subMenu: [
      {
        id: "2_1",
        name: "tất cả",
      },
      {
        id: "2_2",
        name: "cập nhật trò chơi",
      },
      {
        id: "2_3",
        name: "esports",
      },
      {
        id: "2_4",
        name: "đội ngũ phát triển",
      },
      {
        id: "2_5",
        name: "tiểu sử",
      },
      {
        id: "2_6",
        name: "truyền thông",
      },
      {
        id: "2_7",
        name: "cộng đồng",
      },
    ],
  },
  {
    id: "3",
    name: "chi tiết cập nhật",
    subMenu: [],
  },
  {
    id: "4",
    name: "esports",
    subMenu: [],
    link: "https://www.lolesports.com/",
  },
  {
    id: "5",
    name: "thêm",
    subMenu: [
      {
        id: "6",
        name: "vũ trụ",

        link: "https://universe.leagueoflegends.com/vn_VN/",
      },
      {
        id: "5",
        name: "hỗ trợ",
        link: "https://lienminh.vnggames.com/ho-tro-khach-hang/",
      },
    ],
  },
];

export default function Header() {
  return (
    <header>
      <div className={styles.riotBarHeader}>
        <BarLeftContent />
        <BarCenterContent />
        <BarRightContent />
      </div>
    </header>
  );
}

const BarLeftContent = () => {
  return (
    <div className={styles.riotBarLeftContent}>
      <div className={styles.riotBrandingSwitcher}>
        <a className={styles.riotBarLogo}>
          <div className={styles.riotFirstLogo}>
            <RiotLogo />
          </div>
          <div className={styles.riotBarAppSwitcherTriggerArrow}>
            <svg className="" width={8} height={5} viewBox="0 0 8 5">
              <title>mainMenuDownNonHover</title>
              <path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

const BarCenterContent = () => {
  const size = useWindowSize();

  const getNavigation = () => {
    if (size.width < 1170) {
      return NavigationListMobile;
    } else {
      return NavigationList;
    }
  };

  return (
    <div className={styles.riotBarCenter}>
      {size.width > 1000 && (
        <>
          <div className={styles.riotBarDesktopLogoOuter}>
            <a href="https://lienminh.vnggames.com/vi-vn/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="32"
                viewBox="0 0 30 32"
                fill="none"
              >
                <g>
                  <path
                    d="M1.80644 9.75049C0.655032 11.8373 0 14.2271 0 16.7683C0 19.3095 0.655032 21.7015 1.80644 23.7883V9.75049Z"
                    fill="#C28F2C"
                  ></path>{" "}
                  <path
                    d="M15 2.02222C13.7829 2.02222 12.602 2.16921 11.4688 2.43647V4.75718C12.5907 4.44093 13.7738 4.26721 15 4.26721C22.0218 4.26721 27.7153 9.84627 27.7153 16.7305C27.7153 19.8307 26.5571 22.6659 24.6464 24.8463L24.2838 26.118L23.4814 28.9331C27.4184 26.2761 30.0023 21.8195 30.0023 16.7705C30 8.62355 23.2843 2.02222 15 2.02222Z"
                    fill="#C28F2C"
                  ></path>{" "}
                  <path
                    d="M11.4688 24.4209H22.9737H23.2253C25.1723 22.4209 26.3713 19.7126 26.3713 16.7305C26.3713 10.5746 21.2806 5.58569 15 5.58569C13.767 5.58569 12.5816 5.78168 11.4688 6.1358V24.4209Z"
                    fill="#C28F2C"
                  ></path>{" "}
                  <path
                    d="M10.1088 0H1.55029L3.16634 3.29844V28.7038L1.55029 32H21.1922L22.9737 25.7572H10.1088V0Z"
                    fill="#C28F2C"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
          <div className={styles.riotBarDesktopNavigationWrapper}>
            {getNavigation().map((item: INavigation) => {
              return (
                <div className={styles.desktopLinkItem} key={item.id}>
                  <a>
                    <p>
                      {item.name}
                      {!!item.link?.length && (
                        <span className={styles.desktopLinkItemIconLinkOut}>
                          <svg width="7" height="7" viewBox="0 0 16 16">
                            <title>mainNavLinkOut</title>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 00-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158z"
                              fill="#737373"
                            ></path>
                          </svg>
                        </span>
                      )}
                      {!!item.subMenu.length && (
                        <svg width="10" height="5" viewBox="0 0 8 5">
                          <title>mainNavArrowDown</title>
                          <path
                            d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"
                            fill="#7E7E7E"
                          ></path>
                        </svg>
                      )}
                    </p>
                    {!!item.subMenu.length && (
                      <ul className={styles.subMenuWrapper}>
                        <div className={styles.subMenuUnderline}></div>
                        {item.subMenu.map((subItem) => {
                          return (
                            <li key={subItem.id} className={styles.subMenuItem}>
                              <span>{subItem.name}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    <div className={styles.desktopLinkItemUnderline}></div>
                  </a>
                </div>
              );
            })}
          </div>
        </>
      )}
      {size.width < 1000 && (
        <div className={styles.riotThemeLogoMobile}>
          <a>
            <LoLLogo />
          </a>
        </div>
      )}
    </div>
  );
};

const BarRightContent = () => {
  const size = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);
  const [idOpen, setIdOpen] = useState("-1");

  return (
    <div className={styles.riotBarRightContent}>
      <div className={styles.riotBarLocaleSwitcher}>
        <div className={styles.localeSwitcherIcon}>
          <a>
            <svg width="14" height="14" viewBox="0 0 16 16">
              <title>globeIcon</title>
              <path
                d="M7.992 0C3.576 0 0 3.584 0 8s3.576 8 7.992 8C12.416 16 16 12.416 16 8s-3.584-8-8.008-8zm5.544 4.8h-2.36c-.256-1-.624-1.96-1.104-2.848A6.424 6.424 0 0113.536 4.8zM8 1.632A11.27 11.27 0 019.528 4.8H6.472A11.27 11.27 0 018 1.632zM1.808 9.6A6.594 6.594 0 011.6 8c0-.552.08-1.088.208-1.6h2.704A13.212 13.212 0 004.4 8c0 .544.048 1.072.112 1.6H1.808zm.656 1.6h2.36c.256 1 .624 1.96 1.104 2.848A6.39 6.39 0 012.464 11.2zm2.36-6.4h-2.36a6.39 6.39 0 013.464-2.848A12.52 12.52 0 004.824 4.8zM8 14.368A11.27 11.27 0 016.472 11.2h3.056A11.27 11.27 0 018 14.368zM9.872 9.6H6.128A11.77 11.77 0 016 8c0-.544.056-1.08.128-1.6h3.744C9.944 6.92 10 7.456 10 8s-.056 1.072-.128 1.6zm.2 4.448a12.52 12.52 0 001.104-2.848h2.36a6.424 6.424 0 01-3.464 2.848zM11.488 9.6c.064-.528.112-1.056.112-1.6s-.048-1.072-.112-1.6h2.704c.128.512.208 1.048.208 1.6s-.08 1.088-.208 1.6h-2.704z"
                fill="#E8E8E8"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      {size.width < 1000 && (
        <div className={styles.riotBarMobileNavReset}>
          <div
            onClick={() => setIsOpen(true)}
            className={styles.riotBarMenuIcon}
          >
            <svg viewBox="0 0 48 48">
              <title>burgerNav</title>
              <path
                d="M0 18A18 18 0 0118 0h12a18 18 0 0118 18v12a18 18 0 01-18 18H18A18 18 0 010 30z"
                fill="gray"
                fillOpacity=".2"
              ></path>
              <path
                d="M15 18h18v2H15zm0 5h18v2H15zm0 7v-2h18v2z"
                fill="#fcfcfc"
              ></path>
            </svg>
          </div>
          <div
            className={`${styles.riotBarMobileMenu} ${
              isOpen && styles.visible
            }`}
          >
            <div className={styles.riotBarMobileMenuHeader}>
              <div className={styles.riotBarMobileMenuHeaderLogo}>
                <span className={styles.mobileMenuHeaderLogo}>
                  <LoLLogo />
                </span>
              </div>
              <div
                onClick={() => setIsOpen(false)}
                className={styles.riotBarMobileMenuHeaderButtonClose}
              >
                <svg viewBox="0 0 48 48">
                  <title>burgerNavClose</title>
                  <path
                    d="M0 18A18 18 0 0118 0h12a18 18 0 0118 18v12a18 18 0 01-18 18H18A18 18 0 010 30z"
                    fill="gray"
                    fillOpacity=".2"
                  ></path>
                  <path
                    d="M31 18.41L29.59 17 24 22.59 18.4 17l-1.41 1.41L22.58 24l-5.59 5.59L18.4 31l5.59-5.59L29.58 31l1.41-1.41L25.4 24z"
                    fill="#fcfcfc"
                  ></path>
                </svg>
              </div>
            </div>
            <div className={styles.riotBarMobileMenuTouchPoints}>
              <div className={styles.riotBarMobileMenuTouchPoint}>
                {NavigationList.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      <a
                        onClick={() =>
                          setIdOpen(item.id === idOpen ? "-1" : item.id)
                        }
                        className={styles.riotBarMobileMenuLink}
                      >
                        {item.name}
                        {!!item.subMenu.length && (
                          <div
                            style={
                              idOpen === item.id
                                ? {
                                    transform: "rotate(270deg)",
                                  }
                                : {}
                            }
                            className={styles.mobileMenuIconArrow}
                          >
                            <svg viewBox="0 0 5 9">
                              <title>subMenuRight</title>
                              <path
                                d="M1.707 7.793l2.586-2.586a1 1 0 000-1.414L1.707 1.207C1.077.577 0 1.023 0 1.914v5.172c0 .89 1.077 1.337 1.707.707z"
                                fill="#7E7E7E"
                              ></path>
                            </svg>
                          </div>
                        )}
                        {item.link?.length && (
                          <div className={styles.mobileMenuIconLink}>
                            <svg width="7" height="7" viewBox="0 0 16 16">
                              <title>mainNavLinkOut</title>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 00-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158z"
                                fill="#737373"
                              ></path>
                            </svg>
                          </div>
                        )}
                      </a>
                      {idOpen === item.id &&
                        item.subMenu.map((itemChild, index) => {
                          return (
                            <a
                              key={`${itemChild.id}_${index}`}
                              style={{ color: "#c7c7c7", letterSpacing: 0 }}
                              className={styles.riotBarMobileMenuLink}
                            >
                              {itemChild.name}
                            </a>
                          );
                        })}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div className={styles.riotBarMobileMenuAnonymousLinkWrapper}>
              <a className={styles.riotbarMobileMenuAnonymousLink}>
                <div className={styles.riotbarMobileMenuAnonymousLinkText}>
                  chơi ngay
                </div>
              </a>
            </div>
          </div>
          {isOpen && <div className={styles.riotMobileMenuOverlay}></div>}
        </div>
      )}
      {size.width > 1000 && (
        <div className={styles.riotBarAccountReset}>
          <div className={styles.riotBarAccountAnonymousLinkWrapper}>
            <a>chơi ngay</a>
          </div>
        </div>
      )}
    </div>
  );
};
