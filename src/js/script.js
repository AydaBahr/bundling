import {secretButton ,secretParagraph} from "./vars"
 var showSecret = false;
 
 updateSecretParagraph();
export function toggleSecretState() {
     showSecret = !showSecret;
     updateSecretParagraph();
     updateSecretButton()
 }
 
 function updateSecretButton() {
     if (showSecret) {
         secretButton.textContent = 'Hide the Secret';
     } else {
         secretButton.textContent = 'Show the Secret';
     }
 }
 
 function updateSecretParagraph() {
     if (showSecret) {
         secretParagraph.style.display = 'block';
     } else {
         secretParagraph.style.display = 'none';
     }
 }