// import React from "react";
// import { Card, CardBody, CardFooter, Checkbox } from "@nextui-org/react";

// export function CardTnC() {
//   return (
//     <Card className="max-w-[1100px] shadow-lg">
//       <CardBody className="px-3 py-0 text-medium text-default-400 mb-4">
//         <p className="text-sub-text regular-18 pt-4 text-justify">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium, justo vel rutrum consectetur, velit risus auctor arcu, vitae volutpat magna mi sit amet libero. Quisque sit amet mauris ligula. Vestibulum sagittis, diam nec semper molestie, lorem ex varius ex, fermentum rhoncus leo purus in nulla. Suspendisse varius volutpat felis id aliquam. Vivamus cursus laoreet nunc a maximus. Curabitur eleifend ante sit amet metus eleifend, ac volutpat nunc hendrerit. Phasellus laoreet commodo congue. Morbi eget placerat est, sed placerat erat. Mauris convallis enim vitae dignissim lacinia. Ut at neque ac eros ultrices dignissim. Integer facilisis diam dui, id sollicitudin velit lacinia in. Pellentesque iaculis eros lacinia neque varius, ac aliquet lorem rhoncus. Phasellus aliquet a metus sit amet blandit. Integer sed semper odio.
//         </p>
//       </CardBody>
//       <CardFooter className="gap-3 mt-4">
//         <div className="flex items-center gap-2">
//           <Checkbox
//             defaultSelected={false}
//             color="primary"
//             style={{
//               width: "20px", // Adjust width as needed
//               height: "20px", // Adjust height as needed
//               padding: "10px", // Adjust padding as needed
//               fontSize: "16px", // Adjust font size as needed
//               border: "2px solid black", // Adjust border width and color as needed
//               borderRadius: "0px", // Adjust border radius as needed
//             }}
//           />
//           <span className="regular-18 pt-0 text-justify">I have read and agree to the Terms and Conditions above</span>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }

import React from "react";
import { Card, CardBody, CardFooter, Checkbox } from "@nextui-org/react";
import { Button } from '@/components/shares/button'

export function CardTnC() {
  return (
    <Card className="max-w-[1100px] shadow-lg" style={{ borderRadius: '16px' }}>
      <CardBody className="px-5 text-medium text-default-400 mb-4 overflow-y-auto h-[400px]">
        <div className="text-sub-text regular-18 p-4 pt-8 text-justify">
          <p>1. Introduction</p>

          <p>Welcome to DidikTV, a feature designed to help users meet strangers and learn Bahasa Indonesia. By using this feature, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use this feature.</p>
          <br></br>
          <p>2. Eligibility</p>

          <p>To use this feature, you must be at least 18 years old. By using the feature, you confirm that you meet this age requirement.</p>
          <br></br>
          <p>3. User Conduct</p>

          <p>Users agree to engage in respectful and appropriate behavior during video calls. The following actions are strictly prohibited:</p>

          <ul>
          <li>- Harassment, abuse, or offensive behavior towards other users.</li>
          <li>- Sharing or displaying explicit, inappropriate, or illegal content.</li>
          <li>- Sharing personal information such as phone numbers, addresses, or financial details.</li>
          <li>- Recording or distributing any part of the video call without explicit consent from all participants.</li>
          </ul>
          <br></br>
          <p>4. Privacy and Data Protection</p>

          <p>We are committed to protecting your privacy. We do not record or store video calls. However, we may collect and process certain data for the purpose of improving our service. For more details, please refer to our Privacy Policy.</p>
          <br></br>
          <p>5. Reporting Violations</p>

          <p>If you encounter any violations of these terms or inappropriate behavior, please report it to us immediately through our designated reporting system. We will investigate and take appropriate action, which may include banning the offending user.</p>
          <br></br>
          <p>6. Disclaimer of Warranties</p>

          <p>The video call feature is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the feature will be uninterrupted or error-free.</p>
          <br></br>
          <p>7. Limitation of Liability</p>

          <p>To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:</p>

          <ul>
          <li>- Your use or inability to use the feature.</li>
          <li>- Any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
          <li>- Any interruption or cessation of transmission to or from the feature.</li>
          </ul>
          <br></br>
          <p>8. Modifications to Terms</p>

          <p>We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting the updated terms on our website. Your continued use of the feature after such modifications will constitute your acknowledgment of the modified terms and your agreement to abide by them.</p>
          <br></br>
          <p>9. Governing Law</p>

          <p>These terms and conditions are governed by and construed in accordance with the laws of Indonesia, without regard to its conflict of law principles.</p>
      </div>
      </CardBody>

      <CardFooter className="gap-3 flex flex-col items-center">
        <div className="flex items-center gap-2 w-full justify-start pl-2"> {/* Ensure text is aligned left */}
          <Checkbox
            defaultSelected={false}
            color="primary"
            style={{
              width: "20px",
              height: "20px",
              padding: "4px", // Adjust padding as needed (consider checkbox size)
              fontSize: "16px", // Adjust font size as needed
              border: "2px solid black", // Adjust border width and color as needed
              borderRadius: "4px", // Adjust border radius as needed
              marginLeft: "15px",
            }}
          />
          <span className="regular-18 text-justify">I have read and agree to the Terms and Conditions above</span>
        </div>
        <div className="flex justify-center gap-2 w-full pb-8 pt-4"> {/* Center the buttons */}
          <Button type="small-secondary" title="Decline" linkPage="" />
          <Button type="small" title="Accept" linkPage="" />
        </div>
      </CardFooter>
    </Card>
  );
}
