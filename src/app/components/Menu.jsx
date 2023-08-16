import React from 'react'

import Link from 'next/link';

import { useTranslation } from "react-i18next";




function Menu() {
    const { t } = useTranslation();
    return (
        <>
            <div className="menu">
                <nav id="site-navigation" className="navigation main-navigation main-navigation-one">
                    <div id="cmm-main_menu" className="cmm-container" aria-expanded="false">
                        <ul>
                            <li><Link href={'/expertise'}> {t("Our Expertise")}</Link></li>
                            <li><Link href={'/'}>{t("Our Products")}</Link></li>
                            <li><Link href={'/'}>{t("Insights")}</Link></li>
                            <li className="cmm-item-has-content">
                                <a>{t("Our Company")}</a>
                                <div className="cmm-content-container">
                                    <div className="cmm-content-wrapper">
                                        <div className="c-rich-nav c-rich-nav--solutions">
                                            <h4 className="vcex-heading">
                                                <Link href={'/about'} className="wpex-no-underline"> {t("About Us")}</Link>
                                            </h4>

                                            <h4 className="vcex-heading">
                                                <Link href={'/contact'} className="wpex-no-underline"> {t("Contact Us")}</Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>

            <div className="headerRight">
                <ul>
                    <li>
                        <Link href={'/'}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="vuesax/linear/call">
                                    <g id="vuesax/linear/call_2">
                                        <g id="call">
                                            <g id="call_2">
                                                <path id="Vector" d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Link>
                    </li>
                    <li><Link href={'/'}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_165_209" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <path d="M0 0.799995H24V23.2H0V0.799995Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_165_209)">
                                <path d="M21.128 3.29786L2.16742 10.5357C1.20567 10.9028 1.2215 11.4584 2.20247 11.7705L6.46219 12.9894L8.70127 19.3923C9.04103 20.3641 9.9386 20.5885 10.6958 19.8914L13.5446 17.2685L17.5478 20.492C18.3613 21.1229 19.1939 20.8135 19.3982 19.8047L22.5049 4.46467C22.7092 3.45588 22.0896 2.93088 21.128 3.29786Z" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.51953 12.9599L17.9299 7.13056L10.6117 14.9067L9.31695 20.1506" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </svg>
                    </Link></li>
                    <li><Link href={'/'}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="whatsapp" clipPath="url(#clip0_165_210)">
                                <path className="Vector" d="M17.0341 13.7828L17.0258 13.8524C14.9978 12.8352 14.7856 12.6997 14.5237 13.095C14.342 13.3688 13.8127 13.9897 13.6531 14.1735C13.4917 14.3545 13.3312 14.3684 13.0573 14.2431C12.7806 14.1039 11.8925 13.8115 10.8411 12.8649C10.0222 12.127 9.47249 11.2221 9.31017 10.9437C9.03995 10.4741 9.6053 10.4072 10.1199 9.42715C10.2121 9.23224 10.1651 9.0791 10.0969 8.94082C10.0277 8.8016 9.4771 7.43728 9.24654 6.89341C9.02519 6.35139 8.79739 6.42007 8.62677 6.42007C8.09555 6.37366 7.70728 6.38109 7.36512 6.73934C5.87659 8.38581 6.25195 10.0842 7.52559 11.8903C10.0286 15.187 11.3622 15.794 13.8007 16.6367C14.4592 16.8474 15.0596 16.8177 15.5345 16.749C16.0639 16.6645 17.1642 16.0798 17.3938 15.4255C17.629 14.7712 17.629 14.2283 17.5598 14.103C17.4916 13.9777 17.3108 13.9081 17.0341 13.7828Z" fill="white" />
                                <path className="Vector" d="M19.9521 4.01942C12.7756 -2.91793 0.898982 2.11358 0.894316 11.9003C0.894316 13.8566 1.40672 15.7643 2.38298 17.4489L0.800049 23.2L6.71272 21.6582C14.0907 25.6434 23.1963 20.3515 23.2001 11.9059C23.2001 8.94173 22.0427 6.15204 19.938 4.05581L19.9521 4.01942ZM21.3353 11.8751C21.3297 18.9991 13.5092 23.4483 7.32405 19.8121L6.98805 19.6123L3.48805 20.5223L4.42605 17.1204L4.20298 16.7704C0.353915 10.6432 4.77605 2.63531 12.0672 2.63531C14.5443 2.63531 16.8693 3.60129 18.6202 5.35126C20.3702 7.08629 21.3353 9.41119 21.3353 11.8751Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_165_210">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link></li>
                    <li><Link href={'/'}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="vuesax/linear/global">
                                <g id="vuesax/linear/global_2">
                                    <g id="global">
                                        <path id="Vector" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path id="Vector_2" d="M8.0001 3H9.0001C7.0501 8.84 7.0501 15.16 9.0001 21H8.0001" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path id="Vector_3" d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path id="Vector_4" d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path id="Vector_5" d="M3 9.00001C8.84 7.05001 15.16 7.05001 21 9.00001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link></li>
                    <li className='button'><Link href={'/contact'} className='btn btn-outline-light'>{t("Contact Us")}</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Menu