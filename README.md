# ECE Playlist
- A playlist featuring videos from ECE department at the University of British Columbia. All copyrights are reserved.

## How to add new videos (for ECE department)
- Firstly, go to src->data folder and open videos.ts.
- Next, host the videos you want to host with direct links within department private browsers (see previous examples on this page).
- Then, create json objects with curly braces like before and modify the fields: title, url and thumbnail.
- In order to create a thumbnail photo, convert the photo you would like to be put as a thumbnail photo into webp format (recommendation: on mac, screenshot it with command+shift+4, then use an online converter to convert it into webp) and then drag and drop into public/assets folder.
- Make sure the naming structure of the json object remains the same (assets/<name_of_your_thumbnail>.webp).
Now, the videos should be appearing with correct thumbnail of your choice on the browser.
