import { SelectBox } from "components";
export default {
  title: "jemee_s_application89/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder6",
  variant: "OutlineBluegray101",
  size: "sm",
  className: "w-[300px]",
};
