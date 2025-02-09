
## Not Found Page
- We can able to create a default not-found.tsx file by our own to display
- We can also customize it according to our need like if reviewId is greater than 1000 then shows "Review not found"

## File Colocation

## Private Folders
- A private folder indicates that it is a private implementation detail and should not be considered by the routing system
- The folder and all its subfolders are excluded from routing
- Prefix the folder name with an underscore

## Private Folders contd.
- For separating UI logic from routing logic
- For consistently organizing internal files across a project
- For sorting and grouping files in code editors
- And finally, for avoiding potential naming conficts with future Next.js file conventions
- If you want to include an underscore in URL segments, you can prefix the folder name with "%5F," which is the URL-encoded form of an underscore

## Route groups
- it omits the "auth" name from the user and groups the authentication folders
