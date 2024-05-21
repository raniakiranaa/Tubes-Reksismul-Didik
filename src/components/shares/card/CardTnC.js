import React from "react";
import { Card, CardBody, CardFooter, Checkbox } from "@nextui-org/react";

export function CardTnC() {
  return (
    <Card className="max-w-[1100px] shadow-lg">
      <CardBody className="px-3 py-0 text-medium text-default-400 mb-4">
        <p className="text-sub-text regular-18 pt-4 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium, justo vel rutrum consectetur, velit risus auctor arcu, vitae volutpat magna mi sit amet libero. Quisque sit amet mauris ligula. Vestibulum sagittis, diam nec semper molestie, lorem ex varius ex, fermentum rhoncus leo purus in nulla. Suspendisse varius volutpat felis id aliquam. Vivamus cursus laoreet nunc a maximus. Curabitur eleifend ante sit amet metus eleifend, ac volutpat nunc hendrerit. Phasellus laoreet commodo congue. Morbi eget placerat est, sed placerat erat. Mauris convallis enim vitae dignissim lacinia. Ut at neque ac eros ultrices dignissim. Integer facilisis diam dui, id sollicitudin velit lacinia in. Pellentesque iaculis eros lacinia neque varius, ac aliquet lorem rhoncus. Phasellus aliquet a metus sit amet blandit. Integer sed semper odio.
        </p>
      </CardBody>
      <CardFooter className="gap-3 mt-4">
        <div className="flex items-center gap-2">
          <Checkbox
            defaultSelected={false}
            color="primary"
            style={{
              width: "20px", // Adjust width as needed
              height: "20px", // Adjust height as needed
              padding: "10px", // Adjust padding as needed
              fontSize: "16px", // Adjust font size as needed
              border: "2px solid black", // Adjust border width and color as needed
              borderRadius: "0px", // Adjust border radius as needed
            }}
          />
          <span className="regular-18 pt-0 text-justify">I have read and agree to the Terms and Conditions above</span>
        </div>
      </CardFooter>
    </Card>
  );
}
