import React from 'react';

const NormalSidebar = ({ onSearchClick, onNotificationClick }) => {
  console.log('NormalSidebar props:', { onSearchClick, onNotificationClick });

  const handleSearchClick = () => {
    console.log('NormalSidebar: Search button clicked');
    if (onSearchClick) {
      onSearchClick();
    }
  };

  const handleNotificationClick = () => {
    console.log('NormalSidebar: Notification button clicked');
    if (onNotificationClick) {
      onNotificationClick();
    }
  };

  return (
    <div className="w-[244px] 2xl:w-[335px] h-[1024px] 2xl:h-[1080px] px-3 py-6 bg-black flex flex-col justify-start items-start gap-6 overflow-hidden z-20">
      {/* Logo */}
      <div className="w-[244px] 2xl:w-full px-3 flex justify-start items-center gap-2.5 overflow-hidden">
        <div className="justify-start text-white text-4xl font-normal font-['Guttery']">
          Ourstory
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="w-full flex flex-col justify-start items-start gap-1">
        {/* Home */}
        <div className="w-[244px] 2xl:w-[335px] h-12 p-3 bg-black rounded-lg flex justify-start items-center gap-2.5 overflow-hidden cursor-pointer hover:bg-neutral-800 transition-colors">
          <div className="py-2 flex justify-start items-center gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="#fff" stroke-width="2.5" d="M12 1.25c.38 0 .694.087.97.25l.116.074.007.005 9 6.172.01.007c.16.106.287.23.39.373l.093.15c.085.156.135.31.154.469l.01.161v12.346c0 .334-.1.619-.355.896l-.12.12c-.306.278-.65.436-1.083.47l-.191.007H16.5c-.107 0-.16-.02-.193-.042l-.03-.024a.213.213 0 0 1-.025-.027v.001l-.002-.033v-6.854c0-.648-.224-1.235-.646-1.706l-.194-.194a2.747 2.747 0 0 0-1.645-.71l-.262-.01H10.5c-.619 0-1.206.175-1.705.55l-.208.173a2.518 2.518 0 0 0-.822 1.621l-.015.274v6.86a.192.192 0 0 1-.002.03l-.023.025a.221.221 0 0 1-.133.06l-.09.006H3c-.46 0-.825-.123-1.142-.366l-.132-.111c-.301-.276-.44-.554-.47-.877l-.006-.14V8.914c0-.165.03-.322.092-.477l.074-.156c.086-.157.195-.294.333-.412l.148-.111.01-.007 9-6.172.007-.005A1.825 1.825 0 0 1 12 1.25Z"/>
            </svg>
            <div className="justify-start text-white text-base font-semibold font-['Roboto']">
              Home
            </div>
          </div>
        </div>

        {/* Search - PENTING: gunakan handleSearchClick */}
        <div className="w-[244px] 2xl:w-[335px] h-12 p-3 bg-black rounded-lg flex justify-start items-center gap-2.5 overflow-hidden cursor-pointer hover:bg-neutral-800 transition-colors" onClick={handleSearchClick}>
          <div className="py-2 flex justify-start items-center gap-2.5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.6753 2.40753e-08C8.97284 0.000145054 7.29514 0.407392 5.78213 1.18776C4.26912 1.96814 2.96467 3.09901 1.97762 4.48602C0.990567 5.87304 0.349534 7.47598 0.107999 9.16111C-0.133535 10.8462 0.0314335 12.5647 0.589142 14.1731C1.14685 15.7815 2.08113 17.2333 3.31402 18.4072C4.54692 19.5811 6.04269 20.4432 7.67653 20.9215C9.31037 21.3998 11.0349 21.4804 12.7063 21.1567C14.3776 20.833 15.9473 20.1143 17.2844 19.0606L21.8714 23.6474C22.1083 23.8762 22.4256 24.0028 22.7549 24C23.0842 23.9971 23.3992 23.865 23.6321 23.6321C23.865 23.3993 23.9971 23.0843 24 22.7549C24.0028 22.4256 23.8762 22.1084 23.6474 21.8715L19.0604 17.2847C20.3014 15.7105 21.074 13.8187 21.29 11.8259C21.506 9.83307 21.1565 7.81971 20.2816 6.01622C19.4067 4.21274 18.0417 2.69199 16.3428 1.62803C14.6439 0.564065 12.6798 -0.000134569 10.6753 2.40753e-08ZM2.51113 10.6758C2.51113 8.51058 3.37128 6.43408 4.90235 4.90307C6.43342 3.37206 8.50999 2.51194 10.6753 2.51194C12.8405 2.51194 14.9171 3.37206 16.4482 4.90307C17.9792 6.43408 18.8394 8.51058 18.8394 10.6758C18.8394 12.8409 17.9792 14.9174 16.4482 16.4484C14.9171 17.9795 12.8405 18.8396 10.6753 18.8396C8.50999 18.8396 6.43342 17.9795 4.90235 16.4484C3.37128 14.9174 2.51113 12.8409 2.51113 10.6758Z" fill="white"/>
            </svg>
            <div className="justify-start text-white text-base font-normal font-['Roboto']">
              Search
            </div>
          </div>
        </div>

        {/* Explore */}
        <div className="w-[244px] 2xl:w-[335px] h-12 p-3 bg-black rounded-lg flex justify-start items-center gap-2.5 overflow-hidden cursor-pointer hover:bg-neutral-800 transition-colors">
          <div className="py-2 flex justify-start items-center gap-2.5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.65 17.1L13.71 15.36C14.11 15.24 14.4552 15.0348 14.7456 14.7444C15.036 14.454 15.2408 14.1092 15.36 13.71L17.1 7.65C17.16 7.43 17.1052 7.2348 16.9356 7.0644C16.766 6.894 16.5708 6.8392 16.35 6.9L10.29 8.64C9.88999 8.76 9.5452 8.9652 9.2556 9.2556C8.966 9.546 8.7608 9.8908 8.64 10.29L6.9 16.35C6.84 16.57 6.8952 16.7652 7.0656 16.9356C7.236 17.106 7.4308 17.1608 7.65 17.1ZM12 13.8C11.5 13.8 11.0752 13.6252 10.7256 13.2756C10.376 12.926 10.2008 12.5008 10.2 12C10.1992 11.4992 10.3744 11.0744 10.7256 10.7256C11.0768 10.3768 11.5016 10.2016 12 10.2C12.4984 10.1984 12.9236 10.3736 13.2756 10.7256C13.6276 11.0776 13.8024 11.5024 13.8 12C13.7976 12.4976 13.6228 12.9228 13.2756 13.2756C12.9284 13.6284 12.5032 13.8032 12 13.8ZM12 24C10.34 24 8.78 23.6848 7.32 23.0544C5.86 22.424 4.59 21.5692 3.51 20.49C2.43 19.4108 1.5752 18.1408 0.945601 16.68C0.316001 15.2192 0.000801518 13.6592 1.51899e-06 12C-0.00079848 10.3408 0.314401 8.7808 0.945601 7.32C1.5768 5.8592 2.4316 4.5892 3.51 3.51C4.5884 2.4308 5.8584 1.576 7.32 0.9456C8.7816 0.3152 10.3416 0 12 0C13.6584 0 15.2184 0.3152 16.68 0.9456C18.1416 1.576 19.4116 2.4308 20.49 3.51C21.5684 4.5892 22.4236 5.8592 23.0556 7.32C23.6876 8.7808 24.0024 10.3408 24 12C23.9976 13.6592 23.6824 15.2192 23.0544 16.68C22.4264 18.1408 21.5716 19.4108 20.49 20.49C19.4084 21.5692 18.1384 22.4244 16.68 23.0556C15.2216 23.6868 13.6616 24.0016 12 24ZM12 21.6C14.66 21.6 16.9252 20.6652 18.7956 18.7956C20.666 16.926 21.6008 14.6608 21.6 12C21.5992 9.3392 20.6644 7.074 18.7956 5.2044C16.9268 3.3348 14.6616 2.4 12 2.4C9.3384 2.4 7.0732 3.3352 5.2044 5.2056C3.3356 7.076 2.4008 9.3408 2.4 12C2.3992 14.6592 3.3344 16.9244 5.2056 18.7956C7.0768 20.6668 9.34159 21.6016 12 21.6Z" fill="white"/>
            </svg>
            <div className="justify-start text-white text-base font-normal font-['Roboto']">
              Explore
            </div>
          </div>
        </div>

        {/* Notifications - PENTING: gunakan handleNotificationClick */}
        <div className="w-[244px] 2xl:w-[335px] h-12 p-3 bg-black rounded-lg flex justify-start items-center gap-2.5 overflow-hidden cursor-pointer hover:bg-neutral-800 transition-colors" onClick={handleNotificationClick}>
          <div className="py-2 flex justify-start items-center gap-2.5">
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 1.75C20.6572 1.75 22.75 3.83379 22.75 6.3291C22.75 7.44362 22.5294 9.40953 21.1055 11.834C19.6797 14.2615 17.0072 17.2161 12 20.2422C6.99327 17.216 4.32046 14.2616 2.89453 11.834C1.4704 9.40946 1.25 7.44348 1.25 6.3291C1.25005 3.83379 3.34281 1.75 6 1.75C7.2293 1.75 8.45068 2.42016 9.4541 3.23633C9.93863 3.63047 10.334 4.027 10.6074 4.3252C10.7434 4.47346 10.8471 4.59559 10.915 4.67773C10.949 4.71875 10.9741 4.75034 10.9893 4.76953C10.9967 4.77892 11.0022 4.78563 11.0049 4.78906V4.79004C11.2413 5.10071 11.6096 5.2832 12 5.2832C12.3902 5.2832 12.7577 5.10043 12.9941 4.79004L12.9951 4.78906C12.9978 4.78563 13.0033 4.77892 13.0107 4.76953C13.0259 4.75034 13.051 4.71875 13.085 4.67773C13.1529 4.59559 13.2566 4.47346 13.3926 4.3252C13.666 4.027 14.0614 3.63047 14.5459 3.23633C15.5493 2.42016 16.7707 1.75 18 1.75Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="justify-start text-white text-base font-normal font-['Roboto']">
              Notifications
            </div>
          </div>
        </div>

        {/* Create */}
        <div className="w-[244px] 2xl:w-[335px] h-12 p-3 bg-black rounded-lg flex justify-start items-center gap-2.5 overflow-hidden cursor-pointer hover:bg-neutral-800 transition-colors">
          <div className="py-2 flex justify-start items-center gap-2.5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.93011 11.9993C4.93011 11.7182 5.04199 11.4486 5.24112 11.2498C5.44025 11.051 5.71034 10.9393 5.99195 10.9393H10.9373V6.00237C10.9373 5.72123 11.0492 5.45161 11.2483 5.25282C11.4474 5.05402 11.7175 4.94234 11.9991 4.94234C12.2807 4.94234 12.5508 5.05402 12.7499 5.25282C12.9491 5.45161 13.061 5.72123 13.061 6.00237V10.9393H18.0063C18.2879 10.9393 18.558 11.051 18.7571 11.2498C18.9562 11.4486 19.0681 11.7182 19.0681 11.9993C19.0681 12.2805 18.9562 12.5501 18.7571 12.7489C18.558 12.9477 18.2879 13.0594 18.0063 13.0594H13.061V17.9963C13.061 18.2774 12.9491 18.5471 12.7499 18.7459C12.5508 18.9447 12.2807 19.0563 11.9991 19.0563C11.7175 19.0563 11.4474 18.9447 11.2483 18.7459C11.0492 18.5471 10.9373 18.2774 10.9373 17.9963V13.0594H5.99195C5.71034 13.0594 5.44025 12.9477 5.24112 12.7489C5.04199 12.5501 4.93011 12.2805 4.93011 11.9993Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M5.36901 0.365773C9.77559 -0.121924 14.2227 -0.121924 18.6292 0.365773C21.2159 0.654103 23.3041 2.68795 23.6071 5.28433C24.131 9.74637 24.131 14.2536 23.6071 18.7157C23.3027 21.312 21.2145 23.3445 18.6292 23.6342C14.2227 24.1219 9.77559 24.1219 5.36901 23.6342C2.78238 23.3445 0.694097 21.312 0.39112 18.7157C-0.130373 14.2537 -0.130373 9.74631 0.39112 5.28433C0.694097 2.68795 2.78379 0.654103 5.36901 0.365773ZM18.3942 2.47171C14.1438 2.00137 9.85441 2.00137 5.60403 2.47171C4.8172 2.55885 4.08277 2.90826 3.5194 3.4635C2.95603 4.01873 2.59661 4.74736 2.49922 5.53167C1.99567 9.82971 1.99567 14.1717 2.49922 18.4697C2.59691 19.2538 2.95646 19.9821 3.5198 20.5371C4.08315 21.092 4.81741 21.4412 5.60403 21.5283C9.81882 21.9975 14.1794 21.9975 18.3942 21.5283C19.1806 21.4409 19.9145 21.0916 20.4776 20.5366C21.0406 19.9817 21.4 19.2536 21.4976 18.4697C22.0012 14.1717 22.0012 9.82971 21.4976 5.53167C21.3997 4.74809 21.0402 4.02027 20.4772 3.46563C19.9141 2.91098 19.1804 2.56185 18.3942 2.47453" fill="white"/>
            </svg>
            <div className="justify-start text-white text-base font-normal font-['Roboto']">
              Create
            </div>
          </div>
        </div>
          
        {/* Profile */}
        <div className="w-[244px] 2xl:w-[335px] h-12 p-3 bg-black rounded-lg flex justify-start items-center gap-2.5 overflow-hidden cursor-pointer hover:bg-neutral-800 transition-colors">
          <div className="py-2 flex justify-start items-center gap-2.5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="white"/>
            </svg>
            <div className="justify-start text-white text-base font-normal font-['Roboto']">
              Profile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalSidebar;