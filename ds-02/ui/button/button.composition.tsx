import "@learnbit/styling.config.tailwind/globals.tailwind.css";
import { DoneCircleIcon } from "@sbs-org/ds-02.ui.icons.done-circle-icon";

import { Button, ButtonSkin, ButtonSize } from "./button";

const TYPES: {
  name: string;
  skins: ButtonSkin[];
}[] = [
    { name: "Primary", skins: ["primary", "primary_success", "primary_danger", "primary_warning",] },
    { name: "Secondary", skins: ["secondary", "secondary_success", "secondary_danger", "secondary_warning",] },
    { name: "Terciary", skins: ["terciary", "terciary_success", "terciary_danger", "terciary_warning",] },
    { name: "Cancel", skins: ["cancel"] },
  ];

const SIZES: ButtonSize[] = ["small", "medium", "large"];

export const BasicButton = () => {
  return (
    <>
      <h1 className='j-text-text-primary j-mb-3'>Skins</h1>

      <div className="j-flex j-text-text-primary j-gap-6 j-flex-wrap">
        {TYPES.map(type => (<div className='j-flex j-flex-col j-items-center j-gap-4' key={`jelou-button-example-${type.name}`}>
          <h1 className='j-text-text-primary'>{type.name}</h1>

          {type.skins.map(skin => (<Button leftIcon={<DoneCircleIcon />} skin={skin} size='medium' key={`button-expample-skin-${skin}`}>
            {type.name}
          </Button>))}
        </div>))}
      </div>

      <h1 className='j-text-text-primary j-mt-6'>Sizes</h1>

      <div className='j-flex j-items-center j-gap-4'>
        {SIZES.map(size => (
          <Button
            leftIcon={<DoneCircleIcon />}
            skin="primary" size={size} key={`jelou-button-example-skin-${size}`}
            style={{ textTransform: "capitalize" }}
          >
            {size}
          </Button>))}
      </div>
    </>
  );
};

