# Website Update Instructions

## Photos
1. Identify the photo to be replaced.
  - This can be done by viewing the page in a browser: right-click on the image and select "inspect element".
  - Find the file name located after the src attribute.
2. Open the folder "img".
3. Replace the old image file with the new image file.
  - Make sure the file name remains exactly the same, including capitalization. 
## Embeds

## Links
1. Open the file corresponding to the last part of the web address, i.e. "index.html".
2. Find the link that you wish to change.
  - Links are identified by "\<a>\</a>" tags.
3. Change the part in the quotes following the "href=" attribute.
  - For an email address, add "mailto:" before the address.
  - For a phone number, add "tel:" before the address.
## Some Useful Tags
### Headings
To set heading sizes, surround the heading text with "\<h1>\</h1>"..."\<h6>\</h6>" tags, with h1 being the largest and h6 being the smallest.
### Image Size
To set the size of an image, add "style="width: x%;" " replacing "x" with whatever percentage of the screen's width you want it to take up. The height will automatically adjust to match.
### Text Style
To make text bold, surround it with "\<b>\</b>"
To make text italic, surround it with "\<i>\</i>"
To make text underlined, surround it with "\<u>\</u>"
### Text Color
To change the color of specific text, surround it with "\<span style="color: x">\</span>" replacing x with the name of a color or a hex code.
#### Common Hex Codes in this Site
Blue text: #0098d6
Blue buttons: #004B87
Blue navigation bar: #0081c6 and #25b3ff
### Line Breaks
To force text to a new line (similar to what "enter" or "return" do in normal typing), add "\<br />" in the spot you want the text to break.
### Buttons
To make text into a button, add "class="linkcolor" " to the tag.