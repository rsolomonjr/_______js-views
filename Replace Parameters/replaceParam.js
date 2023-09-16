// Write a function to Replace parameters in url

// function replaceParamsInUrl(url, paramMappings) {
//     // Use a regular expression to find and replace parameters in the URL
//     for (const mapping of paramMappings) {
//       const { from, to } = mapping;
//       const regex = new RegExp(`:${from}\\b`, 'g');
//       url = url.replace(regex, to);
//     }
//     return url;
//   }

// Without Regex
function replaceParamsInUrl(url, paramMappings) {
    for (const mapping of paramMappings) {
      const { from, to } = mapping;
      const paramPlaceholder = `:${from}`;
      while (url.includes(paramPlaceholder)) {
        url = url.replace(paramPlaceholder, to);
      }
    }
    return url;
  }

const initialUrl = "/posts/:postId/comments/:commentId";

const resultUrl = replaceParamsInUrl(initialUrl, [
  { from: "postId", to: "1" },
  { from: "commentId", to: "3" },
]);


console.log(resultUrl);

