const styles = {
     boxWidth: "xl:max-w-w[1200px] w-full",
     heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
     paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
     paddingX: "sm:px-16 px-6",
     paddingY: "sm:py-16 py-6",
     padding: "sm:px-16 px-6 sm:py-12 py-4",

     flexCenter: "flex justify-center items-center",
     flexStart: "flex justify-center items-start",

     marginX: "sm:mx-16 mx-6",
     marginY: "sm:my-16 my-6",

     sectionHeadText:
          "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
     sectionSubText:
          "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

const layout = {
     section: `flex md:flex-row flex-col ${styles.paddingY}`,
     sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
     sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
     sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
     sectionInfo: `flex-1 ${styles.flexStart} flex-col`
};

export { styles, layout };