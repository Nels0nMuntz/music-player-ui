import type { Meta, StoryObj } from "@storybook/react-vite";
import { MultipleSelector, Option } from "./multiple-selector";

const meta: Meta<typeof MultipleSelector> = {
  title: "Components/Multiple Selector",
  component: MultipleSelector,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text displayed in the input",
      defaultValue: "Select options...",
    },
    creatable: {
      control: "boolean",
      description: "Allow creating new options when none match",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      description: "Disables the component",
      defaultValue: false,
    },
    maxSelected: {
      control: { type: "number", min: 1 },
      description: "Maximum number of selected options allowed",
      defaultValue: 3,
    },
    hidePlaceholderWhenSelected: {
      control: "boolean",
      description: "Hides placeholder when options are selected",
      defaultValue: false,
    },
    groupBy: {
      control: "text",
      description: "Key to group options by",
    },
    defaultOptions: {
      control: "object",
      description: "Default available options (uncontrolled mode)",
    },
    value: {
      control: "object",
      description: "Controlled selected values",
    },
    delay: {
      control: { type: "number", min: 0 },
      description: "Debounce time for async search (ms)",
      defaultValue: 500,
    },
    triggerSearchOnFocus: {
      control: "boolean",
      description: "Triggers search when input receives focus",
      defaultValue: false,
    },
    hideClearAllButton: {
      control: "boolean",
      description: "Hides the clear-all (×) button",
      defaultValue: false,
    },
    selectFirstItem: {
      control: "boolean",
      description: "Auto-select the first item in the list",
      defaultValue: true,
    },
    badgeClassName: {
      control: "text",
      description: "Custom class name for selected badges",
    },
    className: {
      control: "text",
      description: "Custom class name for root component",
    },
    testId: {
      control: "text",
      description: "Test ID used for testing",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof MultipleSelector>;

const defaultOptions: Option[] = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Angular", value: "angular" },
];

export const Default: Story = {
  args: {
    defaultOptions,
    placeholder: "Select a framework...",
  },
};

export const WithGroupedOptions: Story = {
  args: {
    defaultOptions: [
      { label: "React", value: "react", group: "Frontend" },
      { label: "Vue", value: "vue", group: "Frontend" },
      { label: "NestJS", value: "nestjs", group: "Backend" },
      { label: "Django", value: "django", group: "Backend" },
    ],
    groupBy: "group",
    placeholder: "Select a stack...",
  },
};

export const MaxSelectedLimit: Story = {
  args: {
    defaultOptions,
    maxSelected: 2,
    placeholder: "Select up to 2...",
  },
};

export const Disabled: Story = {
  args: {
    defaultOptions,
    disabled: true,
    value: [defaultOptions[0]],
    placeholder: "Disabled selector",
  },
};

export const Creatable: Story = {
  args: {
    creatable: true,
    placeholder: "Type to create new...",
    defaultOptions,
  },
};

export const AsyncSearch: Story = {
  args: {
    placeholder: "Search with delay...",
    onSearch: async (value: string) => {
      await new Promise((res) => setTimeout(res, 800));
      return defaultOptions.filter((opt) =>
        opt.label.toLowerCase().includes(value.toLowerCase())
      );
    },
  },
};
