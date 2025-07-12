import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react"; // or your icon set

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "outline", "destructive", "link"],
      defaultValue: "default",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "lg", "default", "icon"],
      defaultValue: "default",
    },
    className: { control: "text" },
    leftIcon: { control: "text" },
    rightIcon: { control: "text" },
    asChild: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ui-w-4 ui-h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button leftIcon={<ChevronLeft size={16} />}>Back</Button>
      <Button rightIcon={<ChevronRight size={16} />}>Next</Button>
      <Button
        leftIcon={<ChevronLeft size={16} />}
        rightIcon={<ChevronRight size={16} />}>
        Both
      </Button>
    </div>
  ),
};
