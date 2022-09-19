import React from "react";

import { Column, Row, Img, Text, SelectBox, Button } from "components";

const Home1Page = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center mx-[auto] 2xl:pb-[104px] 3xl:pb-[124px] lg:pb-[80px] xl:pb-[92px] w-[100%]">
        <Row className="bg-gray_900_a2 items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
          <Img
            src="images/img_group.svg"
            className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] w-[10%]"
            alt="Group"
          />
          <Row className="font-lato justify-center lg:ml-[244px] xl:ml-[279px] 2xl:ml-[314px] 3xl:ml-[377px] pt-[2px] rounded-radius1 w-[25%]">
            <Column className="items-center mt-[1px] rounded-radius1 w-[14%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_300 w-[auto]">
                Home
              </Text>
              <div className="bg-green_300 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius1 w-[100%]"></div>
            </Column>
            <Text className="font-medium lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 w-[auto]">
              Teb 1
            </Text>
            <Text className="font-medium lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 w-[auto]">
              Teb 2
            </Text>
            <Text className="font-medium lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 w-[auto]">
              Teb 3
            </Text>
            <Text className="font-medium lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 w-[auto]">
              Teb 4
            </Text>
          </Row>
          <Text className="bg-green_300 flex font-bold items-center lg:ml-[324px] xl:ml-[370px] 2xl:ml-[417px] 3xl:ml-[500px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius50 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-white_A700 tracking-ls1 w-[40px]">
            AP
          </Text>
        </Row>
        <Column className="bg-white_A700 font-lato items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius12 shadow-bs w-[88%]">
          <Row className="w-[100%]">
            <Column className="items-center rounded-radius6 w-[48%]">
              <SelectBox
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[100%]"
                placeholderClassName="text-bluegray_800"
                name="language"
                placeholder="English"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_vector.svg"
                    className="lg:w-[9px] lg:h-[7px] lg:mr-[17px] xl:w-[10px] xl:h-[9px] xl:mr-[19px] 2xl:w-[12px] 2xl:h-[10px] 2xl:mr-[22px] 3xl:w-[14px] 3xl:h-[11px] 3xl:mr-[26px]"
                    alt="Vector"
                  />
                }
              ></SelectBox>
              <Column className="border border-bluegray_101 border-solid justify-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius6 w-[100%]">
                <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_600 w-[auto]">
                  Enter text...
                </Text>
                <Img
                  src="images/img_microphone.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[2px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[365px] xl:mt-[418px] 2xl:mt-[470px] 3xl:mt-[564px] w-[3%]"
                  alt="microphone"
                />
              </Column>
            </Column>
            <Img
              src="images/img_maximize.svg"
              className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[1%]"
              alt="maximize"
            />
            <Column className="items-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] rounded-radius6 w-[48%]">
              <SelectBox
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_800 w-[100%]"
                placeholderClassName="text-bluegray_800"
                name="Dropdown"
                placeholder="Gujarati"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_vector.svg"
                    className="lg:w-[9px] lg:h-[7px] lg:mr-[17px] xl:w-[10px] xl:h-[9px] xl:mr-[19px] 2xl:w-[12px] 2xl:h-[10px] 2xl:mr-[22px] 3xl:w-[14px] 3xl:h-[11px] 3xl:mr-[26px]"
                    alt="Vector"
                  />
                }
              ></SelectBox>
              <Column className="bg-gray_50 border border-bluegray_101 border-solid lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius6 w-[100%]">
                <Text className="font-normal lg:mb-[382px] xl:mb-[437px] 2xl:mb-[492px] 3xl:mb-[590px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_600 w-[auto]">
                  Enter text...
                </Text>
              </Column>
            </Column>
          </Row>
          <Button
            className="font-medium lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[39%]"
            size="md"
          >
            Download
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default Home1Page;
