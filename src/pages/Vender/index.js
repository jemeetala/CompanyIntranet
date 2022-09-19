import React from "react";

import { Column, Row, Img, Text, Input, Button } from "components";

const VenderPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-lato items-center mx-[auto] lg:pb-[180px] xl:pb-[206px] 2xl:pb-[232px] 3xl:pb-[278px] w-[100%]">
        <Row className="bg-gray_900_a2 items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
          <Img
            src="images/img_group.svg"
            className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] w-[10%]"
            alt="Group"
          />
          <Text className="font-lato font-medium lg:ml-[244px] xl:ml-[279px] 2xl:ml-[314px] 3xl:ml-[377px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 w-[auto]">
            Home
          </Text>
          <Text className="font-lato font-medium lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 w-[auto]">
            Teb 1
          </Text>
          <Text className="font-lato font-medium lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 w-[auto]">
            Teb 2
          </Text>
          <Text className="font-lato font-medium lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 w-[auto]">
            Teb 3
          </Text>
          <Text className="font-lato font-medium lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 w-[auto]">
            Teb 4
          </Text>
          <Text className="bg-green_300 flex font-bold font-inter items-center lg:ml-[324px] xl:ml-[370px] 2xl:ml-[417px] 3xl:ml-[500px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius50 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-white_A700 tracking-ls1 w-[40px]">
            AP
          </Text>
        </Row>
        <Column className="bg-white_A700 items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius12 w-[35%]">
          <Column className="items-center lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius6 w-[100%]">
            <Column className="items-center pt-[3px] rounded-radius6 w-[100%]">
              <Column className="rounded-radius6 w-[100%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  Title 1
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                  wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
                  name="Dropdown"
                  placeholder="Text"
                ></Input>
              </Column>
              <Column className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rounded-radius6 w-[100%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  Title 2
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                  wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
                  name="Dropdown One"
                  placeholder="Text"
                ></Input>
              </Column>
              <Column className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rounded-radius6 w-[100%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  Title 3
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                  wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
                  name="Dropdown Two"
                  placeholder="Text"
                ></Input>
              </Column>
              <Column className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rounded-radius6 w-[100%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  Title 4
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                  wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
                  name="Dropdown Three"
                  placeholder="Text"
                ></Input>
              </Column>
              <Column className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rounded-radius6 w-[100%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  Title 5
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                  wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
                  name="Dropdown Four"
                  placeholder="Text"
                ></Input>
              </Column>
            </Column>
            <Button className="font-medium lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
              Send
            </Button>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default VenderPage;
