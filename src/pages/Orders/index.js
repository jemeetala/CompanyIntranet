import React from "react";

import { Column, Row, Img, Text, Line, Button, List } from "components";

const OrdersPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center mx-[auto] lg:pb-[57px] xl:pb-[65px] 2xl:pb-[74px] 3xl:pb-[88px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-gray_900_a2 items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Img
              src="images/img_group.svg"
              className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] w-[10%]"
              alt="Group"
            />
            <Row className="font-lato justify-center lg:ml-[140px] xl:ml-[161px] 2xl:ml-[181px] 3xl:ml-[217px] pt-[2px] rounded-radius1 w-[47%]">
              <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 w-[auto]">
                Translator
              </Text>
              <Column className="items-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius1 w-[18%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_300 w-[auto]">
                  Purchase order
                </Text>
                <Line className="bg-green_300 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius1 w-[100%]" />
              </Column>
              <Text className="font-medium lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 w-[auto]">
                Purchase items
              </Text>
              <Text className="font-medium lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 w-[auto]">
                Invoices
              </Text>
              <Text className="font-medium lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_400 w-[auto]">
                Ship Notices
              </Text>
            </Row>
            <Text className="bg-green_300 flex font-bold items-center lg:ml-[189px] xl:ml-[217px] 2xl:ml-[244px] 3xl:ml-[292px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius50 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-white_A700 tracking-ls1 w-[40px]">
              AP
            </Text>
          </Row>
        </header>
        <Column className="font-lato items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[88%]">
          <Row className="items-center justify-between rounded-radius6 w-[100%]">
            <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
              Purchase Order
            </Text>
            <Button className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[7%]">
              Export
            </Button>
          </Row>
          <Column className="bg-white_A700 items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pb-[14px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px] rounded-radius12 w-[100%]">
            <Row className="bg-teal_400 items-center justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Document No
              </Text>
              <Text className="font-semibold 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Customer Name
              </Text>
              <Text className="font-semibold 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] 2xl:ml-[94px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Supplier Name
              </Text>
              <Text className="font-semibold 2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Status
              </Text>
              <Text className="font-semibold lg:ml-[134px] xl:ml-[153px] 2xl:ml-[173px] 3xl:ml-[207px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Payload Id
              </Text>
              <Text className="font-semibold lg:ml-[108px] xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]">
                Order Date
              </Text>
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[90%]"
              orientation="vertical"
            >
              <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  text
                </Text>
              </Row>
            </List>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default OrdersPage;
